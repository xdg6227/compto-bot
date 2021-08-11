const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "unban",
  description: "Unban a  user.",
  usage: "unban [@user or ID]",
  aliases: [],
  category: "Moderation",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('You do not have permission to unban members.')
    if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.channel.send('I do not have permission to unban members.')

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(' ');
    if (message.author.id == member) return message.channel.send('You cannot unban yourself.');
    if (!member) return message.channel.send('Please provide a member to unban.');
    if (!reason) reason = 'No reason was provided';

    try {
      member.unban(reason);

      const embed = new MessageEmbed()
        .setTitle('<:banhammer:865852725773991956> Successfully Unbanned User')
        .setColor('GREEN')
        .setThumbnail(member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
        .setDescription(`I have successfully unbanned ${member}\`(${member.id})\`\n\n**Moderator:** ${message.author}`)

      message.channel.send({ embeds: [embed] });
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