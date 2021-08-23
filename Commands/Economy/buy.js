const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "buy",
  description: "Buy something fun from the shop.",
  usage: "buy [item] [amount]",
  aliases: ["purchase"],
  category: "Economy",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Buy Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });
  }
}