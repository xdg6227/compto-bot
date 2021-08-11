const { MessageEmbed, MessageAttachment } = require("discord.js");
const canvacord = require('canvacord');

module.exports = {
  name: "simpcard",
  description: "Edit your avatar picture.",
  usage: "simpcard",
  aliases: [],
  category: "Image",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    let embed = new MessageEmbed()
      .setColor('#7289da')
      .setImage(`https://some-random-api.ml/canvas/simpcard?avatar=${avatar}`)
    message.channel.send({ embeds: [embed] })
  }
}