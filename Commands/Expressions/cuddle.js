const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cuddle",
  description: "Express your emotions on others.",
  usage: "cuddle [@user]",
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
    let image = 'https://media.tenor.com/images/853bb442dd8eae619c4a524ffad4261c/tenor.gif';
    if (!person2) return message.channel.send('Please provide someone to cuddle with.');
    if (person2 == person1.id) return message.channel.send('You cannot cuddle yourself.');

    console.log(await client.neko.sfw.hug())
    let embed = new MessageEmbed()
      .setTitle(`${person1} cuddles with ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}