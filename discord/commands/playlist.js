import { SlashCommandBuilder } from 'discord.js';

function server() {
  return {
    data: new SlashCommandBuilder()
      .setName('playlist')
      .setDescription('Provides the link the Wrong House playlist.'),
    async execute(interaction) {
      await interaction.reply('Here is the link to the Wrong House playlist: https://open.spotify.com/playlist/5b5689s9IisRLTLr7StAt9');
    },
  };
}

export default server;
