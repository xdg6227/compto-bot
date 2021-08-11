const { Discord, MessageEmbed } = require("discord.js");
const weather = require('weather-js');

module.exports = {
  name: "weather",
  description: "Get the current weather for your City.",
  usage: "weather [City], [State Initials]",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let location = args.slice(0).join(' ');
    if (!location) return message.channel.send('Please provide a City and a State to get the weather of.');

    weather.find({ search: location, degreeType: "F" }, function (error, result) {
      if (!result) return message.channel.send('This city doesn\'t exist, make sure you spelt it correctly.');
      if (!result[0]) return message.channel.send('This state doesn\'t exist, make sure you spelt it correctly.');

      let embed = new MessageEmbed()
        .setTitle(`:white_sun_small_cloud: The Weather Currently`)
        .setColor('#00FFFF')
        .setThumbnail(result[0].current.imageUrl)
        .setDescription(`**Location:** ${result[0].location.name}\n**Temperature:** ${result[0].current.temperature}°F\n**Humidity:** ${result[0].current.humidity}%\n**Windspeed:** ${result[0].current.windspeed}`)
      message.channel.send({ embeds: [embed] });
    })
  }
}