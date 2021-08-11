const { Discord, MessageEmbed } = require("discord.js");
const pickupLines = require('../../Data/pickuplines.json');

module.exports = {
  name: "pickupline",
  description: "Get a pickup line ready-to-use and impress your crush/date.",
  usage: "pickupline",
  aliases: ["pickup-line"],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let pickupLine = pickupLines[Math.round(Math.random() * (pickupLines.length - 1))];

    let embed = new MessageEmbed()
      .setDescription(`:sparkling_heart: ${pickupLine}`)
      .setColor('#8205B3')

    message.channel.send({ embeds: [embed] });
  }
}