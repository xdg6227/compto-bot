const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, channel) => {
  if (channel.type === 'dm') return;
  var logChannel = channel.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${channel.guild.id}`);

  const channelID = channel.id;
  channel.guild.fetchAuditLogs({ 'type': 'CHANNEL_CREATE' })
    .then(logs => logs.entries.find(entry => entry.target.id == channelID))
    .then(entry => {
      author = entry.executor;

      var embed = new MessageEmbed()
        .setTitle('<:chanel:865852793273581598> Channel was created')
        .setColor('GREEN')
        .setDescription(`**Name:** ${channel}\n**Type:** ${channel.type}\n**Created by:** ${author}`)
        .setFooter(`Channel ID: ${channel.id}`)

      if (loggingEnabled === true) {
        logChannel.send({ embeds: [embed] });
      } else {
        return;
      }
    })
    .catch(error => console.error(error));
}