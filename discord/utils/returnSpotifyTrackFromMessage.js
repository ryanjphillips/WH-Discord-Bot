function returnSpotifyTrackFromMessage(message) {
  const spotifyRegex = /[a-z0-9]{22}/i;
  const spotifyTrack = spotifyRegex.exec(message);
  return `spotify:track:${spotifyTrack}`;
}

console.log(returnSpotifyTrackFromMessage('https://open.spotify.com/track/7bWYhxFbOug7H3cgdiW3FU'));

export default returnSpotifyTrackFromMessage;
