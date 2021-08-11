const { Discord, MessageEmbed, version } = require('discord.js');
const moment = require('moment');
const os = require('os');
require("moment-duration-format");

module.exports = {
  name: "botinfo",
  description: "See the information about the bot.",
  usage: "botinfo",
  aliases: ["bot-info", "bi"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const uptime = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    const embed = new MessageEmbed()
      .setTitle(`<:compto:865852849024270346> ${client.user.username} Stat's`)
      .setColor('#7289da')
      .addField('<:cogwheel:865852821675704330> Main', `\`\`\`» ID: ${client.user.id}\n» Bot Version: v${require('../../package.json').version}\n» Created On: ${moment(client.user.createdTimestamp).format("LL")}\n» Servers: ${client.guilds.cache.size}\n» Users: ${client.users.cache.size}\`\`\``)
      .addField('<:cogwheel:865852821675704330> Other', `\`\`\`» Developer: Night_Crown_#0001\n» Total Commands: ${client.commands.size}\n» Uptime: ${uptime}\n» Discord.js: ^${version}\n» Node.js: ^14.17.1\n» Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\n» Platform: ${os.platform()}\`\`\``)

    message.channel.send({ embeds: [embed] });
  }
}
