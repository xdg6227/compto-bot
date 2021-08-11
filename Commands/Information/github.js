const { Discord, MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: "github",
  description: "Get info about a Github repository",
  usage: "github [user] [repository]",
  aliases: ["git"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let user = !args[0] ? "discordjs" : args[0];
    let repo = !args[1] ? "discord.js" : args[1];

    let uri = await fetch(`https://api.github.com/repos/${user}/${repo}`);

    if (uri.status === 200) {
      let uriJson = await uri.json();
      let embed = new MessageEmbed()
        .setTitle(`<:github:865853183116967946> GitHub Repository Information`)
        .setAuthor(uriJson.owner.login, uriJson.owner.avatar_url)
        .setDescription(`${uriJson.description || 'No description was provided.'}\n[Repository Link](${uriJson.html_url})\n`)
        .addField("Repo Name :notepad_spiral:", `${uriJson.name}`, true)
        .addField("Stars :star:", `${uriJson.stargazers_count}`, true)
        .addField("Forks :gear:", `${uriJson.forks}`, true)
        .addField("Language :desktop:", `${uriJson.language}`, true)
        .setImage(uriJson.owner.avatar_url)
        .setColor('#7289da')
      return message.channel.send({ embeds: [embed] })
    } else {
      return message.channel.send("Unable to find the mentioned repository. Please make sure you have entered the correct user/repository. `$github [user] [repository]`")
    }
  },
};