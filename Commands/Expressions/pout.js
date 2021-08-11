const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pout",
  description: "Express your emotions on others.",
  usage: "pout",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media1.tenor.com/images/c9c9ff2eed3dff5c3b9f7c0c033704da/tenor.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} pouts`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}