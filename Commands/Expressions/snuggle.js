const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "snuggle",
  description: "Express your emotions on others.",
  usage: "snuggle [@user]",
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
    let image = 'https://media.tenor.com/images/9c6894687c92be974c3720a340b2864e/tenor.gif';
    if (!person2) return message.channel.send('Please provide someone to snuggle with.');
    if (person2 == person1.id) return message.channel.send('You cannot snuggle with yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} snuggles with ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}