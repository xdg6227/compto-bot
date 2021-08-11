const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "highfive",
  description: "Express your emotions on others.",
  usage: "highfive",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let person2 = message.mentions.users.first() || client.users.cache.get(args[0]);
    let image = 'https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif';
    if (!person2) return message.channel.send('Please provide someone to high five with.');
    if (person2 == person1.id) return message.channel.send('You cannot high five yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} high fives ${person2.username} :clap:`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}