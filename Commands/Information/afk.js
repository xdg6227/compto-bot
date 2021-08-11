const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "afk",
  description: "Set yourself as AFK.",
  usage: "afk",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let user = message.author;

    let embed = new MessageEmbed()
      .setAuthor('AFK Status', message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setDescription(`I have set your AFK. I will send a message to the users who mention you.`)
      .setColor('#7289da')

    client.db.set(`afk_status_${user.id}`, true);
    client.db.set(`afk_status_id_${user.id}`, user.id)

    message.channel.send({ embeds: [embed] })
  }
};