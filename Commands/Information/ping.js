const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Tells you bots response time.",
  usage: "ping",
  aliases: ["pong", "response"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    message.channel.send("<a:loading:865853991660159026> **Pinging ...**").then(m => {
      setTimeout(() => {
        let ping = m.createdTimestamp - message.createdTimestamp;

        let embed = new MessageEmbed()
          .setTitle(':ping_pong: Pong')
          .setDescription(`Bot Latency: **${ping}**\nAPI Latency: **${Math.round(client.ws.ping)}**`)
          .setColor('#7289da')

        m.delete()
        message.channel.send({ embeds: [embed] })
      }, 3000)
    });
  }
}