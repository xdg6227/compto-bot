const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "emancipate",
  description: "Removes your parent.",
  usage: "emancipate",
  aliases: [],
  category: "Marriage",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Emancipate Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });
  }
}