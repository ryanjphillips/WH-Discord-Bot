import { SPOTIFYKEYSTABLEPATH, getSpotifyKeys } from '../../sqlite/procs.js';
import { funcSqliteGet } from '../../sqlite/functions/exportAllFunctions.js';
import executeProcOnDatabase from '../../sqlite/executeProcOnDatabase.js';

async function getSpotifyKeysFromDb() {
  const spotifyKeys = await Promise.resolve(executeProcOnDatabase(
    SPOTIFYKEYSTABLEPATH,
    funcSqliteGet,
    getSpotifyKeys,
  ));

  return spotifyKeys;
}

export default getSpotifyKeysFromDb;
