const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sleepy",
  description: "Express your emotions on others.",
  usage: "sleepy",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media.tenor.com/images/34c6fdf206882d81d4fb0d6133f7f03f/tenor.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} is sleepy`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}