import https from 'https';

async function spotifyGet(apiRoute, accessToken) {
  return new Promise((resolve, reject) => {
    const authOptions = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    const req = https.get(`https://api.spotify.com/v1/${apiRoute}`, authOptions, (res) => {
      res.on('data', (d) => {
        const dataToString = d.toString('utf8');
        resolve(dataToString);
      });
    });

    req.on('error', (e) => {
      const errorToString = e.toString('utf8');
      reject(errorToString);
    });
  });
}

export default spotifyGet;
