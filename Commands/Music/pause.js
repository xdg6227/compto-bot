const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pause",
  description: "Pause the current song playing.",
  usage: "pause",
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

    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    try {
      client.player.pause(message);
      let embed = new MessageEmbed()
        .setTitle(`:musical_note: ${message.guild.name}'s Player`)
        .setDescription(`The song was paused. \`${prefix}resume\` to continue playing.`)
        .setColor('#7289da')
      message.channel.send({ embeds: [embed] });
    } catch (error) {
      let errorEmbed = new MessageEmbed()
        .setTitle(`${message.guild.name}'s Player`)
        .setDescription(`There is no current song playing.`)
        .setColor('#7289da')
      message.channel.send({ embeds: [errorEmbed] });
    }
  }
}