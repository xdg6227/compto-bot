const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, oldRole, newRole) => {
  var logChannel = newRole.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${newRole.guild.id}`);

  var embed = new MessageEmbed()
    .setTitle('<:chanel:865852793273581598> Role was updated')
    .setColor('YELLOW')
    .setDescription(`I was unable to find what was updated.`)
    .setFooter(`Role ID: ${newRole.id}`)

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}