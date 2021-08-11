const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  description: "Have compto say something.",
  usage: "say [text]",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let text = args.slice(0).join(' ');
    if (!text) return message.channel.send('Please provide something for me to say.');

    message.delete();
    message.channel.send(`${text}`);
  }
}