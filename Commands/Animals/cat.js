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

      let embed = new MessageEmbed()
        .setTitle(":cat: Random Cat Image and Fact")
        .setColor('#7289da')
        .setDescription(fact.fact)
        .setImage(image.link)
      await message.channel.send({ embeds: [embed] });
    } catch (error) {
      message.channel.send('There was an error with the command, please try again later.');
      console.log(`[ERROR] Command: ${this.name} | Error: ${error}`);
    }
  }
}