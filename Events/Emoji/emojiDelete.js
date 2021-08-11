const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, emoji) => {
  var logChannel = emoji.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${emoji.guild.id}`);

  const emojiID = emoji.id;
  emoji.guild.fetchAuditLogs({ 'type': 'EMOJI_DELETE' })
    .then(logs => logs.entries.find(entry => entry.target.id == emojiID))
    .then(entry => {
      author = entry.executor;

      var embed = new MessageEmbed()
        .setTitle('🙂 Emoji was deleted')
        .setColor('RED')
        .setDescription(`**Emoji:** ${emoji}\n**Emoji Name:** ${emoji.name}\n**Deleted by:** ${author}`)

      if (loggingEnabled === true) {
        logChannel.send({ embeds: [embed] });
      } else {
        return;
      }
    })
    .catch(error => console.error(error));
}