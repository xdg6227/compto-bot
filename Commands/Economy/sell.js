const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sell",
  description: "Sell an item you own.",
  usage: "sell [item] [amount]",
  aliases: [],
  category: "Economy",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Sell Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });
  }
}