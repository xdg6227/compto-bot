const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "repeat",
  description: "Repeat the current song.",
  usage: "repeat",
  aliases: [],
  category: "Music",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    if (!message.member.voice.channel) return message.channel.send('Please join a voice channel.');
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Please join my current voice channel.');

    if (client.player.setRepeatMode(message, disabled)) {
      client.player.setRepeatMode(message, enable)
      let enabledEmbed = new MessageEmbed()
        .setTitle(`${message.guild.name}'s Player`)
        .setDescription(`Repeat was enabled.`)
        .setColor('#7289da')
      message.channel.send({ embeds: [enabledEmbed] });
    } else if (client.player.setRepeatMode(message, enable)) {
      client.player.setRepeatMode(message, disabled)
      let disabledEmbed = new MessageEmbed()
        .setTitle(`${message.guild.name}'s Player`)
        .setDescription(`Repeat was disabled.`)
        .setColor('#7289da')
      message.channel.send({ embeds: [disabledEmbed] });
    }
  }
}