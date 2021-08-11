const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shrug",
  description: "Express your emotions on others.",
  usage: "shrug",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media.tenor.com/images/8a6ed3d685fb66e6e6d3b4b02f882ce9/tenor.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} shrugs`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}