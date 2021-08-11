const { Discord, MessageEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "achievement",
  description: "Create and send a custom Minecraft Achievement.",
  usage: "achievement [text]",
  aliases: [],
  category: "Image",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let text = args.slice(0).join(" ");
    let link = 'https://minecraftskinstealer.com/achievement/a.php';

    if (!args[0]) return message.channel.send('Please provide something to turn into an achievement.');
    if (text.length > 25) return message.channel.send('The text must be under 25 characters.');

    try {
      const { body } = await superagent.get(link).query({ i: 1, h: "Achievement Recieved!", t: text });
      message.channel.send({ files: [{ attachment: body, name: "achievement.png" }] });
      message.delete();
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