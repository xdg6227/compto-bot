const { Discord, Client, Collection, Intents, MessageEmbed } = require('discord.js');
const { token, prefix, mongodbkey, ownerID, statcordkey } = require('./config.json');
const { GiveawaysManager } = require('discord-giveaways');
const { DiscordTogether } = require('discord-together');
const { Player } = require('discord-player');
const { Database } = require('quickmongo');
const StatcordJS = require('statcord.js');
const fs = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const statcord = new StatcordJS.Client({ client, key: statcordkey });
const together = new DiscordTogether(client);
const database = new Database(mongodbkey);
const player = new Player(client);
client.commands = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();
client.mongodb = mongodbkey;
client.statcord = statcord;
client.together = together;
client.prefix = prefix;
client.ownerID = ownerID;
client.db = database;

/* File Reader */
fs.readdirSync("./Commands").forEach(folder => {
  fs.readdirSync(`./Commands/${folder}`).forEach(file => {
    const command = require(`./Commands/${folder}/${file}`);
    client.commands.set(command.name, command);
    if (!command.aliases) return;
    command.aliases.forEach((alias) => {
      client.aliases.set(alias, command);
    });
  });
});

fs.readdirSync("./Events").forEach(folder => {
  fs.readdirSync(`./Events/${folder}`).forEach(file => {
    const event = require(`./Events/${folder}/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
  });
});

/* Giveaways Manager */
const manager = new GiveawaysManager(client, {
  storage: './Data/giveaways.json',
  updateCountdownEvery: 10000,
  hasGuildMembersIntent: false,
  default: {
    botsCanWin: false,
    exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
    embedColor: '#7289da',
    embedColorEnd: '#7289da',
    reaction: '🎉'
  },
  lastChance: {
    enabled: true,
    content: '⚠️ **LAST CHANCE TO ENTER !** ⚠️',
    threshold: 5000,
    embedColor: '#FF0000'
  }
});

/* Statcord */
statcord.on('autopost-start', () => {
  let statcordStartEmbed = new MessageEmbed()
      .setTitle(`<:statcord:865854104173805588> Statcord`)
      .setDescription(`Started autpost.`)
      .setColor('YELLOW')
    client.guilds.cache.get('848479759284436992').channels.cache.get('874853910173585408').send({ embeds: [statcordStartEmbed] })
});

statcord.on('post', status => {
  if (!status) {
    let statcordStartEmbed = new MessageEmbed()
      .setTitle(`<:statcord:865854104173805588> Statcord`)
      .setDescription(`Successful post.`)
      .setColor('ORANGE')
    client.guilds.cache.get('848479759284436992').channels.cache.get('874853910173585408').send({ embeds: [statcordStartEmbed] })
  } else {
    let statcordStartEmbed = new MessageEmbed()
      .setTitle(`<:statcord:865854104173805588> Statcord`)
      .setDescription(`${status}`)
      .setColor('RED')
    client.guilds.cache.get('848479759284436992').channels.cache.get('874853910173585408').send({ embeds: [statcordStartEmbed] })
  }
});

/* Discord Player Events */
player.on('trackStart', (message, track) => {
  let trackStartEmbed = new MessageEmbed()
    .setTitle(`:musical_note: ${message.guild.name}'s Player`)
    .setThumbnail(track.thumbnail)
    .setDescription(`Now Playing  **[${track.title}](${track.url})**`)
    .addField(`Requested By`, track.requestedBy, true)
    .addField(`Author`, track.author, true)
    .addField(`Duration`, `\`${track.duration}\``, true)
    .setColor('#7289da')
  message.channel.send(trackStartEmbed);
})
  .on('trackAdd', (message, queue, track) => {
    let trackAddEmbed = new MessageEmbed()
      .setTitle(`:musical_note: ${message.guild.name}'s Player`)
      .setDescription(`**[${track.title}](${track.url})** has been added to the queue!`)
      .setColor('#00FF00')
    message.channel.send(trackAddEmbed);
  })
  .on('playlistAdd', (message, queue, playlist) => {
    let playlistAddEmbed = new MessageEmbed()
      .setTitle(`:musical_note: ${message.guild.name}'s Player`)
      .setDescription(`**[${playlist.title}](${playlist.url})** has been added to the queue, ${playlist.tracks.length} total songs!`)
      .setColor('#00FF00')
    message.channel.send(playlistAddEmbed);
  })
  .on('noResults', (message, query) => {
    let noResultsEmbed = new MessageEmbed()
      .setTitle(`:musical_note: ${message.guild.name}'s Player`)
      .setDescription(`No results found for **${query}**`)
      .setColor('#FF0000')
    message.channel.send(noResultsEmbed);
  })
  .on('queueEnd', (message, queue) => {
    let queueEndEmbed = new MessageEmbed()
      .setTitle(`:musical_note: ${message.guild.name}'s Player`)
      .setDescription(`I have reached the end of the queue so I disconnected.`)
      .setColor('#FFFF00')
    message.channel.send(queueEndEmbed);
  })
  .on('channelEmpty', (message, queue) => {
    let channelEmptyEmbed = new MessageEmbed()
      .setTitle(`:musical_note: ${message.guild.name}'s Player`)
      .setDescription(`Everybody left the channel so I disconnected.`)
      .setColor('#FFFF00')
    message.channel.send(channelEmptyEmbed);
  })
  .on('botDisconnect', (message) => {
    let botDisconnectEmbed = new MessageEmbed()
      .setTitle(`:musical_note: ${message.guild.name}'s Player`)
      .setDescription(`I was disconnected by a moderator or admin.`)
      .setColor('#FFFF00')
    message.channel.send(botDisconnectEmbed);
  })
  .on('error', (error, message) => {
    switch (error) {
      case 'UnableToJoin':
        message.channel.send('I do not have the permissions to join your current voice channel.')
        break;
      case 'LiveVideo':
        message.channel.send('YouTube livestreams are not supported!')
        break;
      case 'VideoUnavailable':
        message.channel.send('This YouTube video is not available!');
        break;
      default:
        message.channel.send(`Something went wrong... Error: ${error}`)
    }
  })

client.login(token);