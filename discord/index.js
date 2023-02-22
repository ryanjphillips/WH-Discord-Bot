import fs from 'fs';
import path from 'path';
import getDirName from './utils/getDirName.js';
import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import discordToken from './config.json' assert { type: 'json' };

function initBot()
{
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.commands = new Collection();
  const commandsPath = path.join(getDirName(import.meta.url), 'commands');
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = import(filePath).resolve;
    client.commands.set(command.data.name, command);
  }

  client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
  });

  client.on(Events.InteractionCreate, async interaction => {
      if(!interaction.isChatInputCommand()) return;

      const command = client.commands.get(interaction.commandName);

      if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
      }

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
  });

  client.login(discordToken.token);
}

export default initBot;
