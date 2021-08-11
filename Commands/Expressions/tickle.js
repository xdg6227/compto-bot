const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "tickle",
  description: "Express your emotions on others.",
  usage: "tickle",
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
    let image = 'https://64.media.tumblr.com/941442065d72227e10604bd36daba8b2/tumblr_o58hfaC3Cy1vpbklao7_500.gif';
    if (!person2) return message.channel.send('Please provide someone to tickle.');
    if (person2 == person1.id) return message.channel.send('You cannot tickle yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} tickles ${person2.username}`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}