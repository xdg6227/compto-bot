const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, oldMessage, newMessage) => {
  var logChannel = newMessage.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${newMessage.guild.id}`);

  var embed = new MessageEmbed()
    .setDescription(`:pencil: Message was updated\n\n**Channel:** <#${newMessage.channel.id}>\n${oldMessage || 'Empty Message'} -> ${newMessage || 'Empty Message'}`)
    .setFooter(`Message ID: ${newMessage.id}`)
    .setTimestamp(Date.now(), true)
    .setColor('ORANGE')

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}