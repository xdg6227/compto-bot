const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, oldGuild, newGuild) => {
  // var logChannel = newGuild.channels.cache.find(ch => ch.name.includes('log'))
  // var loggingEnabled = await client.db.fetch(`settings_logging_${newGuild.id}`);

  // var embed = new MessageEmbed()
  //   .setTitle('Guild updated')
  //   .setColor('Green')

  // if (oldGuild.name !== newGuild.name) embed.addField('Name Updated', `**Old Name:** ${oldGuild.name}\n**New Name:** ${newGuild.name}`)
  // if (oldGuild.region !== newGuild.region) embed.addField('Region Updated', `**Region Name:** ${oldGuild.region}\n**New Region:** ${newGuild.region}`)
  // if (oldGuild.description !== newGuild.description) embed.addField('Description Updated', `**Old Description:** ${oldGuild.description}\n**New Description:** ${newGuild.description}`)
  // if (oldGuild.icon !== newGuild.icon) embed.addField('Icon Updated', `Unable to get updated icon.`)
  // if (oldGuild.owner !== newGuild.owner) embed.addField('Name Updated', `**Old Owner:** ${oldGuild.owner}\n**New Owner:** ${newGuild.owner}`)
  // if (oldGuild.partnered !== newGuild.partnered) embed.addField('Partnered Status', `Guild is now partnered! I think..`)
  // if (oldGuild.verified !== newGuild.verified) embed.addField('Verified Status', `Guild is now verified! I think..`)
  // if (oldGuild.widgetEnabled !== newGuild.widgetEnabled) embed.addField('Widget Updated', `**Old Widget Status:** ${oldGuild.widgetEnabled}\n**New Widget Status:** ${newGuild.widgetEnabled}`)
  // if (oldGuild.widgetChannel !== newGuild.widgetChannel) embed.addField('Widget Updated', `**Old Widget Channel:** ${oldGuild.widgetChannel}\n**New Widget Channel:** ${newGuild.widgetChannel}`)
  // if (oldGuild.widgetChannelID !== newGuild.widgetChannelID) embed.addField('Widget Updated', `**Old Widget Channel ID:** ${oldGuild.widgetChannelID}\n**New Widget Channel ID:** ${newGuild.widgetChannelID}`)
  // if (oldGuild.setAFKChannel !== newGuild.setAFKChannel) embed.addField('AFK Updated', `**Old AFK Channel:** ${oldGuild.setAFKChannel}\n**New AFK Channel:** ${newGuild.setAFKChannel}`)
  // if (oldGuild.setAFKTimeout !== newGuild.setAFKTimeout) embed.addField('AFK Updated', `**Old AFK Timeout:** ${oldGuild.setAFKTimeout}\n**New AFK Timeout:** ${newGuild.setAFKTimeout}`)
  // if (oldGuild.splashURL !== newGuild.splashURL) embed.addField('Splash URL Updated', `**Old Splash URL:** ${oldGuild.splashURL}\n**New Splash URL:** ${newGuild.splashURL}`)
  
  // if (loggingEnabled === true) {
  //   logChannel.send({ embeds: [embed] });
  // } else {
  //   return;
  // }
}