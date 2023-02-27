import { SPOTIFYKEYSTABLEPATH, getSpotifyRefreshKey } from '../../sqlite/procs.js';
import { funcSqliteGet } from '../../sqlite/functions/exportAllFunctions.js';
import executeProcOnDatabase from '../../sqlite/executeProcOnDatabase.js';

async function getRefreshTokenFromDb() {
  const refreshToken = await Promise.resolve(executeProcOnDatabase(
    SPOTIFYKEYSTABLEPATH,
    funcSqliteGet,
    getSpotifyRefreshKey,
  ));

  return refreshToken.refreshToken;
}

export default getRefreshTokenFromDb;
