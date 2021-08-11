const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, oldEmoji, newEmoji) => {
  var logChannel = newEmoji.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${newEmoji.guild.id}`);

  var embed = new MessageEmbed()
    .setTitle('🙂 Emoji was updated')
    .setColor('YELLOW')
    .setDescription(`**Old name:** ${oldEmoji.name}\n**New name:** ${newEmoji.name}`)
    .setFooter(`Emoji ID: ${newEmoji.id}`)

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}