const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, oldChannel, newChannel) => {
  var logChannel = newChannel.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${newChannel.guild.id}`);

  var embed = new MessageEmbed()
    .setTitle('<:chanel:865852793273581598> Channel was updated')
    .setColor('YELLOW')
    .setDescription(`I was unable to find what was updated.`)
    .setFooter(`Channel ID: ${newChannel.id}`)

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}