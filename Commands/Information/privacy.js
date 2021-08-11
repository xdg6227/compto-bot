const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "privacy",
  description: "Read the privacy information for Compto.",
  usage: "privacy",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle("<:privacy:865854104034476062> Compto Privacy")
      .setColor('#FFFF00')
      .setDescription(`Click [here](https://comptobot.xyz/privacy-policy.html) to view Compto's Privacy Information.`)
    await message.channel.send({ embeds: [embed] })
  }
}