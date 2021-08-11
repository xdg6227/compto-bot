const { Discord, MessageEmbed } = require("discord.js");
const request = require('superagent');

module.exports = {
  name: "advice",
  description: "Get some helpful advice.",
  usage: "advice",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let link = 'https://api.adviceslip.com/advice';

    request.get(link).end((err, res) => {
      if (!err && res.status === 200) {
        try {
          JSON.parse(res.text)
        } catch (e) {
          let errorMessages = require('../../Data/responses.json').error;
          let errMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

          let errorEmbed = new MessageEmbed()
            .setTitle(`<:redwarning:865854104193466368> ${errMsg}`)
            .setColor('RED')
            .setDescription(`The error has been logged to the console. Here is a brief description of the error:\n\n\`\`\`${error}\`\`\``)

          message.channel.send({ embeds: [errorEmbed] });
          console.log(`[ERROR] Command: ${this.name} | Error: ${error}`);
        }
        const advice = JSON.parse(res.text)

        let embed = new MessageEmbed()
          .setTitle(':open_hands: Your advice')
          .setDescription(advice.slip.advice)
          .setColor('#7289da')

        message.channel.send({ embeds: [embed] })
      } else {
        let errorMessages = require('../../Data/responses.json').error;
        let errMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

        let errorEmbed = new MessageEmbed()
          .setTitle(`<:redwarning:865854104193466368> ${errMsg}`)
          .setColor('RED')
          .setDescription(`The error has been logged to the console. Here is a brief description of the error:\n\n\`\`\`${error}\`\`\``)

        message.channel.send({ embeds: [errorEmbed] });

        let cmdErrorEmbed = new MessageEmbed()
          .setTitle(`Command Error`)
          .setDescription(`**Command:** ${this.name}\n**Error:** ${error}`)
          .setColor('RED')
          .setTimestamp(message.createdAt, true)
        client.guilds.cache.get('848479759284436992').channels.cache.get('874853925428277298').send({ embeds: [cmdErrorEmbed] })
      }
    });
  }
}