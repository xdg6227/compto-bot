const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "test",
  description: "test",
  usage: "test",
  aliases: [],
  category: "Developer",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    if (!client.owner.includes(message.author.id)) return message.channel.send('This command is for the owner only.');

    // Code
  }
}
