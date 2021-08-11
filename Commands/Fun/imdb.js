const { Discord, MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
  name: "imdb",
  description: "Get information about a movie or show.",
  usage: "imdb <name>",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    if (!args.length) return message.channel.send('Please provide the name of a movie or show.');
    let movie = await axios(`https://www.omdbapi.com/?apikey=5e36f0db&t=${args.join("+")}`).catch(err => { });

    let fetchingEmbed = new MessageEmbed()
      .setTitle('<:imdb:866101192731525130> IMDB')
      .setDescription(`Getting information about **${args.slice(0).join(' ')}**...`)
      .setColor('#7289da')
      

    let errorEmbed = new MessageEmbed()
      .setTitle('<:imdb:866101192731525130> IMDB')
      .setDescription(`Unable to find anything about **${args.slice(0).join(' ')}**.`)
      .setColor('RED')

    let msg = await message.channel.send({ embeds: [fetchingEmbed] })
    setTimeout(function () {
      if (!movie || !movie.data || movie.data.Response === 'False') return msg.edit(errorEmbed);
      movie = movie.data;

      let imdbEmbed = new MessageEmbed()
        .setTitle(`<:imdb:866101192731525130> IMDB • ${movie.Title}`)
        .setThumbnail(movie.Poster)
        .setDescription(movie.Plot)
        .addField("Country", movie.Country, true)
        .addField("Languages", movie.Language, true)
        .addField("Type", movie.Type, true)
        .addField('Ratings', movie.imdbRating, true)
        .addField('Seasons', movie.totalSeasons || '0', true)
        .setColor('#f3ce13')

      msg.edit({ embeds: [imdbEmbed] });
    }, 3000)
  }
}