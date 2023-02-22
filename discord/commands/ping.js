import SlashCommandBuilder from 'discord.js';

function ping() {
  return {
    data: new SlashCommandBuilder()
      .setName('user')
      .setDescription('Provides information about the user.'),
    async exectute(interaction) {
      await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    },
  };
}

export default ping;
