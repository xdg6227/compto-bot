const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "dankrate",
  description: "Get how dank you or a friend is.",
  usage: "dankrate [@user]",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
    let rate = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setTitle(':sunglasses: Dank r8 Machine')
      .setDescription(`<@${user.id}>, you are \`${rate}%\` dank.`)
      .setColor('#7289da')

    message.channel.send({ embeds: [embed] });
  }
}