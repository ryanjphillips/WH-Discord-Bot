import sqlite3 from 'sqlite3';

function createDatabaseConnection(fileName) {
  const databaseConnection = new sqlite3.Database(fileName, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }

    console.log('Database Connection established...');
  });

  return databaseConnection;
}

export default createDatabaseConnection;
