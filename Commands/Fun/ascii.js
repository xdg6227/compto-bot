const { Discord, MessageEmbed } = require("discord.js");
const figlet = require("figlet");

module.exports = {
  name: "ascii",
  description: "Send text in ascii text.",
  usage: "ascii [text]",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let text = args.slice(0).join(" ");
    if (!text) return message.channel.send('Please provide text for me to translate.');

    figlet.text(text, function (error, data) {
      if (error) {
        let errorMessages = require('../../Data/responses.json').error;
        let errMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

        let errorEmbed = new MessageEmbed()
          .setTitle(`<:redwarning:865854104193466368> ${errMsg}`)
          .setColor('RED')
          .setDescription(`The error has been logged to the console. Here is a brief description of the error:\n\n\`\`\`${error}\`\`\``)

        message.channel.send({ embeds: [errorEmbed] });

        let cmdErrorEmbed = new MessageEmbed()
          .setTitle(`Command Error`)
          .setDescription(`**Command:** ${this.name}\n**Error:** ${error}`)
          .setColor('RED')
          .setTimestamp(message.createdAt, true)
        client.guilds.cache.get('848479759284436992').channels.cache.get('874853925428277298').send({ embeds: [cmdErrorEmbed] })
      } else if (data.length > 2000) return message.channel.send('The text must be under 2000 characters.');

      message.delete();
      let embed = new MessageEmbed()
        .setDescription(`\`\`\`${data}\`\`\``)
        .setColor('RANDOM')

      message.channel.send({ embeds: [embed] })
    })
  }
}