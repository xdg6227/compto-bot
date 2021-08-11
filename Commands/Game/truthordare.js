const { Discord, MessageEmbed } = require("discord.js");
const truth = require('../../Data/truths.json');
const dare = require('../../Data/dares.json');

module.exports = {
  name: "truthordare",
  description: "Start a game of truth-or-dare.",
  usage: "truthordate [truth | dare]",
  aliases: ["truth-or-dare"],
  category: "Game",
  cooldown: 5,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let msg = args[0];
    if (!msg || !args) return message.channel.send('Please provide something to do! Your options are: `truth` or `dare`.');

    if (msg == 'truth') {
      const truths = truth[Math.floor(Math.random() * truth.length)];

      let embed = new MessageEmbed()
        .setTitle(":nerd: Truth or Dare")
        .setDescription(`You choose: **Truth**\n\n${truths}`)
        .setColor('#7289da')

      message.channel.send({ embeds: [embed] });
    }

    if (msg == 'dare') {
      const dares = dare[Math.floor(Math.random() * dare.length)];

      let embed = new MessageEmbed()
        .setTitle(":smiling_imp: Truth or Dare")
        .setDescription(`You choose: **Dare**\n\n${dares}`)
        .setColor('#7289da')

      message.channel.send({ embeds: [embed] });
    }
  }
}