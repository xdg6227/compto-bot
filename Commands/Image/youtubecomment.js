const { MessageEmbed, MessageAttachment } = require("discord.js");
const canvacord = require('canvacord');

module.exports = {
  name: "youtubecomment",
  description: "Create a youtube comment.",
  usage: "youtubecomment [comment]",
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
    if (!messageProv) return message.channel.send('Please provide a message for the comment.');
    let comment = await canvacord.Canvas.youtube({ username: usernameProv, content: messageProv, avatar: imageProv })

    message.delete();
    return message.channel.send({ files: [{ attachment: image, name: "comment.png" }] });
  }
}