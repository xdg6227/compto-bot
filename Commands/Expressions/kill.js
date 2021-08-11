const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kill",
  description: "Express your emotions on others.",
  usage: "kill [@user]",
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
    let image = 'https://media.tenor.com/images/de83ca20c5ff8251e0d30bc07a0048a6/tenor.gif';
    if (!person2) return message.channel.send('Please provide someone to kill.');
    if (person2 == person1.id) return message.channel.send('You cannot kill yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} kills ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}