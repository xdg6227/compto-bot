const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clearqueue",
  description: "Clears the current queue if any exists.",
  usage: "clearqueue",
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

    client.player.clearQueue(message)
    let embed = new MessageEmbed()
      .setTitle(`:musical_note: ${message.guild.name}'s Player`)
      .setDescription(`The queue has been cleared!`)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}