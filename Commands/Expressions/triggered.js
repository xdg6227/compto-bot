const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "triggered",
  description: "Express your emotions on others.",
  usage: "triggered",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://i.pinimg.com/originals/2f/57/d7/2f57d74651c6eda5b2c7f22288a1f923.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} is triggered`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}