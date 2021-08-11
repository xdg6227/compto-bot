const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "support",
  description: "Get an support link for the bot.",
  usage: "support",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle("<:join:865853957486018560> Support Menu")
      .setDescription(`Looking for support with Compto?\nClick the button below or click **[here](https://discord.gg/n4kdqEXVTC)**.`)
      .setColor('#7289da')

    message.channel.send({ embeds: [embed] });
  }
}