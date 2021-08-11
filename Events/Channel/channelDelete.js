const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, channel) => {
  var logChannel = channel.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${channel.guild.id}`);

  const channelID = channel.id;
  channel.guild.fetchAuditLogs({ 'type': 'CHANNEL_DELETE' })
    .then(logs => logs.entries.find(entry => entry.target.id == channelID))
    .then(entry => {
      author = entry.executor;

      var embed = new MessageEmbed()
        .setTitle('<:chanel:865852793273581598> Channel was deleted')
        .setColor('RED')
        .setDescription(`**Name:** ${channel}\n**Type:** ${channel.type}\n**Deleted by:** ${author}`)

      if (loggingEnabled === true) {
        logChannel.send({ embeds: [embed] });
      } else {
        return;
      }
    })
    .catch(error => console.error(error));
}