const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clearwarns",
  description: "Clear someones warnings.",
  usage: "clearwarns [@user]",
  aliases: ["clearwarnings"],
  category: "Moderation",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let user = message.mentions.users.first() || message.author;
    client.db.set(`warnings_${message.guild.id}_${user.id}`, 0)

    let embed = new MessageEmbed()
      .setAuthor(`<:warning:865855110437142568> ${user.tag} cleared warns!`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setDescription(`Cleared all warnings from <@${user.id}>!`)
      .setColor('#7289da')

    message.channel.send({ embeds: [embed] });
  }
}