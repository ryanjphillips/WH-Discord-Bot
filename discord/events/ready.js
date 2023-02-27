import { Events } from 'discord.js';

function ready() {
  return {
    name: Events.ClientReady,
    once: true,
    execute(client) {
      console.log(`Ready! Logged in as ${client.user.tag}`);
    },
  };
}

export default ready;
