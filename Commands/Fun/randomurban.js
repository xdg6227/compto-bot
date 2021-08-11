const { Discord, MessageEmbed } = require("discord.js");
const urban = require('urban');

module.exports = {
  name: "randomurban",
  description: "Get info about a random urban dictionary word.",
  usage: "randomurban",
  aliases: ["random-urban"],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    urban.random().first(json => {
      const embed = new MessageEmbed()
        .setTitle(':orange_book: Random Urban Dictionary')
        .setDescription(`**Word:** ${json.word}\n**Definition:** ${json.definition}\n**Author:** ${json.author}\n**Upvotes:** ${json.thumbs_up}\n**Downvotes:** ${json.thumbs_down}`)
        .setColor('#00FFFF')
      message.channel.send({ embeds: [embed] })
    })
  }
}