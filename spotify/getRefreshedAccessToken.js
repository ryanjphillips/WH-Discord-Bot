import https from 'https';
import querystring from 'querystring';
import getSpotifyKeysFromDb from './databaseCalls/getSpotifyKeysFromDb.js';
import { funcSqliteRun } from '../sqlite/functions/exportAllFunctions.js';
import { updateSpotifyAccessKey, SPOTIFYKEYSTABLEPATH } from '../sqlite/procs.js';
import executeProcOnDatabase from '../sqlite/executeProcOnDatabase.js';

async function getRefreshedAccessToken() {
  const spotifyKeys = await getSpotifyKeysFromDb();

  const rawBody = {
    grant_type: 'refresh_token',
    refresh_token: spotifyKeys.refreshToken,
  };

  const body = querystring.stringify(rawBody);
  const payload = (Buffer.from(`${spotifyKeys.clientId}:${spotifyKeys.clientSecret}`).toString('base64'));

  const authOptions = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${payload}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': body.length,
    },
  };

  const req = https.request('https://accounts.spotify.com/api/token', authOptions, (res) => {
    res.on('data', (d) => {
      const spotifyTokens = d.toString('utf8');
      const tokenResponse = (JSON.parse(spotifyTokens));
      const currentDateAndTime = (new Date()).toLocaleString();

      if (!tokenResponse.error) {
        executeProcOnDatabase(
          SPOTIFYKEYSTABLEPATH,
          funcSqliteRun,
          updateSpotifyAccessKey,
          [tokenResponse.access_token, currentDateAndTime],
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

export default getRefreshedAccessToken;
