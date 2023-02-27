function closeDatabaseConnection(databaseConnection) {
  databaseConnection.close((err) => {
    if (err) {
      console.error(err.message);
    }

    console.log('Successfully closed database...');
  });
}

export default closeDatabaseConnection;
