import https from 'https';
import querystring from 'querystring';

async function spotifyPost(apiRoute, accessToken, body) {
  return new Promise((resolve, reject) => {
    const queryStringBody = JSON.stringify(body);
    const authOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Content-Length': queryStringBody.length,
      },
      json: true,
    };

    const req = https.request(`https://api.spotify.com/v1/${apiRoute}`, authOptions, (res) => {
      res.on('data', (d) => {
        resolve(d.toString('utf8'));
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(queryStringBody);
    req.end();
  });
}
export default spotifyPost;
