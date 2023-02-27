import createDatabaseConnection from './functions/createDatabaseConnection.js';
import closeDatabaseConnection from './functions/closeDatabaseConnection.js';

function executeProcOnDatabase(fileName, dbFunction, SQL, params) {
  const databaseConnection = createDatabaseConnection(fileName);
  const databaseReturn = dbFunction(databaseConnection, SQL, params);
  closeDatabaseConnection(databaseConnection);

  return databaseReturn;
}

export default executeProcOnDatabase;
