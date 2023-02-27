import { Client, Collection, GatewayIntentBits } from 'discord.js';
import discordToken from './config.json' assert { type: 'json' };

// Import Commands
import ping from './commands/ping.js';
import user from './commands/user.js';
import server from './commands/server.js';
import playlist from './commands/playlist.js';

// Import Events
import interactionCreate from './events/interactionCreate.js';
import ready from './events/ready.js'; 
import messageCreation from './events/messageCreation.js';

async function initBot()
{
  const client = new Client({ intents: [GatewayIntentBits.Guilds, 
                                        GatewayIntentBits.MessageContent,
                                        GatewayIntentBits.GuildMessages,
   ] 
  });
  client.commands = new Collection();
  const commandFiles = [ping(), user(), server(), playlist()];
  const eventFiles = [interactionCreate(), ready(), await messageCreation()];

  for (const file of commandFiles) {
    client.commands.set(file.data.name, file);
  }

  for (const file of eventFiles) {

    console.log(file);
    if (file.once) {
      client.once(file.name, (...args) => file.execute(...args));
    } else {
      client.on(file.name, (...args) => file.execute(...args));
    }
  }

  client.login(discordToken.token);
}

export default initBot;
