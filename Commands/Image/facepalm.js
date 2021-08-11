const { MessageEmbed, MessageAttachment } = require("discord.js");
const canvacord = require('canvacord');

module.exports = {
  name: "facepalm",
  description: "Edit your avatar picture.",
  usage: "facepalm",
  aliases: [],
  category: "Image",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvacord.facepalm(avatar)
    
    message.delete();
    return message.channel.send({ files: [{ attachment: image, name: "avatar.png" }] })
  }
}