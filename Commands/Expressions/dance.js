const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dance",
  description: "Express your emotions on others.",
  usage: "dance",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media.tenor.com/images/6c42f5b23210f512be5de188c0c024f1/tenor.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} is dancing`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}