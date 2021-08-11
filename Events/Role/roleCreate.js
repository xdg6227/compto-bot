const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, role) => {
  var logChannel = role.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${role.guild.id}`);

  const roleID = role.id;
  role.guild.fetchAuditLogs({ 'type': 'ROLE_CREATE' })
    .then(logs => logs.entries.find(entry => entry.target.id == roleID))
    .then(entry => {
      author = entry.executor;

      var embed = new MessageEmbed()
        .setTitle('<:privacy:865854104034476062> Role was created')
        .setColor('GREEN')
        .setDescription(`**Name:** ${role}\n**Created by:** ${author}`)
        .setFooter(`Role ID: ${role.id}`)

      if (loggingEnabled === true) {
        logChannel.send({ embeds: [embed] });
      } else {
        return;
      }
    })
    .catch(error => console.error(error));
}