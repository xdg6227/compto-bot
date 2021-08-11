const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dungeon",
  description: "Play and go though special dungeons! Soon will be paired with economy. This is memoriam of MLlama bot.",
  usage: "dungeon [level]",
  aliases: [],
  category: "Game",
  cooldown: 3,
  enabled: false,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let level = parseInt(args.slice(0).join(' '))

    let CHR = '<:blep:855716256158056468>'; // Character
    let STO = '<:stone:865854103975231541>'; // Stone
    let BLK = '<:blank:865852747856871424>'; // Blank
    let ENT = '<:blank:865852747856871424>'; // Entrance
    let GRL = '<:grassleft:865853196906528810>'; // Grass Left
    let GRR = '<:grassright:865853216969326612>'; // Grass Right
    let DRT = '<:dirt:865852929508507648>'; // Dirt
    let page = 1;

    let homeEmbed = new MessageEmbed()
      .setTitle(':european_castle: Dungeons')
      .setDescription(`Welcome to Dungeons! A fun little minigame where you fight monsters and explore new areas. This game is under construction so you are only allowed to explore. To begin playing, type the command and enter a number between 1-5.\n\nIf you remember all the way back to 2019 where MLlama existed, here is a little throwback :)`)
      .setColor('#7289da')

    let notReadyEmbed = new MessageEmbed()
      .setTitle(':european_castle: Dungeon Not Ready')
      .setDescription(`Sorry, this dungeon is not fully built so please be patient for this to get released.`)
      .setColor('RED')

    if (!args.length) {
      message.channel.send({ embeds: [homeEmbed] });
    } else if (level == 1) {
      let LV1layout = [
        BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + CHR + BLK + BLK + BLK + BLK + BLK + BLK + BLK
        + '\n' + GRL + BLK + BLK + BLK + BLK + BLK + BLK + BLK
        + '\n' + DRT + GRR + GRL + GRR + GRL + STO + STO + ENT
        + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + STO + STO,

        BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
        + '\n' + GRL + CHR + BLK + BLK + BLK + BLK + BLK + BLK
        + '\n' + DRT + GRR + GRL + GRR + GRL + STO + STO + ENT
        + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + STO + STO,

        BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
        + '\n' + GRL + BLK + CHR + BLK + BLK + BLK + BLK + BLK
        + '\n' + DRT + GRR + GRL + GRR + GRL + STO + STO + ENT
        + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + STO + STO,

        BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
        + '\n' + GRL + BLK + BLK + CHR + BLK + BLK + BLK + BLK
        + '\n' + DRT + GRR + GRL + GRR + GRL + STO + STO + ENT
        + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + STO + STO,

        BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
        + '\n' + GRL + BLK + BLK + BLK + CHR + BLK + BLK + BLK
        + '\n' + DRT + GRR + GRL + GRR + GRL + STO + STO + ENT
        + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + STO + STO,

        BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
        + '\n' + GRL + BLK + BLK + BLK + BLK + CHR + BLK + BLK
        + '\n' + DRT + GRR + GRL + GRR + GRL + STO + STO + ENT
        + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + STO + STO,

        BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + STO
        + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
        + '\n' + GRL + BLK + BLK + BLK + BLK + BLK + CHR + BLK
        + '\n' + DRT + GRR + GRL + GRR + GRL + STO + STO + ENT
        + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + STO + STO,
      ];

      let lvl1Embed = new MessageEmbed()
        .setTitle(':european_castle: Dungeon 1 - TEMPLATE NAME HERE')
        .setDescription(`**OBJECTIVE:** Enter the mysterious cave.\n\n${LV1layout[0]}`)
        .setColor('#7289da')
        .setTimestamp(message.createdAt, true)
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))

      message.channel.send({ embeds: [lvl1Embed] }).then(msg => {
        msg.react("⬅").then(() => msg.react("➡"));

        const backwardsFilter = (reaction, user) => reaction.emoji.name === "⬅" && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === "➡" && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, { timer: 6000 });
        const forwards = msg.createReactionCollector(forwardsFilter, { timer: 6000 });

        backwards.on("collect", r => {
          if (page === 1) return;
          page--;
          lvl1Embed.setDescription(`**OBJECTIVE:** Enter the mysterious cave.\n\n${LV1layout[page - 1]}`)
          msg.edit({ embeds: [lvl1Embed] });
        });

        forwards.on("collect", r => {
          if (page == LV1layout.length) {
            msg.reactions.removeAll().catch(error => message.channel.send(`I was unable to remove the reactions.`));
            lvl1Embed.setDescription(`**OBJECTIVE:** Enter the mysterious cave.\n\nWelcome to the caves ${message.author}! See you in dungeon two ;)`)
            msg.edit({ embeds: [lvl1Embed] });
          } else {
            page++;
            lvl1Embed.setDescription(`**OBJECTIVE:** Enter the mysterious cave.\n\n${LV1layout[page - 1]}`)
            msg.edit({ embeds: [lvl1Embed] });
          }
        });
      })
    } else if (level == 2) {
      message.channel.send({ embeds: [notReadyEmbed] })
    } else if (level == 3) {
      message.channel.send({ embeds: [notReadyEmbed] })
    } else if (level == 4) {
      message.channel.send({ embeds: [notReadyEmbed] })
    } else if (level == 5) {
      message.channel.send({ embeds: [notReadyEmbed] })
    }
  }
}