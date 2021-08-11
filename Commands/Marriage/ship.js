const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ship",
  description: "Ship two people together.",
  usage: "ship [@user] [@user]",
  aliases: [],
  category: "Marriage",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.id;
    let person2 = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!person2) return message.channel.send('Please provide someone to ship!')
    let rate = Math.floor(Math.random() * 101);
    let rateTwo = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setDescription(`<@${person1}> :revolving_hearts: **${rate}.${rateTwo}%** :revolving_hearts: ${person2}`)
      .setColor('RANDOM')
    message.channel.send({ embeds: [embed] });
  }
}