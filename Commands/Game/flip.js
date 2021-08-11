const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "flip",
  description: "Flip a coin, win a bet.",
  usage: "flip",
  aliases: [],
  category: "Game",
  cooldown: 5,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let word = ['HEADS!', 'TAILS!'];
    const words = word[Math.floor(Math.random() * word.length)];

    let embed = new MessageEmbed()
      .setTitle(':coin: Coin Flip!')
      .setDescription(`You got ${words}`)
      .setColor('#8205B3')

    message.channel.send({ embeds: [embed] })
  }
}