const { MessageEmbed, MessageAttachment } = require("discord.js");
const canvacord = require('canvacord');

module.exports = {
  name: "changemymind",
  description: "Manipulate an image with text.",
  usage: "changemymind",
  aliases: [],
  category: "Image",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let text = args.slice(0).join(' ');
    if (!text) return message.channel.send('Please provide text.')
    let image = await canvacord.Canvacord.changemymind(text)
    
    message.delete();
    return message.channel.send({ files: [{ attachment: image, name: "avatar.png" }] })
  }
}