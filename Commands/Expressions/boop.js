const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "boop",
  description: "Express your emotions on others.",
  usage: "boop",
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
    let image = 'https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif?itemid=6287077';
    if (!person2) return message.channel.send('Please provide someone to boop.');
    if (person2 == person1.id) return message.channel.send('You cannot boop yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} boops ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}