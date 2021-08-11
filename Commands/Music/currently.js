const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "currently",
  description: "See the current song playing.",
  usage: "currently",
  aliases: [],
  category: "Music",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let track = await client.player.nowPlaying(message);

    try {
      let embed = new MessageEmbed()
        .setTitle(`:musical_note: ${message.guild.name}'s Player`)
        .setThumbnail(track.thumbnail)
        .setDescription(`Currently Playing  **[${track.title}](${track.url})**`)
        .addField(`Requested By`, track.requestedBy, true)
        .addField(`Author`, track.author, true)
        .addField(`Duration`, `\`${track.duration}\``, true)
        .addField(`Progress`, client.player.createProgressBar(message))
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