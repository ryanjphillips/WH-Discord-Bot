function sqliteRun(databaseConnection, SQL, params) {
  databaseConnection.run(SQL, params, (err) => {
    if (err) {
      return console.error(err);
    }

    console.log('Successfully ran sqlite3.Run...');
  });
}

export default sqliteRun;
