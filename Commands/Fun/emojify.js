const { Discord, MessageEmbed } = require("discord.js");
const { letterTrans } = require('custom-translate');
const dictionary = require('../../Data/emojis.json');

module.exports = {
  name: "emojify",
  description: "Send text as emojis.",
  usage: "emojify [text]",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let text = args.slice(0).join(' ');
    if (!text) return message.channel.send('Please provide text to translate.');

    let embed = new MessageEmbed()
      .setDescription(letterTrans(args.join(' '), dictionary, ' '))
      .setColor('RANDOM')

    message.channel.send({ embeds: [embed] })
  }
}