const { MessageEmbed } = require("discord.js");
const Levels = require('discord.js-leveling');

module.exports = {
  name: "leaderboard",
  description: "View the leaderboard for your server.",
  usage: "leaderboard",
  aliases: ["lb"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10);
    if (rawLeaderboard.length < 1) return message.channel.send("Nobody's in leaderboard yet.");
    const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);
    const lb = leaderboard.map(e => `**${e.position}.** \`${e.username}#${e.discriminator}\`\n**Level:** \`${e.level}\`\n**XP:** \`${e.xp.toLocaleString()}\``);

    let embed = new MessageEmbed()
      .setTitle(`:trophy: ${message.guild.name}'s Leaderboard`)
      .setDescription(lb.join("\n\n"))
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}