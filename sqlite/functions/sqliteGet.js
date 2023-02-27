function sqliteGet(databaseConnection, SQL, params) {
  return new Promise((resolve, reject) => {
    databaseConnection.get(SQL, params, (err, row) => {
      if (err) reject(err);
      resolve(row);
    });
  });
}
export default sqliteGet;
