const { Discord, Permissions, MessageEmbed } = require('discord.js');
const CHANNEL_TYPE_MAP = {
  'GUILD_CATEGORY': 'Category',
  'GUILD_TEXT': 'Text Channel',
  'GUILD_VOICE': 'Voice Channel',
  'GUILD_NEWS': 'News Channel',
  'GUILD_STAGE_VOICE': 'Stage Channel'
};

module.exports = async (client, oldChannel, newChannel) => {
  var logChannel = newChannel.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${newChannel.guild.id}`);

  let embed = new MessageEmbed()
  .setDescription(`:pencil: **${CHANNEL_TYPE_MAP[newChannel.type] || newChannel.type} was edited: ${newChannel.name}**`)
  .setFooter(`Channel ID: ${newChannel.id}`)
  .setTimestamp(Date.now(), true)
  .setColor('ORANGE')
  
  if (oldChannel.name !== newChannel.name) embed.addField('Name', `${oldChannel.name} -> ${newChannel.name}`, true);
  if (oldChannel.topic !== newChannel.topic) embed.addField('Topic', `${oldChannel.topic || 'None'} -> ${newChannel.topic || 'None'}`, true)
  if (oldChannel.nsfw !== newChannel.nsfw) embed.addField('NSFW', `${oldChannel.nsfw} -> ${newChannel.nsfw}`, true);
  if (oldChannel.type !== newChannel.type) embed.addField('Type', `${CHANNEL_TYPE_MAP[oldChannel.type] || oldChannel.type} -> ${CHANNEL_TYPE_MAP[newChannel.type] || newChannel.type}`, true);
  if (oldChannel.permissionOverwrites !== newChannel.permissionOverwrites) return; // Add later
  if (oldChannel.position !== newChannel.position) return;

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}