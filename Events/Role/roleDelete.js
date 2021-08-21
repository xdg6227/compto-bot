const { Discord, Permissions, MessageEmbed } = require('discord.js');

module.exports = async (client, role) => {
  var logChannel = role.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${role.guild.id}`);

  if (!role.guild.members.cache.get(client.user.id).permissions.has([Permissions.FLAGS.VIEW_AUDIT_LOG])) return;

  const logs = await role.guild.fetchAuditLogs(5, null, 12).catch(() => { });
  if (!logs) return;
  const log = logs.entries.find(e => e.target.id === role.id);
  if (!log) return;

  let embed = new MessageEmbed()
    .setDescription(`:wastebasket: **Role was deleted: @${role.name}**`)
    .setFooter(`Role ID: ${role.id}`)
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
  }}