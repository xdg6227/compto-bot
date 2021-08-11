const { Discord, MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = async (client, member) => {
  var logChannel = member.guild.channels.cache.find(ch => ch.name.includes('log'))
  var loggingEnabled = await client.db.fetch(`settings_logging_${member.guild.id}`);

  var embed = new MessageEmbed()
    .setTitle('<:leave:865853977564020776> Member has left')
    .setColor('RED')
    .setDescription(`**Member:** ${member}\n**Joined server on:** ${moment(member.user.joinedAt).format("LL")}\n**Account created on:** ${moment(member.user.createdTimestamp).format("LL")}`)
    .setFooter(`Member ID: ${member.id}`)

  if (loggingEnabled === true) {
    logChannel.send({ embeds: [embed] });
  } else {
    return;
  }
}