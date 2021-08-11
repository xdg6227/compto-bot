const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "slap",
  description: "Express your emotions on others.",
  usage: "slap [@user]",
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
    let image = 'https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif';
    if (!person2) return message.channel.send('Please provide someone to slap.');
    if (person2 == person1.id) return message.channel.send('You cannot slap yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} slaps ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}