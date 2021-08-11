const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = async (client, message) => {
  client.user.setActivity(`comptobot.xyz | c!help`, { type: 'PLAYING' });
  console.log(`${client.user.username}(${client.user.tag}) is now online!`);
  let loggedInEmbed = new MessageEmbed()
    .setTitle(`<:discord:865852943566372895> Bot Restart`)
    .setDescription(`**${client.user.tag}** is now online!`)
    .setColor('#7289da')
    .setTimestamp(message.createdAt, true)
  client.guilds.cache.get('848479759284436992').channels.cache.get('874857169714040933').send({ embeds: [loggedInEmbed] })

  /* Statcord & MongoDB */
  client.statcord.autopost();
  client.db.on('ready', () => {
    let mongoDBReadyEmbed = new MessageEmbed()
      .setTitle(`MongoDB`)
      .setDescription(`Connected to the Database.`)
      .setColor('GREEN')
      .setTimestamp(message.createdAt, true)
    client.guilds.cache.get('848479759284436992').channels.cache.get('874853910173585408').send({ embeds: [mongoDBReadyEmbed] })
  });
  client.db.on('error', (error) => {
    let mongoDBErrorEmbed = new MessageEmbed()
      .setTitle(`MongoDB`)
      .setDescription(`**Error:** ${error}`)
      .setColor('RED')
      .setTimestamp(message.createdAt, true)
    client.guilds.cache.get('848479759284436992').channels.cache.get('874853910173585408').send({ embeds: [mongoDBErrorEmbed] })
  });
};