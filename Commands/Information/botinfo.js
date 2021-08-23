const { Discord, MessageEmbed, version, MessageActionRow, MessageButton } = require('discord.js');
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
      .addField('<:cogwheel:865852821675704330> Other', `\`\`\`» Developer: Night_Crown_#0001\n» Total Commands: ${client.commands.size}\n» Uptime: ${uptime}\n» Discord.js: ^${version}\n» Node.js: ^16.6.1\n» Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\n» Platform: ${os.platform()}\`\`\``)

    message.channel.send({ embeds: [embed] });

    // let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    // if (prefix == null) prefix = client.prefix;
    // if (prefix == undefined) prefix = client.prefix;
    // const uptime = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

    // const generalEmbed = new MessageEmbed()
    //   .setTitle(`<:compto:865852849024270346> ${client.user.username}'s Info | General`)
    //   .setColor('GREEN')
    //   .addField('Creator:', `\`Night_Crown_#0001\``, true)
    //   .addField('Prefix:', `${prefix}`, true)
    //   .addField('Current Version:', `\`^${require('../../package.json').version}\``, true)
    //   .addField('Total Commands:', `${client.commands.size}`, true)
    //   .addField('Total Servers:', `${client.guilds.cache.size}`, true)
    //   .addField('Total Users:', `${client.users.cache.size}`, true)

    // const systemEmbed = new MessageEmbed()
    //   .setTitle(`<:compto:865852849024270346> ${client.user.username}'s Info | System`)
    //   .setColor('RED')
    //   .addField('Uptime:', `${uptime}`, true)
    //   .addField('Discord.js:', `\`^${version}\``, true)
    //   .addField('Node.js:', `\`^16.6.1\``, true)
    //   .addField('Memory Usage:', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
    //   .addField('Platform:', `${os.platform()}`, true)

    // let generalButton = new MessageButton()
    //   .setCustomId('general')
    //   .setLabel('General')
    //   .setStyle('SUCCESS')
    // // .setDisabled(true)

    // let systemButton = new MessageButton()
    //   .setCustomId('system')
    //   .setLabel('️System')
    //   .setStyle('DANGER')
    // // .setDisabled(true)

    // const row = new MessageActionRow()
    //   .addComponents(generalButton, systemButton);

    // await message.reply({ embeds: [generalEmbed], components: [row] });
  }
}
