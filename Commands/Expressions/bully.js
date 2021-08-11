const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bully",
  description: "Express your emotions on others.",
  usage: "bully [@user]",
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
    let image = 'https://i.imgur.com/D8SIe4Z.gif';
    if (!person2) return message.channel.send('Please provide someone to bully.');
    if (person2 == person1.id) return message.channel.send('You cannot bully yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} bullies ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}