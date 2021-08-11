const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hold",
  description: "Express your emotions on others.",
  usage: "hold",
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
    let image = 'https://i.pinimg.com/originals/b9/7c/3b/b97c3bf7842833f7a735db8df9503eec.gif';
    if (!person2) return message.channel.send('Please provide someone to hold.');
    if (person2 == person1.id) return message.channel.send('You cannot hold yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} holds ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}