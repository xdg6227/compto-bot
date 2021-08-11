const { MessageEmbed, MessageAttachment } = require("discord.js");
const canvacord = require('canvacord');
const Levels = require('discord.js-leveling');

module.exports = {
  name: "rank",
  description: "See the leveling rank in your server.",
  usage: "rank [OPTIONAL-@user]",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const target = message.mentions.users.first() || message.author;
    const user = await Levels.fetch(target.id, message.guild.id);
    if (!user) return message.channel.send("Seems like this user has not earned any xp so far.");

    let embed = new MessageEmbed()
      .setTitle(`:trophy: ${target.username}'s Rank`)
      .setDescription(`**Level:** ${user.level}\n**XP:** ${user.xp.toLocaleString()}`)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}