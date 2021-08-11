const { Discord, MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: "statcord",
  description: "See my personal stats or see another bot's stats.",
  usage: "statcord [botID]",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let botID = args[0];
    if (!botID) botID = '848320077219758111';
    if (!parseInt(botID)) return message.channel.send('Hey.. you should put your bot\'s ID instead.')

    fetch(`https://api.statcord.com/v3/${botID}`)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          let errorMessages = require('../../Data/responses.json').error;
          let errMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

          let errorEmbed = new MessageEmbed()
            .setTitle(`<:redwarning:865854104193466368> ${errMsg}`)
            .setColor('RED')
            .setDescription(`You should check to see if the bot is actually on [statcord](https://statcord.com/) or it is public. Here is a brief description of the error:\n\n\`\`\`${error}\`\`\``)

          message.channel.send({ embeds: [errorEmbed] });

          let cmdErrorEmbed = new MessageEmbed()
            .setTitle(`Command Error`)
            .setDescription(`**Command:** ${this.name}\n**Error:** ${error}`)
            .setColor('RED')
            .setTimestamp(message.createdAt, true)
          client.guilds.cache.get('848479759284436992').channels.cache.get('874853925428277298').send({ embeds: [cmdErrorEmbed] })
        }

        let jsonData = json.data;
        var jData;
        if (jsonData) jData = jsonData;

        let cmdData = json.popular;
        var cData;
        if (cmdData) cData = cmdData;

        let embed = new MessageEmbed()
          .setTitle(`<:statcord:865854104173805588> Statcord Stats`)
          .setDescription(`These are stats for <@${botID}>.\n\n${jData.map(i => `**Servers:** ${i.servers}\n**Users:** ${i.users}\n**Memory Load:** ${i.memload}\n**CPU Load:** ${i.cpuload}\n**Network Bandwidth:** ${i.bandwidth}`)}`)
          .addField('Popular Commands', cData.map(i => 'Command: `' + i.name + '` | Ran ' + i.count + ' times'))
          .setColor('GREEN')

        message.channel.send({ embeds: [embed] })
      })
  },
};