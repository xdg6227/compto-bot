const { Discord, MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = async (client, member) => {
  var logChannel = member.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${member.guild.id}`);

  var embed = new MessageEmbed()
    .setTitle('<:join:865853957486018560> Member has joined')
    .setColor('GREEN')
    .setDescription(`**Member:** ${member}\n**Account created on:** ${moment(member.user.createdTimestamp).format("LL")}`)
    .setFooter(`Member ID: ${member.id}`);

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}