const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "prefix",
  description: "Change your current server's prefix.",
  usage: "prefix",
  aliases: ["setprefix"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    let newPrefix = args.slice(0).join(' ');

    let currentEmbed = new MessageEmbed()
      .setTitle("<:command:865852833655029781> Change Prefix")
      .setDescription(`Your current prefix is: **${prefix}**\n\nTo change your prefix, please run the command with an argument after.\nExample: \`${prefix}prefix ?\``)
      .setColor('#7289da')
    if (newPrefix) {
      await client.db.set(`prefix_${message.guild.id}`, newPrefix).catch(error => message.channel.send(`There was an error setting the prefix. Please try again.`));

      let newEmbed = new MessageEmbed()
        .setTitle("<:command:865852833655029781> Change Prefix")
        .setDescription(`Success! Your new prefix is: **${newPrefix}**`)
        .setColor('GREEN')
      message.channel.send({ embeds: [newEmbed] });
    } else {
      message.channel.send({ embeds: [currentEmbed] });
    }
  }
}