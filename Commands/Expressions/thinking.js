const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "thinking",
  description: "Express your emotions on others.",
  usage: "thinking",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media.tenor.com/images/2ab5635c3ca5d3c2891666347e44e587/tenor.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} is thinking`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}