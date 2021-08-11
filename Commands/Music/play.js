const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "play",
  description: "Play some music in your current voice channel.",
  usage: "play [song name or link]",
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

    let requestedSong = args.slice(0).join(' ');
    if (!requestedSong) return message.channel.send('Please provide a song to play.');

    client.player.play(message, requestedSong, true);
  }
}