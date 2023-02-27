import { REST, Routes } from 'discord.js';
import discordConfig from './config.json' assert {type: 'json'};
import ping from './commands/ping.js';
import user from './commands/user.js';
import server from './commands/server.js';
import playlist from './commands/playlist.js';

const commands = [];
const commandFiles = [ping(), user(), server(), playlist()];

for (const file of commandFiles) {
	const command = file;
	commands.push(command.data.toJSON());
}

 const rest = new REST({ version: '10' }).setToken(discordConfig.token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
		const data = await rest.put(
			Routes.applicationGuildCommands(discordConfig.clientId, discordConfig.guildId),
			{ body: commands },
		);
		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();
