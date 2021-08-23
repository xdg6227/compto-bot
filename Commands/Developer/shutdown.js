const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shutdown",
  description: "Shutdown the bot.",
  usage: "shutdown",
  aliases: [],
  category: "Developer",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: true,
  guildOnly: true,
  async execute(client, message, args) {
    if (!client.ownerID.includes(message.author.id)) return message.channel.send('This command is for the owner only.');

    try {
      const embed = new MessageEmbed()
        .setTitle('<a:loading:865853991660159026> Shutting down..')
        .setColor('#FFFF00')
        .setDescription(`I am shutting down... goodbye!`)
      await message.channel.send({ embeds: [embed] });

      console.log(`[SHUTDOWN] Bot was shutdown by ${message.author.tag}`);
      process.exit();
    } catch (error) {
      let errorMessages = require('../../Data/responses.json').error;
      let errMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

      const errorEmbed = new MessageEmbed()
        .setTitle(`<:redwarning:865854104193466368> ${errMsg}`)
        .setColor('RED')
        .setDescription(`The error has been logged to the console. Here is a brief description of the error:\n\n\`\`\`${error}\`\`\``)
      message.channel.send({ embeds: [errorEmbed] });

      const cmdErrorEmbed = new MessageEmbed()
        .setTitle(`Command Error`)
        .setDescription(`**Command:** ${this.name}\n**Error:** ${error}`)
        .setColor('RED')
        .setTimestamp(message.createdAt, true)
      client.guilds.cache.get('848479759284436992').channels.cache.get('874853925428277298').send({ embeds: [cmdErrorEmbed] })
    }
  }
}
