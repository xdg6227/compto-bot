const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  description: "Kick a naughty user.",
  usage: "kick [@user or ID] [reason or nothing]",
  aliases: [],
  category: "Moderation",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('You do not have permission to kick members.')
    if (!message.guild.me.permissions.has('KICK_MEMBERS')) return message.channel.send('I do not have permission to kick members.')

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(' ');
    if (message.author.id == member) return message.channel.send('You cannot kick yourself.');
    if (!member) return message.channel.send('Please provide a member to kick.');
    if (!reason) reason = 'No reason was provided';

    try {
      member.kick(reason);

      const embed = new MessageEmbed()
        .setTitle('<:banhammer:865852725773991956> Successfully Kicked User')
        .setColor('GREEN')
        .setThumbnail(member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
        .setDescription(`I have successfully kicked ${member}\`(${member.id})\`\n\n**Reason:** ${reason}\n**Moderator:** ${message.author}`)

      const userEmbed = new MessageEmbed()
        .setTitle('<:banhammer:865852725773991956> You have been kicked from ' + message.guild.name)
        .setColor('RED')
        .setThumbnail(member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
        .setDescription(`**Reason:** ${reason}\n**Moderator:** ${message.author}`)

      message.channel.send({ embeds: [embed] });
      member.send({ embeds: [userEmbed] }).catch(() => embed.setDescription(`I have successfully kicked ${member}\`(${member.id})\`\n\n**Reason:** ${reason}\n**Moderator:** ${message.author}\n\n> I was unable to send messages to this user.`));
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