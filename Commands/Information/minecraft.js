const { Discord, MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: "minecraft",
  description: "View someone's Minecraft stats.",
  usage: "minecraft [username]",
  aliases: ["mc"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let text = args.slice(0).join(" ");
    if (!text) return message.channel.send('Please provide a Minecraft username.');

    try {
      fetch(`https://some-random-api.ml/mc?username=${text}`)
        .then(res => res.json())
        .then(json => {
          if (json.error) return message.channel.send(`An error has occured when running this command.\n\n\`\`\`${json.error}\`\`\``)
          let username = json.username;
          let uuid = json.uuid;
          let nameHistory = json.name_history;

          var nHis;
          if (nameHistory) nHis = nameHistory;

          let embed = new MessageEmbed()
            .setTitle(`<:minecraft:865854029204946946> ${username}'s Minecraft Stats`)
            .setDescription(`**UUID:** \`${uuid}\``)
            .setColor('#00FF00')
            .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
          if (nameHistory) {
            embed.addField(`**Past Usernames**`, nHis.map(i => '`' + i.name + '` - ' + i.changedToAt), true)
          } else {
            embed.addField(`**Past Usernames**`, "None", true)
          }

          message.channel.send({ embeds: [embed] })
        })
    } catch (error) {
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
  }
}