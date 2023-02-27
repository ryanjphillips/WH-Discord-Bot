import { SPOTIFYKEYSTABLEPATH, getSpotifyAccessKey } from '../../sqlite/procs.js';
import { funcSqliteGet } from '../../sqlite/functions/exportAllFunctions.js';
import executeProcOnDatabase from '../../sqlite/executeProcOnDatabase.js';

async function getAccessTokenFromDB() {
  const tokenGenerated = await Promise.resolve(executeProcOnDatabase(
    SPOTIFYKEYSTABLEPATH,
    funcSqliteGet,
    getSpotifyAccessKey,
  ));

  return tokenGenerated.accessToken;
}

export default getAccessTokenFromDB;
