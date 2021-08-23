const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "balance",
  description: "Check your balance.",
  usage: "balance",
  aliases: ["bal"],
  category: "Economy",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Balance Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });

  //   let user = message.author;
  //   let balance = await client.db.get(`economy_balance_${message.guild.id}_${user.id}`)
  //   let bank = await client.db.get(`economy_bank_${message.guild.id}_${user.id}`)

  //   const embed = new MessageEmbed()
  //     .setAuthor(`${user.username}'s Balance`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
  //     .setColor('#7289da')
  //     .setDescription(`**Wallet:** ◈ ${balance || 0}\n**Bank:** ◈ ${bank || 0}`)

  //   message.channel.send({ embeds: [embed] });
  }
}