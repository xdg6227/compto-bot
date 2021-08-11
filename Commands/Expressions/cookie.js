const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cookie",
  description: "Express your emotions on others.",
  usage: "cookie",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://i.pinimg.com/originals/91/7c/d5/917cd5657b75c2f1dd778f7246062fc3.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} eates cookie :cookie:`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}