const { MessageEmbed, MessageAttachment } = require("discord.js");
const canvacord = require('canvacord');

module.exports = {
  name: "quote",
  description: "Create a discord quote.",
  usage: "quote",
  aliases: [],
  category: "Image",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let usernameProv = message.author.username;
    let messageProv = args.slice(0).join(' ');
    let imageProv = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    if (!messageProv) return message.channel.send('Please provide a message for the quote.');
    let avatar = await canvacord.Canvas.quote({ image: imageProv, message: messageProv, username: usernameProv });

    message.delete();
    return message.channel.send({ files: [{ attachment: image, name: "avatar.png" }] })
  }
}