const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "punch",
  description: "Express your emotions on others.",
  usage: "punch",
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
    let image = 'https://i.imgur.com/f2kkp3L.gif';
    if (!person2) return message.channel.send('Please provide someone to punch.');
    if (person2 == person1.id) return message.channel.send('You cannot punch yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} punches ${person2.username} :fist:`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}