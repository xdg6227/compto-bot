const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pray",
  description: "Express your emotions on others.",
  usage: "pray",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media1.tenor.com/images/1afa22b6d4673cfe3a45c3a29ce72737/tenor.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} prays :pray:`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}