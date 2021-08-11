const { Discord, MessageEmbed } = require("discord.js");
const jokes = require('../../Data/jokes.json');

module.exports = {
  name: "joke",
  description: "Send a joke and impress your friends.",
  usage: "joke",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];

    let embed = new MessageEmbed()
      .setDescription(joke)
      .setColor('#FFFF00')

    message.channel.send({ embeds: [embed] })
  }
}