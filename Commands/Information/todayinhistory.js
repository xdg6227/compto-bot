const { Discord, MessageEmbed } = require('discord.js');
const fetch = require('node-superfetch');

module.exports = {
  name: "todayinhistory",
  description: "Learn what happened today in history.",
  usage: "today-in-history [month] [day]",
  aliases: ["today-in-history"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let month = args[0];
    let day = args[1];
    if (isNaN(month)) return message.channel.send('Enter a valid month nuckle head.');
    if (isNaN(day)) return message.channel.send('You should enter a real day.');
    let date = month && day ? `/${month}/${day}` : '';

    try {
      const { text } = await fetch.get(`https://history.muffinlabs.com/date${date}`);
      const body = JSON.parse(text);
      const events = body.data.Events;
      const event = events[Math.floor(Math.random() * events.length)];

      let embed = new MessageEmbed()
        .setTitle(`On this day (${body.date})...`)
        .setColor('ORANGE')
        .setDescription(`${event.year}: ${event.text}`)
        .addField('❯ See More',	event.links.map(link => `[${link.title}](${link.link.replace(/\)/g, '%29')})`).join(', '))
        .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png')
        .setURL(body.url)

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      let errorMessages = require('../../Data/responses.json').error;
      let errMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

      const errorEmbed = new MessageEmbed()
        .setTitle(`<:redwarning:865854104193466368> ${errMsg}`)
        .setColor('RED')
        .setDescription(`The error has been logged to the console. Here is a brief description of the error:\n\n\`\`\`${error}\`\`\``)
      message.channel.send({ embeds: [errorEmbed] });

      const cmdErrorEmbed = new MessageEmbed()
        .setTitle(`Command Error`)
        .setDescription(`**Command:** ${this.name}\n**Error:** ${error}`)
        .setColor('RED')
        .setTimestamp(message.createdAt, true)
      client.guilds.cache.get('848479759284436992').channels.cache.get('874853925428277298').send({ embeds: [cmdErrorEmbed] })
    }
  }
}