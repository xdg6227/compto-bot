const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cry",
  description: "Express your emotions on others.",
  usage: "cry",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://i.pinimg.com/originals/e0/fb/b2/e0fbb27f7f829805155140f94fe86a2e.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} cries`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}