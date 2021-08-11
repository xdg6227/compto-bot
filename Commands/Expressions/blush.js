const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "blush",
  description: "Express your emotions on others.",
  usage: "blush",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://i.imgur.com/hFkeViW.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} blushes`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}