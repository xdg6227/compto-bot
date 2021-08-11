const { Discord, MessageEmbed } = require("discord.js");
const fs = require('fs');

module.exports = {
  name: "help",
  description: "See a list of all the commands.",
  usage: "help",
  aliases: [],
  category: "Information",
  cooldown: 1,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    const cmdName = args[0];
    const { commands } = message.client;

    var animalCmds = '';
    var economyCmds = '';
    var expressionsCmds = '';
    var funCmds = '';
    var gameCmds = '';
    var imageCmds = '';
    var infoCmds = '';
    var marriageCmds = '';
    var moderationCmds = '';
    var musicCmds = '';
    var nsfwCmds = '';

    fs.readdirSync('./Commands/Animals').forEach((file) => animalCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);
    fs.readdirSync('./Commands/Economy').forEach((file) => economyCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);
    fs.readdirSync('./Commands/Expressions').forEach((file) => expressionsCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);
    fs.readdirSync('./Commands/Fun').forEach((file) => funCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);
    fs.readdirSync('./Commands/Game').forEach((file) => gameCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);
    fs.readdirSync('./Commands/Image').forEach((file) => imageCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);
    fs.readdirSync('./Commands/Information').forEach((file) => infoCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);
    fs.readdirSync('./Commands/Marriage').forEach((file) => marriageCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);
    fs.readdirSync('./Commands/Moderation').forEach((file) => moderationCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);
    fs.readdirSync('./Commands/Music').forEach((file) => musicCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);
    fs.readdirSync('./Commands/NSFW').forEach((file) => nsfwCmds += `\`${file.slice(0, file.lastIndexOf('.'))}\` `);

    if (!args.length) {
      const helpEmbed = new MessageEmbed()
        .setColor('#7289da')
        .setAuthor('Command List', message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
        .setDescription(`Here is the list of commands!\nFor more info on a specific command, use \`${prefix}help <command>\``)
        .addField(`<:monkefucku:839501237694889984> Animals`, `${animalCmds || 'None'}`)
        .addField('🪙 Economy', `${economyCmds || 'None'}`)
        .addField('😱 Expressions', `${expressionsCmds || 'None'}`)
        .addField('😈 Fun', `${funCmds || 'None'}`)
        .addField('⌨️ Game', `${gameCmds || 'None'}`)
        .addField('🖼️ Image', `${imageCmds || 'None'}`)
        .addField('‼️ Information', `${infoCmds || 'None'}`)
        .addField('💍 Marriage', `${marriageCmds || 'None'}`)
        .addField('⚒️ Moderation', `${moderationCmds || 'None'}`)
        .addField('🎵 Music', `${musicCmds || 'None'}`)
        .addField('<:nsfw:865854104084807690> NSFW', `${nsfwCmds || 'None'}`)

      message.channel.send({ embeds: [helpEmbed] });
    } else if (cmdName) {
      const name = cmdName.toLowerCase();
      const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
      if (!command) return message.channel.send(`That command does not exist! Run the \`${prefix}help\` command to see all commands.`);

      const commandEmbed = new MessageEmbed()
        .setColor('#7289da')
        .setAuthor(`Command List • ${command.name} command`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
        .addField('Description', command.description, false)
        .addField('Usage', command.usage, true)
        .addField('Aliases', command.aliases.join(', ') || 'None', true)
        .addField('Category', command.category, true)
        .addField('Cooldown', `${command.cooldown} second(s)`, true)
        .addField('Enabled', `${command.enabled}`, true)
        .addField('NSFW', `${command.nsfw}`, true)
      message.channel.send({ embeds: [commandEmbed] });
    }
  }
}