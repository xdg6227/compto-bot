const { Discord, MessageEmbed } = require("discord.js");
const discordInv = require('discord-inv');

module.exports = {
  name: "inviteinfo",
  description: "Get information about Discord invite links.",
  usage: "inviteinfo [inviteLink]",
  aliases: ["invinfo", "invite-info"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let inviteURL = args[0];
    if (!inviteURL) return message.channel.send('Please provide a valid invite link.');

    discordInv.getInv(discordInv.getCodeFromUrl(inviteURL)).then(invite => {
      let embed = new MessageEmbed()
        .setTitle("<:adduser:865852715175378946> Invite Link Information")
        .addField('Code:', `\`${invite.code}\``, true)
        .addField('Server Info:', `**Name:** ${invite.guild.name}\n**ID:** \`${invite.guild.id}\``, true)
        .addField('Channel:', `**Name:** ${invite.channel.name}\n**ID:** \`${invite.channel.id}\``, true)
        .addField('Inviter Info:', `**Name:** \`${invite.inviter.tag}\`\n**ID:**\`${invite.inviter.id}\``, true)
        .addField('Invite Link:', invite.url, true)
        .setColor('#7289da')
      message.channel.send({ embeds: [embed] });
    })
  }
}