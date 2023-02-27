function messageHasSpotifyLink(message) {
  const spotifyRegex = /https:\/\/open.spotify.com\/track\/[a-z0-9]{22}/i;
  return spotifyRegex.test(message);
}

export default messageHasSpotifyLink;
