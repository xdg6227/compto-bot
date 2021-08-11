const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "queue",
  description: "Shows the current queue.",
  usage: "queue",
  aliases: [],
  category: "Music",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let queue = await client.player.getQueue(message);
    if (!queue) return message.channel.send('There is no current song playing.')

    let queueDesc = queue.tracks.map((track, i) => { return `${i === 0 ? `**Now Playing:** [${track.title}](${track.url})\n**Author:** ${track.author}\n**Time: **${track.duration}\n**Requested By:** ${track.requestedBy}` : `**${i + 1}**: [${track.title}](${track.url})\n**Author:** ${track.author}\n**Time: **${track.duration}\n**Requested By:** ${track.requestedBy}`}`; }).join("\n\n");

    if (queueDesc.length > 2048 && queueDesc.length < 4096) {
      let queueDescPageOneEmbed = new MessageEmbed()
        .setColor('#7289da')
        .setTitle(`:musical_note: ${message.guild.name}'s Player`)
        .setDescription(queueDesc.substring(0, 2048))

      let queueDescPageTwoEmbed = new MessageEmbed()
        .setColor('#7289da')
        .setDescription(queueDesc.substring(2048, 4096))

      message.channel.send({ embeds: [queueDescPageOneEmbed] });
      message.channel.send({ embeds: [queueDescPageTwoEmbed] });
    } else if (queueDesc.length < 2048) {
      let queueDescAllEmbed = new MessageEmbed()
        .setColor('#7289da')
        .setTitle(`:musical_note: ${message.guild.name}'s Player`)
        .setDescription(queueDesc.substring(0, 2048))
      message.channel.send({ embeds: [queueDescAllEmbed] });
    }
  }
}