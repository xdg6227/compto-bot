const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "warnings",
  description: "See a user's warns.",
  usage: "warnings [@user]",
  aliases: [],
  category: "Moderation",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let user = message.mentions.users.first() || message.author;
    let totalWarns = await client.db.get(`warnings_${message.guild.id}_${user.id}`)

    let embed = new MessageEmbed()
      .setAuthor(`<:warning:865855110437142568> ${user.tag} total warns!`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setDescription(`That user has a total of **${totalWarns}** warnings.`)
      .setColor('#7289da')

    message.channel.send({ embeds: [embed] });
  }
}