const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, oldRole, newRole) => {
  var logChannel = newRole.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${newRole.guild.id}`);

  let embed = new MessageEmbed()
  .setDescription(`:pencil: **Role was edited: ${newRole}**`)
  .setFooter(`Role ID: ${newRole.id}`)
  .setTimestamp(Date.now(), true)
  .setColor('ORANGE')
  
  if (oldRole.name !== newRole.name) embed.addField('Name', `${oldRole.name} -> ${newRole.name}`, true);
  if (oldRole.color !== newRole.color) embed.addField('Color', `${intToHex(oldRole[oldRole.color])} -> ${intToHex(newRole[newRole.color])}`, true);
  if (oldRole.permissionOverwrites !== newRole.permissionOverwrites) return; // Add later
  if (oldRole.position !== newRole.position) return;

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}

function intToHex (num) {
  num >>>= 0
  const b = num & 0xFF
  const g = (num & 0xFF00) >>> 8
  const r = (num & 0xFF0000) >>> 16
  return rgbToHex(r, g, b)
}

function rgbToHex (r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}