const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "Get an invite link for Compto.",
  usage: "invite",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const embed = new MessageEmbed()
        .setTitle("<:compto:865852849024270346> Invite Compto")
        .setColor('#7289da')
        .setDescription(`Click **[here](https://discord.com/oauth2/authorize?client_id=848320077219758111&permissions=4294967287&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize&scope=bot%20applications.commands)** to invite Compto.`)

    message.channel.send({ embeds: [embed] });
  }
}