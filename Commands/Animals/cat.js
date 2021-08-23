const { Discord, MessageEmbed } = require("discord.js");
const axios = require('axios');

module.exports = {
  name: "cat",
  description: "Get a fun image and fact about cats.",
  usage: "cat",
  aliases: [],
  category: "Animals",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let url = 'https://some-random-api.ml/img/cat';
    let facts = 'https://some-random-api.ml/facts/cat';
    let image, response;
    let fact, responses;

    try {
      response = await axios.get(url);
      image = response.data;
      responses = await axios.get(facts);
      fact = responses.data;

      const embed = new MessageEmbed()
        .setTitle(":cat: Random Cat Image and Fact")
        .setColor('#7289da')
        .setDescription(fact.fact)
        .setImage(image.link)
      await message.channel.send({ embeds: [embed] });
    } catch (error) {
      let errorMessages = require('../../Data/responses.json').error;
      let errMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

      const errorEmbed = new MessageEmbed()
        .setTitle(`<:redwarning:865854104193466368> ${errMsg}`)
        .setColor('RED')
        .setDescription(`The error has been logged to the console. Here is a brief description of the error:\n\n\`\`\`${error}\`\`\``)
      message.channel.send({ embeds: [errorEmbed] });

      const cmdErrorEmbed = new MessageEmbed()
        .setTitle(`Command Error`)
        .setDescription(`**Command:** ${this.name}\n**Error:** ${error}`)
        .setColor('RED')
        .setTimestamp(message.createdAt, true)
      client.guilds.cache.get('848479759284436992').channels.cache.get('874853925428277298').send({ embeds: [cmdErrorEmbed] })
    }
  }
}