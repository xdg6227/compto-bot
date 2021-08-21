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
    if (!message.member.voice.channel) return message.channel.send('Please join a voice channel.');

    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    let option = args[0];

    if (!args.length) {
      let homeEmbed = new MessageEmbed()
        .setTitle('<:discord:865852943566372895> Discord Together')
        .setDescription('This is a new Discord feature. Discord Together is being able to play games and watch youtube inside of your voice channel. If there are any bugs please let the owner of this package know **[here](https://github.com/RemyK888/discord-together/issues/new)**.')
        .addField("YouTube", `\`${prefix}together youtube\``, true)
        .addField("Poker", `\`${prefix}together poker\``, true)
        .addField("Chess", `\`${prefix}together chess\``, true)
        .addField("Chess Dev", `\`${prefix}together chessdev\``, true)
        .addField("Betrayal", `\`${prefix}together betrayal\``, true)
        .addField("Fishing", `\`${prefix}together fishing\``, true)
        .addField("Custom Activity", `\`${prefix}together custom [application ID]\``, true)
        .setColor('#8205B3')

      message.channel.send({ embeds: [homeEmbed] })
    }

    if (option == 'youtube') {
      client.together.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
        let youtubeEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • YouTube')
          .setDescription(`Click **[here](${invite.code})** to play!`)
          .setColor('#8205B3')

        return message.channel.send({ embeds: [youtubeEmbed] });
      });
    } else if (option == 'poker') {
      client.together.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
        let pokerEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • Poker')
          .setDescription(`Click **[here](${invite.code})** to play!`)
          .setColor('#8205B3')

        return message.channel.send({ embeds: [pokerEmbed] });
      });
    } else if (option == 'chess') {
      client.together.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
        let chessEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • Chess')
          .setDescription(`Click **[here](${invite.code})** to play!`)
          .setColor('#8205B3')

        return message.channel.send({ embeds: [chessEmbed] });
      });
    } else if (option == 'chessdev') {
      client.together.createTogetherCode(message.member.voice.channel.id, 'chessDev').then(async invite => {
        let chessEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • Chess Dev')
          .setDescription(`Click **[here](${invite.code})** to play!`)
          .setColor('#8205B3')

        return message.channel.send({ embeds: [chessEmbed] });
      });
    } else if (option == 'betrayal') {
      client.together.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
        let betrayalEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • Betrayal')
          .setDescription(`Click **[here](${invite.code})** to play!`)
          .setColor('#8205B3')

        return message.channel.send({ embeds: [betrayalEmbed] });
      });
    } else if (option == 'fishing') {
      client.together.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
        let fishingEmbed = new MessageEmbed()
          .setTitle('<:discord:865852943566372895> Discord Together • Fishing')
          .setDescription(`Click **[here](${invite.code})** to play!`)
          .setColor('#8205B3')

        return message.channel.send({ embeds: [fishingEmbed] });
      });
    } else if (option == 'custom') {
      let applicationID = args[1];
      if (!applicationID) return message.channel.send('Please provide a application ID.');

      try {
        client.together.createTogetherCode(message.member.voice.channel.id, `${applicationID}`).then(async invite => {
          let customEmbed = new MessageEmbed()
            .setTitle('<:discord:865852943566372895> Discord Together • Custom Activity')
            .setDescription(`Click **[here](${invite.code})** to play!`)
            .setColor('#8205B3')

          return message.channel.send({ embeds: [customEmbed] });
        });
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
}