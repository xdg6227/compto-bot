const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "together",
  description: "Play with a new feature, Discord Together.",
  usage: "together [game]",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    if (!args.length) {
      let homeEmbed = new MessageEmbed()
        .setTitle('<:discord:865852943566372895> Discord Together')
        .setDescription('This is a new Discord feature. Discord Together is being able to play games and watch youtube inside of your voice channel. If there are any bugs please let the owner of this package know **[here](https://github.com/RemyK888/discord-together/issues/new)**.')
        .addField("YouTube", `\`${prefix}together youtube\``, true)
        .addField("Poker", `\`${prefix}together poker\``, true)
        .addField("Chess", `\`${prefix}together chess\``, true)
        .addField("Betrayal", `\`${prefix}together betrayal\``, true)
        .addField("Fishing", `\`${prefix}together fishing\``, true)
        .setColor('#8205B3')
        
      message.channel.send({ embeds: [homeEmbed] })
    }

    if (args[0] == 'youtube') {
      client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
        let homeEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • YouTube')
          .setDescription(`This is a new Discord feature. Discord Together is being able to play games and watch youtube inside of your voice channel. If there are any bugs please let the owner of this package know **[here](https://github.com/RemyK888/discord-together/issues/new)**.\n\nClick **[here](${invite.code})** to play. Make sure you are in a voice channel before clicking the link or else you will need to run the command again.`)
          .setColor('#8205B3')
            
        return message.channel.send({ embeds: [homeEmbed] });
      });
    } else if (args[0] == 'poker') {
      client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
        let homeEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • Poker')
          .setDescription(`This is a new Discord feature. Discord Together is being able to play games and watch youtube inside of your voice channel. If there are any bugs please let the owner of this package know **[here](https://github.com/RemyK888/discord-together/issues/new)**.\n\nClick **[here](${invite.code})** to play. Make sure you are in a voice channel before clicking the link or else you will need to run the command again.`)
          .setColor('#8205B3')
            
        return message.channel.send({ embeds: [homeEmbed] });
      });
    } else if (args[0] == 'chess') {
      client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
        let homeEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • Chess')
          .setDescription(`This is a new Discord feature. Discord Together is being able to play games and watch youtube inside of your voice channel. If there are any bugs please let the owner of this package know **[here](https://github.com/RemyK888/discord-together/issues/new)**.\n\nClick **[here](${invite.code})** to play. Make sure you are in a voice channel before clicking the link or else you will need to run the command again.`)
          .setColor('#8205B3')
            
        return message.channel.send({ embeds: [homeEmbed] });
      });
    } else if (args[0] == 'betrayal') {
      client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
        let homeEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • Betrayal')
          .setDescription(`This is a new Discord feature. Discord Together is being able to play games and watch youtube inside of your voice channel. If there are any bugs please let the owner of this package know **[here](https://github.com/RemyK888/discord-together/issues/new)**.\n\nClick **[here](${invite.code})** to play. Make sure you are in a voice channel before clicking the link or else you will need to run the command again.`)
          .setColor('#8205B3')
            
        return message.channel.send({ embeds: [homeEmbed] });
      });
    } else if (args[0] == 'fishing') {
      client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
        let homeEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • Fishing')
          .setDescription(`This is a new Discord feature. Discord Together is being able to play games and watch youtube inside of your voice channel. If there are any bugs please let the owner of this package know **[here](https://github.com/RemyK888/discord-together/issues/new)**.\n\nClick **[here](${invite.code})** to play. Make sure you are in a voice channel before clicking the link or else you will need to run the command again.`)
          .setColor('#8205B3')  

        return message.channel.send({ embeds: [homeEmbed] });
      });
    }
  }
}