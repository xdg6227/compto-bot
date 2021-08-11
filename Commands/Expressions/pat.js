const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pat",
  description: "Express your emotions on others.",
  usage: "pat [@user]",
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
    let image = 'https://media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif';
    if (!person2) return message.channel.send('Please provide someone to pat.');
    if (person2 == person1.id) return message.channel.send('You cannot pat yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} pats ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}