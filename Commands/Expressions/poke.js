const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "poke",
  description: "Express your emotions on others.",
  usage: "poke [@user]",
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
    let image = 'https://media3.giphy.com/media/FdinyvXRa8zekBkcdK/giphy.gif';
    if (!person2) return message.channel.send('Please provide someone to poke.');
    if (person2 == person1.id) return message.channel.send('You cannot poke yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} pokes ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}