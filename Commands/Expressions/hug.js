const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hug",
  description: "Express your emotions on others.",
  usage: "hug [@user]",
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
    let image = 'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif';
    if (!person2) return message.channel.send('Please provide someone to hug with.');
    if (person2 == person1.id) return message.channel.send('You cannot hug yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} hugs ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}