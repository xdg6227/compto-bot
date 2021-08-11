const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "twerk",
  description: "Express your emotions on others.",
  usage: "twerk",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://thumbs.gfycat.com/EagerNaughtyEel-size_restricted.gifc';

    let embed = new MessageEmbed()
      .setTitle(`${person1} twerks`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}