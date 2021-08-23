const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "inventory",
  description: "See all the neat things in your inventory.",
  usage: "inventory [page]",
  aliases: ["inv"],
  category: "Economy",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Inventory Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });
  }
}