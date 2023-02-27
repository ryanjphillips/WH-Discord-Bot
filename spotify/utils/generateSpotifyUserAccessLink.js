import querystring from 'querystring';
import generateRandomString from './generateRandomString.js';
import getSpotifyKeysFromDb from '../databaseCalls/getSpotifyKeysFromDb.js';

async function generateSpotifyUserAccessLink() {
  const spotifyKeys = await getSpotifyKeysFromDb();
  console.log(spotifyKeys);

  const userAccessLink = `https://accounts.spotify.com/authorize?${
    querystring.stringify({
      response_type: 'code',
      client_id: spotifyKeys.clientId,
      scope: spotifyKeys.scope,
      redirect_uri: spotifyKeys.redirectUri,
      state: generateRandomString(16),
    })}`;

  return userAccessLink;
}

console.log(await generateSpotifyUserAccessLink());
export default generateSpotifyUserAccessLink;
