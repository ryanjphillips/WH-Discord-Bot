import https from 'https';
import querystring from 'querystring';
import getSpotifyKeysFromDb from './databaseCalls/getSpotifyKeysFromDb.js';
import executeProcOnDatabase from '../sqlite/executeProcOnDatabase.js';
import { funcSqliteRun } from '../sqlite/functions/exportAllFunctions.js';
import { updateSpotifyKeys } from '../sqlite/procs.js';

async function getSpotifyAccessTokens() {
  const spotifyKeys = await getSpotifyKeysFromDb();
  const rawBody = {
    code: spotifyKeys.code,
    redirect_uri: spotifyKeys.redirectUri,
    grant_type: 'authorization_code',
  };

  const body = querystring.stringify(rawBody);
  const payload = (Buffer.from(`${spotifyKeys.clientId}:${spotifyKeys.clientSecret}`).toString('base64'));
  let spotifyTokens;

  const authOptions = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${payload}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': body.length,
    },
    json: true,
  };

  const req = https.request('https://accounts.spotify.com/api/token', authOptions, (res) => {
    res.on('data', (d) => {
      spotifyTokens = d.toString('utf8');
      const tokenResponse = (JSON.parse(spotifyTokens));
      const dateAndTime = new Date();

      if (tokenResponse.error !== 'invalid_grant') {
        executeProcOnDatabase(
          '../sqlite/tables/spotifyKeys.db',
          funcSqliteRun,
          updateSpotifyKeys,
          [tokenResponse.access_token,
            tokenResponse.refresh_token,
            dateAndTime.toLocaleString()],
        );
      }
    });
  });
  req.on('error', (e) => {
    console.error(e);
  });

  req.write(body);
  req.end();
}

await getSpotifyAccessTokens();
export default getSpotifyAccessTokens;
