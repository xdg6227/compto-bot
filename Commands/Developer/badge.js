const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "badge",
  description: "This is how the owner can give out special badges to members.",
  usage: "badge [grant|revoke] [@user] [badge]",
  aliases: [],
  category: "Developer",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: true,
  guildOnly: true,
  async execute(client, message, args) {
    if (!client.owner.includes(message.author.id)) return message.channel.send('This command is for the owner only.');

    let optionOne = args[0];
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    let giveBadge = args[2];

    let homeEmbed = new MessageEmbed()
      .setTitle(':medal: Compto Badges')
      .setDescription(`Hello \`${message.author.username}\`, below this are all the badges you can get on your profile. All of them have to be granted by <@528637169544331291>.\n\n<:verified:865855110278021147> \`Owner\` - one person gets this, can you guess who?\n<:discordstaff:865852978762219520> \`Staff\` - all staff members get this while they are staff\n<:cookies:865852864504004608> \`Cookie\` - only very few people get this, if you do then you are very lucky.\n<:beta:865852735374098442> \`Beta\` - this is for people who helped in the beta versions of compto\n<:stikdab:865854104008917013> \`Old pal\` - have been here since day one (MLlama)`)
      .setColor('#7289da')
    if (!optionOne) {
      message.channel.send({ embeds: [homeEmbed] })
    } else if (optionOne === 'grant') {
      if (!client.owner.includes(message.author.id)) return message.channel.send('Only <@528637169544331291> is allowed to grant badges.');
      if (!user) return message.channel.send('Come on you know how to mention a user.');
      if (!giveBadge) return message.channel.send('Mate, you should probably say a badge to give.')
      let userID = user.id;

      if (giveBadge === 'owner') {
        client.db.set(`badgeOwner_${user.id}`, true)

        let ownerGrantEmbed = new MessageEmbed()
          .setTitle(':medal: Compto Badges')
          .setDescription(`Congratulations <@${user.id}>! You now have the **Owner** badge.`)
          .setColor('GREEN')
        message.channel.send({ embeds: [ownerGrantEmbed] })
      } else if (giveBadge === 'staff') {
        client.db.set(`badgeStaff_${user.id}`, true)

        let staffGrantEmbed = new MessageEmbed()
          .setTitle(':medal: Compto Badges')
          .setDescription(`Congratulations <@${user.id}>! You now have the **Staff** badge.`)
          .setColor('GREEN')
        message.channel.send({ embeds: [staffGrantEmbed] })
      } else if (giveBadge === 'cookie') {
        client.db.set(`badgeCookie_${user.id}`, true)

        let cookieGrantEmbed = new MessageEmbed()
          .setTitle(':medal: Compto Badges')
          .setDescription(`Congratulations <@${user.id}>! You now have the **Cookie** badge.`)
          .setColor('GREEN')
        message.channel.send({ embeds: [cookieGrantEmbed] })
      } else if (giveBadge === 'beta') {
        client.db.set(`badgeBeta_${user.id}`, true)

        let betaGrantEmbed = new MessageEmbed()
          .setTitle(':medal: Compto Badges')
          .setDescription(`Congratulations <@${user.id}>! You now have the **Beta** badge.`)
          .setColor('GREEN')
        message.channel.send({ embeds: [betaGrantEmbed] })
      } else if (giveBadge === 'oldpal') {
        client.db.set(`badgeOldPal_${user.id}`, true)

        let oldPalGrantEmbed = new MessageEmbed()
          .setTitle(':medal: Compto Badges')
          .setDescription(`Congratulations <@${user.id}>! You now have the **Old Pal** badge.`)
          .setColor('GREEN')
        message.channel.send({ embeds: [oldPalGrantEmbed] })
      } else {
        message.channel.send('Please mention a **real** badge.')
      }
    } else if (optionOne === 'revoke') {
      if (!client.owner.includes(message.author.id)) return message.channel.send('Only <@528637169544331291> is allowed to revoke badges.');
      if (!user) return message.channel.send('Come on you know how to mention a user.');
      if (!giveBadge) return message.channel.send('Mate, you should probably say a badge to give.')
      let userID = user.id;

      if (giveBadge === 'owner') {
        client.db.set(`badgeOwner_${user.id}`, false)

        let ownerGrantEmbed = new MessageEmbed()
          .setTitle(':medal: Compto Badges')
          .setDescription(`Aw, <@${user.id}>! You lost the **Owner** badge.`)
          .setColor('RED')
        message.channel.send({ embeds: [ownerGrantEmbed] })
      } else if (giveBadge === 'staff') {
        client.db.set(`badgeStaff_${user.id}`, false)

        let staffGrantEmbed = new MessageEmbed()
          .setTitle(':medal: Compto Badges')
          .setDescription(`Aw, <@${user.id}>! You lost the **Staff** badge.`)
          .setColor('RED')
        message.channel.send({ embeds: [staffGrantEmbed] })
      } else if (giveBadge === 'cookie') {
        client.db.set(`badgeCookie_${user.id}`, false)

        let cookieGrantEmbed = new MessageEmbed()
          .setTitle(':medal: Compto Badges')
          .setDescription(`Aw, <@${user.id}>! You lost the **Cookie** badge.`)
          .setColor('RED')
        message.channel.send({ embeds: [cookieGrantEmbed] })
      } else if (giveBadge === 'beta') {
        client.db.set(`badgeBeta_${user.id}`, false)

        let betaGrantEmbed = new MessageEmbed()
          .setTitle(':medal: Compto Badges')
          .setDescription(`Aw, <@${user.id}>! You lost the **Beta** badge.`)
          .setColor('RED')
        message.channel.send({ embeds: [betaGrantEmbed] })
      } else if (giveBadge === 'oldpal') {
        client.db.set(`badgeOldPal_${user.id}`, false)

        let oldPalGrantEmbed = new MessageEmbed()
          .setTitle(':medal: Compto Badges')
          .setDescription(`Aw, <@${user.id}>! You lost the **Old Pal** badge.`)
          .setColor('RED')
        message.channel.send({ embeds: [oldPalGrantEmbed] })
      } else {
        message.channel.send('Please mention a **real** badge.')
      }
    }
  }
}