const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shop",
  description: "Check out the shops and buy something new.",
  usage: "shop [page]",
  aliases: ["store"],
  category: "Economy",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Shop Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });
  }
}