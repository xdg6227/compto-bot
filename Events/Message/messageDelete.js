const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
  // Snipe command
  if (message.author.bot) return;
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })

  // Logging
  var logChannel = message.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${message.guild.id}`);

  var embed = new MessageEmbed()
    .setTitle('<:trashcan:865855110256525313> Message was deleted')
    .setColor('RED')
    .setDescription(`**Message:** ${message}`)

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}