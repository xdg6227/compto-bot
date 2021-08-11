const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "happy",
  description: "Express your emotions on others.",
  usage: "happy",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media3.giphy.com/media/LML5ldpTKLPelFtBfY/200.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} is happy :D`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}