const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, guild) => {
  let embed = new MessageEmbed()
    .setTitle(`<:leave:865853977564020776> Left server`)
    .setDescription(`I just left a server. I am now in **${client.guilds.cache.size}** servers.`)
    .setColor('RED')
  client.guilds.cache.get('848479759284436992').channels.cache.get('866808138312581130').send({ embeds: [embed] })
}