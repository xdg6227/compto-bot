const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "fight",
  description: "Fight someone in the server.",
  usage: "fight [@user] [OPTIONAL-bet]",
  aliases: ["duel"],
  category: "Game",
  cooldown: 3,
  enabled: false,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    let welcomeEmbed = new MessageEmbed()
      .setTitle(':crossed_swords: Fight!')
      .setDescription(`Hello challenger! Welcome to Fight game. Here you can challenge your friends in a arena. To fight someone, run the command \`${prefix}fight <@user>\`\n\nThis command is under construction so no use using this until it is announced inside of the support server.`)
      .setColor('#7289da')
      .setTimestamp(message.createdAt, true)
      .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))

    let author1 = message.author.username;
    let user = message.mentions.users.first();
    if (!user) return message.channel.send({ embeds: [welcomeEmbed] })
    if (user.id == message.author.id) return message.reply('You cannot fight yourself!');
    if (user.bot == true) return message.reply('You cannot fight a bot!');

    var fighter1 = message.author.id;
    var fighter2 = user.id;
    var challenged = user.toString();

    let acceptionEmbed = new MessageEmbed()
      .setTitle(':crossed_swords: Fight!')
      .setDescription(`${challenged}, \`${author1}\` has challenged you to a duel. Do you accept the challenge, \`yes\` or \`no\`? You have 60 seconds to reply.`)
      .setColor('GOLD')
      .setTimestamp(message.createdAt, true)
      .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))

    message.channel.send({ embeds: [acceptionEmbed] }).then(() => {
      message.channel.awaitMessages(response => response.content == 'yes' && response.author.id == fighter2 || response.content == 'no' && response.author.id == fighter2, {
        max: 1,
        time: 60000,
        errors: ['time'],
      })
        .then((collected) => {
          if (collected.first().content == 'yes') {
            let acceptedEmbed = new MessageEmbed()
              .setTitle(':crossed_swords: Fight!')
              .setDescription(`${challenged} has accepted the challenge!`)
              .setColor('GREEN')

            message.channel.send({ embeds: [acceptedEmbed] });
          }
          else if (collected.first().content == 'no') {
            let declinedEmbed = new MessageEmbed()
              .setTitle(':crossed_swords: Fight!')
              .setDescription(`${challenged} has declined the challenge.. pleb.`)
              .setColor('RED')

            message.channel.send({ embeds: [declinedEmbed] });
          }
        })
        .catch(() => {
          let declinedEmbed = new MessageEmbed()
            .setTitle(':crossed_swords: Fight!')
            .setDescription(`No response. Fight has been cancelled.`)
            .setColor('RED')

          message.channel.send({ embeds: [declinedEmbed] });
        });
    });
  }
}