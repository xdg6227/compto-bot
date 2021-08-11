const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "remove",
  description: "Remove a song from the queue.",
  usage: "remove [song name or number]",
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
    let trackNumber = parseInt(args[0]);

    try {
      client.player.remove(message, trackNumber);
      let embed = new MessageEmbed()
        .setTitle(`:musical_note: ${message.guild.name}'s Player`)
        .setDescription(`Removed **${track.name}** from the queue.`)
        .setColor('#7289da')
      message.channel.send({ embeds: [embed] });
    } catch (error) {
      let errorEmbed = new MessageEmbed()
        .setTitle(`${message.guild.name}'s Player`)
        .setDescription(`There are no more songs in the queue.`)
        .setColor('#7289da')
      message.channel.send({ embeds: [errorEmbed] });
    }
  }
}