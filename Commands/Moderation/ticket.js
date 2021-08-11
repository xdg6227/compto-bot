const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ticket",
  description: "Open or close a ticket.",
  usage: "ticket [option] [option]",
  aliases: [],
  category: "Moderation",
  cooldown: 3,
  enabled: false,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    // 
  }
}