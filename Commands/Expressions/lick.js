const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "lick",
  description: "Express your emotions on others.",
  usage: "lick [@user]",
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
    let image = 'https://i.gifer.com/CAmE.gif';
    if (!person2) return message.channel.send('Please provide someone to lick.');
    if (person2 == person1.id) return message.channel.send('You cannot lick yourself.');

    let embed = new MessageEmbed()
      .setTitle(`${person1} licks ${person2.username} :tongue:`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}