const { Discord, MessageEmbed } = require("discord.js");
const meme = require('random-jokes-api');

module.exports = {
  name: "showerthoughts",
  description: "Tells random shower thoughts.",
  usage: "showerthoughts",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const shower = meme.showerThought();

    let embed = new MessageEmbed()
      .setTitle('🚿 Shower Thoughts')
      .setDescription(shower)
      .setColor('RANDOM')

    message.channel.send({ embeds: [embed] })
  }
}