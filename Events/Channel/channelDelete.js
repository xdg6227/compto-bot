const { Discord, Permissions, MessageEmbed } = require('discord.js');
const CHANNEL_TYPE_MAP = {
  'GUILD_CATEGORY': 'Category',
  'GUILD_TEXT': 'Text Channel',
  'GUILD_VOICE': 'Voice Channel',
  'GUILD_NEWS': 'News Channel',
  'GUILD_STAGE_VOICE': 'Stage Channel'
};

module.exports = async (client, channel) => {
  var logChannel = channel.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${channel.guild.id}`);

  if (channel.type === 1 || channel.type === 3 || !channel.guild.members.cache.get(client.user.id).permissions.has([Permissions.FLAGS.VIEW_AUDIT_LOG])) return;

  const logs = await channel.guild.fetchAuditLogs(5, null, 12).catch(() => { });
  if (!logs) return;
  const log = logs.entries.find(e => e.target.id === channel.id);
  if (!log) return;

  let embed = new MessageEmbed()
    .setDescription(`:wastebasket: **${CHANNEL_TYPE_MAP[channel.type] || channel.type} was deleted: #${channel.name}**`)
    .setFooter(`Channel ID: ${channel.id}`)
    .setTimestamp(Date.now(), true)
    .setColor('RED')

  if (Date.now() - ((log.id / 4194304) + 1420070400000) < 3000) {
    if (loggingEnabled === true) {
      logChannel.send({ embeds: [embed] });
    } else {
      return;
    }
  } else {
    if (loggingEnabled === true) {
      logChannel.send({ embeds: [embed] });
    } else {
      return;
    }
  }
}