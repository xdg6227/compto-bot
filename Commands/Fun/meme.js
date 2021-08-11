const { MessageEmbed } = require("discord.js");
const snekfetch = require("snekfetch");

module.exports = {
  name: "meme",
  description: "Send funny fresh reddit memes.",
  usage: "meme",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    try {
      const { body } = await snekfetch.get("https://www.reddit.com/r/memes.json?sort=top&t=week").query({ limit: 800 });
      const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
      if (!allowed.length) return message.channel.send("Looks like we are out of fresh memes! Try again later.");
      const randomnumber = Math.floor(Math.random() * allowed.length);

      const embed = new MessageEmbed()
        .setColor(0x00a2e8)
        .setTitle("**" + allowed[randomnumber].data.title + "**")
        .setImage(allowed[randomnumber].data.url)

      message.channel.send({ embeds: [embed] });
    } catch (err) {
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