const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "snipe",
  description: "Snipe the last deleted message.",
  usage: "snipe",
  aliases: [],
  category: "Moderation",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const msg = client.snipes.get(message.channel.id);

    try {
      let embed = new MessageEmbed()
        .setAuthor(msg.author, msg.member.user.displayAvatarURL())
        .setDescription(msg.content)
        .setColor('RANDOM')
      message.channel.send({ embeds: [embed] });
    } catch {
      message.channel.send('There is nothing to snipe!')
    }
  }
}