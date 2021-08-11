const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "stare",
  description: "Express your emotions on others.",
  usage: "stare",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media1.tenor.com/images/ba5b02bdba146f48edcc0ae7f91785d2/tenor.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} stares`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}