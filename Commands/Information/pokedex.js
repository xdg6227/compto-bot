const { Discord, MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: "pokedex",
  description: "View a Pokémon stats.",
  usage: "pokedex [pokemon]",
  aliases: ["pd", "pokemon"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let text = args.slice(0).join(" ");
    if (!message) return message.channel.send('Please provide a Pokémon name.');

    try {
      fetch(`https://some-random-api.ml/pokedex?pokemon=${text}`)
        .then(res => res.json())
        .then(json => {
          let name = json.name;
          let id = json.id;
          let description = json.description;
          let generation = json.generation;
          let type = json.type;
          let species = json.species;
          let abilities = json.abilities;
          let height = json.height;
          let weight = json.weight;
          let gender = json.gender;
          let family = json.family;
          let stats = json.stats;
          let icon = json.sprites.animated || json.sprites.normal;


          let embed = new MessageEmbed()
            .setTitle(`<:pokeball_light:865854104030806026> ${name.charAt(0).toUpperCase() + name.slice(1)}'s Stats`)
            .setColor('#7289da')
            .setDescription(`
              **ID:** \`${id}\`
              **Description:** ${description}
              **Generation:** ${generation}
              **Type:** ${type}
              **Species:** ${species.join(', ')}
              **Abilities:** ${abilities.join(', ')}
              **Height:** ${height}
              **Weight:** ${weight}
              **Gender:** ${gender.join(', ')}
              **Family:**
                • **Evolution Stage:** ${family.evolutionStage}
                • **Evolution Line:** ${family.evolutionLine.join(' | ')}\n
              **Fighting Stats:**
                • **HP:** ${stats.hp}
                • **Attack:** ${stats.attack}
                • **Defense:** ${stats.defense}
                • **Speed:** ${stats.speed}
                • **Speed Attack:** ${stats.sp_atk}
                • **Speed Defense:** ${stats.sp_def}
                • **Total:** ${stats.total}
            `)
            .setThumbnail(icon)
          message.channel.send({ embeds: [embed] })
        })
    } catch (error) {
      let errorMessages = require('../../Data/responses.json').error;
      let errMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

      let errorEmbed = new MessageEmbed()
        .setTitle(`<:redwarning:865854104193466368> ${errMsg}`)
        .setColor('RED')
        .setDescription(`The error has been logged to the console. Here is a brief description of the error:\n\n\`\`\`${error}\`\`\``)

      message.channel.send({ embeds: [errorEmbed] });

      let cmdErrorEmbed = new MessageEmbed()
        .setTitle(`Command Error`)
        .setDescription(`**Command:** ${this.name}\n**Error:** ${error}`)
        .setColor('RED')
        .setTimestamp(message.createdAt, true)
      client.guilds.cache.get('848479759284436992').channels.cache.get('874853925428277298').send({ embeds: [cmdErrorEmbed] })
    }
  }
}