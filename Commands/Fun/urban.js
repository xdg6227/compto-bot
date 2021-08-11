const { Discord, MessageEmbed } = require("discord.js");
const urban = require('urban');

module.exports = {
  name: "urban",
  description: "Get info about a urban dictionary word.",
  usage: "urban [word]",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let word = args.slice(0).join(' ');
    if (!word) return message.channel.send('Please provide a word to get the definition of.');

    urban(word).first(json => {
      if (!json) return message.channel.send('That word does not exist, make sure you spelt it correctly.');

      const embed = new MessageEmbed()
        .setTitle(':orange_book: Urban Dictionary')
        .setDescription(`Word: ${json.word}\nDefinition: ${json.definition}\nAuthor: ${json.author}\nUpvotes: ${json.thumbs_up}\nDownvotes: ${json.thumbs_down}`)
        .setColor('#7289da')
      message.channel.send({ embeds: [embed] })
    })
  }
}