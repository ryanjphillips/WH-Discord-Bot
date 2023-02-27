import { SPOTIFYKEYSTABLEPATH, updateSpotifyCode } from '../../sqlite/procs.js';
import { funcSqliteRun } from '../../sqlite/functions/exportAllFunctions.js';
import executeProcOnDatabase from '../../sqlite/executeProcOnDatabase.js';

function updateSpotifyKeyCode(params) {
  executeProcOnDatabase(
    SPOTIFYKEYSTABLEPATH,
    funcSqliteRun,
    updateSpotifyCode,
    params,
  );
}

export default updateSpotifyKeyCode;
