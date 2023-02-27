import https from 'https';
import querystring from 'querystring';
import spotifyKeys from './spotifyKeys.json' assert { type: 'json' };
import generateRandomString from './utils/generateRandomString.js';

function getSpotifyUserAccess() {

  const authOptions = {
    redirect_uri: spotifyKeys.redirectUri,
    state: generateRandomString(16),
    scope: spotifyKeys.scope,
    response_type: 'code',
    client_id: spotifyKeys.client_id,
  };

  const req = https.get('https://accounts.spotify.com/authorize?', authOptions, (res) => {

    console.log(res);
    res.on('data', (d) => {
      console.log
      console.log(d);
    });
  });
  req.on('error', (e) => {
    console.error(e);
  });

  req.end();
}

getSpotifyUserAccess();
export default getSpotifyUserAccess;
