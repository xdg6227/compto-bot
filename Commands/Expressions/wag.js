const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "wag",
  description: "Express your emotions on others.",
  usage: "wag",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://66.media.tumblr.com/1ffc67242468fa4edd15c2bda6205457/tumblr_inline_p8opgsoQhe1un9eoh_540.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} wags`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}