const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, guild, user) => {
  var logChannel = guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${guild.id}`);

  const userID = user.id;
  guild.fetchAuditLogs({ 'type': 'GUILD_BAN_ADD' })
    .then(logs => logs.entries.find(entry => entry.target.id == userID))
    .then(entry => {
      author = entry.executor;

      var embed = new MessageEmbed()
        .setTitle('<:banhammer:865852725773991956> Member was banned')
        .setColor('RED')
        .setDescription(`**Member:** ${user}\n**Reason:** Unable to get reason from audit logs.\n**Moderator by:** ${author}`)

      if (loggingEnabled === true) {
        logChannel.send({ embeds: [embed] });
      } else {
        return;
      }
    })
    .catch(error => console.error(error));
}