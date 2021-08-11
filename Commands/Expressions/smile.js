const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "smile",
  description: "Express your emotions on others.",
  usage: "smile",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://i.pinimg.com/originals/82/b3/9c/82b39c323ca376e9bb5844a54973fc42.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} smiles`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}