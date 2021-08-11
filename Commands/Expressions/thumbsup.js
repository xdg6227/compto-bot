const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "thumbsup",
  description: "Express your emotions on others.",
  usage: "thumbsup",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media1.tenor.com/images/5cab083c2ddd255f2df768086b99d2ba/tenor.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} gives a thumbs up :thumbsup:`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}