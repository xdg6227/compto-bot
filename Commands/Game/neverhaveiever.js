const { MessageEmbed } = require("discord.js");
const answer = require('../../Data/neverhaveiever.json');

module.exports = {
  name: "neverhaveiever",
  description: "Play Never-Have-I-Ever.",
  usage: "neverhaveiever",
  aliases: ["never-have-i-ever", "never"],
  category: "Game",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const answers = answer[Math.floor(Math.random() * answer.length)];
    let embed = new MessageEmbed()
      .setDescription(`${answers}`)
      .setColor('#FFFF00')

    message.channel.send({ embeds: [embed] });
  }
}