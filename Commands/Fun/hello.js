const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "hello",
  description: "Have compto say hello.",
  usage: "hello",
  aliases: ["hi", "hey"],
  category: "Fun",
  cooldown: 1,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let randomHello = ["hey", "halo", "hai", "hello", "hola", "hola papi"]
    let random = randomHello[Math.floor(Math.random() * randomHello.length)];
    message.channel.send(`${random} <@${message.author.id}>!`)
  }
}