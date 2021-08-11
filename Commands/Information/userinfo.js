const { Discord, MessageEmbed } = require('discord.js');
const moment = require('moment');
const flags = {
  DISCORD_EMPLOYEE: "Discord Employee",
  DISCORD_PARTNER: "Discord Partner",
  BUGHUNTER_LEVEL_1: "Bug Hunter (Level 1)",
  BUGHUNTER_LEVEL_2: "Bug Hunter (Level 2)",
  HYPESQUAD_EVENTS: "HypeSquad Events",
  HOUSE_BRAVERY: "House of Bravery",
  HOUSE_BRILLIANCE: "House of Brilliance",
  HOUSE_BALANCE: "House of Balance",
  EARLY_SUPPORTER: "Early Supporter",
  TEAM_USER: "Team User",
  SYSTEM: "System",
  VERIFIED_BOT: "Verified Bot",
  VERIFIED_DEVELOPER: "Verified Bot Developer"
};

module.exports = {
  name: "userinfo",
  description: "Get info about a user in the server.",
  usage: "userinfo [@user or nothing]",
  aliases: ["user-info", "ui"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const roles = member.roles.cache.map(role => role.toString());
    const userFlags = member.user.flags.toArray();
    let totalWarns = await client.db.fetch(`warnings_${message.guild.id}_${member.user.id}`)

    const embed = new MessageEmbed()
      .setAuthor(`${member.user.tag} User Info`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setColor('#7289da')
      .addField('<:user:865855110398607360> NAME', `\`\`\`${member.user.tag}\`\`\``, true)
      .addField(':mask: NICKNAME', `\`\`\`${member.user.nickname || 'No nickname!'}\`\`\``, true)
      .addField(':bust_in_silhouette: ABOUT ME', `\`\`\`Not ready yet!\`\`\``, false)
      .addField(':credit_card: ID', `\`\`\`${member.user.id}\`\`\``, true)
      .addField('<:redwarning:865854104193466368> SERVER WARNS', `\`\`\`${totalWarns || 'No warnings!'}\`\`\``, true)
      .addField('<:rules:865854104026873876> ACCOUNT BADGES', `\`\`\`${userFlags.length ? userFlags.map(flag => flags[flag]).join(", ") : "No badges!"}\`\`\``, false)
      .addField(':calendar: ACCOUNT CREATED', `\`\`\`${moment(member.user.createdTimestamp).format("LL")}\`\`\``, true)
      .addField(':calendar_spiral: JOINED SERVER', `\`\`\`${moment(member.user.joinedAt).format("LL")}\`\`\``, true)
      .addField('<:privacy:865854104034476062> ROLES', `${roles.join(' **|** ')}`, false)
      .setThumbnail(member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
    message.channel.send({ embeds: [embed] });
  }
}