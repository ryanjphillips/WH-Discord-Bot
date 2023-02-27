import isOAuthExpired from './utils/isOAuthExpire.js';
import getRefreshedAccessToken from './getRefreshedAccessToken.js';
import getAccessTokenFromDb from './databaseCalls/getAccessTokenFromDb.js';

async function executeRequestOnSpotifyApi(apiRoute, requestType, postBody) {
  if (await isOAuthExpired()) {
    console.log('Auth token is expired, getting new token.');
    await getRefreshedAccessToken();
  }

  const accessToken = await getAccessTokenFromDb();
  const requestRespose = requestType(apiRoute, accessToken, postBody);
  return requestRespose;
}

export default executeRequestOnSpotifyApi;
