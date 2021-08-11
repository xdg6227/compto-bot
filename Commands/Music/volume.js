const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "volume",
  description: "Change the volume of the song.",
  usage: "volume [amount]",
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

    let volume = parseInt(args[0]);
    if (volume > 100) return message.channel.send('For saftey reasons, we have limited the volume to 0-100.');
    if (volume < 0) return message.channel.send('For saftey reasons, we have limited the volume to 0-100.');

    client.player.setVolume(message, volume);
    let embed = new MessageEmbed()
      .setTitle(`:musical_note: ${message.guild.name}'s Player`)
      .setDescription(`The volume has been changed to **${volume}**.`)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}