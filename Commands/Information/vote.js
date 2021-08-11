const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "vote",
  description: "Vote for me on botlists.",
  usage: "vote",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle("<:compto:865852849024270346> Compto Voting")
      .setDescription(`Wanting to vote for Compto?\nClick the button below or click **[here](https://comptobot.xyz/vote.html)**.`)
      .setColor('#7289da')

    message.channel.send({ embeds: [embed] });
  }
}