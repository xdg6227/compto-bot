const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "forcemarry",
  description: "Force two people to get married.",
  usage: "forcemarry [@user] [@user]",
  aliases: [],
  category: "Marriage",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Force Marry Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });
  }
}