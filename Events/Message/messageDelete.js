const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
  /* Snipe */
  if (message.author.bot) return;
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })

  /* Logging */
  var logChannel = message.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${message.guild.id}`);

  let msg;
  if (message > 1000) msg = 'Message over 1000 characters'; else msg = message;

  let embed = new MessageEmbed()
    .setDescription(`:wastebasket: **Message was deleted**\n\n**Channel:** <#${message.channel.id}>\n**Message:** ${msg}`)
    .setTimestamp(Date.now(), true)
    .setColor('RED')

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}