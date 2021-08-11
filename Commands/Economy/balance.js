const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "balance",
  description: "Check your balance.",
  usage: "balance",
  aliases: ["bal"],
  category: "Economy",
  cooldown: 3,
  enabled: false,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let user = message.author;
    let balance = await client.db.get(`economy_balance_${message.guild.id}_${user.id}`)
    let bank = await client.db.get(`economy_bank_${message.guild.id}_${user.id}`)

    let embed = new MessageEmbed()
      .setAuthor(`${user.username}'s Balance`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setColor('#7289da')
      .setDescription(`**Wallet:** ◈ ${balance || 0}\n**Bank:** ◈ ${bank || 0}`)

    message.channel.send({ embeds: [embed] });
  }
}