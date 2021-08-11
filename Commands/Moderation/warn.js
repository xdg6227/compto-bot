const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "warn",
  description: "Warn a user.",
  usage: "warn [@user] [message]",
  aliases: [],
  category: "Moderation",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let user = message.mentions.users.first();
    let reason = args.slice(1).join(' ');
    if (!user) return message.channel.send('Please specify a user to warn.');
    if (!reason) reason = 'No reason was specified.'

    client.db.add(`warnings_${message.guild.id}_${user.id}`, 1)
    let totalWarns = await client.db.get(`warnings_${message.guild.id}_${user.id}`)

    let embed = new MessageEmbed()
      .setAuthor(`<:warning:865855110437142568> ${user.tag} was warned!`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setDescription(`**Reason:** ${reason}\n\n**Moderator:** <@${message.author.id}>\n**Total Warns:** ${totalWarns + 1}`)
      .setColor('#7289da')

    message.channel.send({ embeds: [embed] });
  }
}