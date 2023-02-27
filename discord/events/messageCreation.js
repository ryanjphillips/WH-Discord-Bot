import { Events } from 'discord.js';
import returnSpotifyTrackFromMessage from '../utils/returnSpotifyTrackFromMessage.js';
import messageHasSpotifyLink from '../utils/messageHasSpotifyLink.js';
import executeRequestOnSpotifyApi from '../../spotify/executeRequestOnSpotifyApi.js';
import { httpsSpotifyPost } from '../../spotify/requests/request.js';

async function messageCreate() {
  return {
    name: Events.MessageCreate,
    once: false,
    async execute(message) {
      if (messageHasSpotifyLink(message)) {
        message.reply('HMMmmhmm... this looks like a spotify link. Adding it to the Wrong House playlist.');
        const spotifyID = returnSpotifyTrackFromMessage(message);

        const body = {
          uris:
           [
             spotifyID,
           ],
        };

        await executeRequestOnSpotifyApi('playlists/5b5689s9IisRLTLr7StAt9/tracks', httpsSpotifyPost, body);
      }
    },
  };
}

export default messageCreate;
