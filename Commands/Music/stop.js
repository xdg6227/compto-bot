const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stop the current song playing.",
  usage: "stop",
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

    client.player.stop(message);
    let embed = new MessageEmbed()
      .setTitle(`:musical_note: ${message.guild.name}'s Player`)
      .setDescription(`The music has stopped, Goodbye!`)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}