const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, oldMessage, newMessage) => {
  var logChannel = newMessage.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${newMessage.guild.id}`);

  var embed = new MessageEmbed()
    .setTitle(':speech_balloon: Message was updated')
    .setColor('YELLOW')
    .setDescription(`**Old message:** ${oldMessage}\n**Edited message:** ${newMessage}`)
    .setFooter(`Message ID: ${newMessage.id}`)

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}