const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "curse",
  description: "Express your emotions on others.",
  usage: "curse <@user>",
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
    let image = 'https://static.wikia.nocookie.net/fairytail/images/c/c2/RoseBomb.gif';
    if (!person2) return message.channel.send('Please provide someone to curse.');
    if (person2 == person1.id) return message.channel.send('You cannot curse yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} curse's ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}