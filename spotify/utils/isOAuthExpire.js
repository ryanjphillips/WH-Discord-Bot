import { getSpotifyAccessKeyTime, SPOTIFYKEYSTABLEPATH } from '../../sqlite/procs.js';
import { funcSqliteGet } from '../../sqlite/functions/exportAllFunctions.js';
import executeProcOnDatabase from '../../sqlite/executeProcOnDatabase.js';
import addHours from './addHours.js';

async function isOAuthExpire() {
  const tokenCreationTime = await Promise.resolve(executeProcOnDatabase(
    SPOTIFYKEYSTABLEPATH,
    funcSqliteGet,
    getSpotifyAccessKeyTime,
  ));

  const tokenDateObject = new Date(tokenCreationTime.tokenCeationTime);
  const tokenExpirationDate = addHours(tokenDateObject, 1);

  return (new Date().getTime() >= tokenExpirationDate.getTime());
}

export default isOAuthExpire;
