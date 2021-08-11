const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "emojis",
  description: "All emojis in a server.",
  usage: "emojis",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let emojis = "";
    let emojisAnimated = "";
    let emojiCount = 0;
    let animated = 0;
    let overallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString()
    }

    message.guild.emojis.cache.forEach(emoji => {
      overallEmojis++;
      if (emoji.animated) {
        animated++;
        emojisAnimated += Emoji(emoji.id)
      } else {
        emojiCount++;
        emojis += Emoji(emoji.id)
      }
    })

      let embed = new MessageEmbed()
        .setTitle(`:sunglasses: Emoji List`)
        .setDescription(`**Standard [${emojiCount}]**:\n${emojis}\n\n**Animated [${animated}]**:\n${emojisAnimated}`)
        .setColor('RANDOM')
      message.channel.send({ embeds: [embed] })
  },
};