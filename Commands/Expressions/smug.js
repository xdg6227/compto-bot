const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "smug",
  description: "Express your emotions on others.",
  usage: "smug",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media.tenor.com/images/47ad9a4ecdbfc8de0ad9804598521c01/tenor.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} is smug`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}