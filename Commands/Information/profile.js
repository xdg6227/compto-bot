const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "profile",
  description: "Check your sick bot profile.",
  usage: "profile",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let ownerBadge = await client.db.get(`badgeOwner_${message.author.id}`);
    let staffBadge = await client.db.get(`badgeStaff_${message.author.id}`);
    let cookieBadge = await client.db.get(`badgeCookie_${message.author.id}`);
    let betaBadge = await client.db.get(`badgeBeta_${message.author.id}`);
    let oldPalBadge = await client.db.get(`badgeOldPal_${message.author.id}`);

    if (ownerBadge == true) ownerBadge = 'Achieved';
    if (staffBadge == true) staffBadge = 'Achieved';
    if (cookieBadge == true) cookieBadge = 'Achieved';
    if (betaBadge == true) betaBadge = 'Achieved';
    if (oldPalBadge == true) oldPalBadge = 'Achieved';

    if (ownerBadge == false) ownerBadge = 'Unachieved';
    if (staffBadge == false) staffBadge = 'Unachieved';
    if (cookieBadge == false) cookieBadge = 'Unachieved';
    if (betaBadge == false) betaBadge = 'Unachieved';
    if (oldPalBadge == false) oldPalBadge = 'Unachieved';

    if (ownerBadge == null) ownerBadge = 'Unachieved';
    if (staffBadge == null) staffBadge = 'Unachieved';
    if (cookieBadge == null) cookieBadge = 'Unachieved';
    if (betaBadge == null) betaBadge = 'Unachieved';
    if (oldPalBadge == null) oldPalBadge = 'Unachieved';

    if (ownerBadge == undefined) ownerBadge = 'Unachieved';
    if (staffBadge == undefined) staffBadge = 'Unachieved';
    if (cookieBadge == undefined) cookieBadge = 'Unachieved';
    if (betaBadge == undefined) betaBadge = 'Unachieved';
    if (oldPalBadge == undefined) oldPalBadge = 'Unachieved';

    let embed = new MessageEmbed()
      .setAuthor(`${message.author.username}'s Profile`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setDescription(`Here is your personal profile! Here you can see badges and more, they will be added in as the bot gets more updates.`)
      .addField(':medal: Badges', `<:verified:865855110278021147> \`Owner:\` ${ownerBadge}\n<:discordstaff:865852978762219520> \`Staff:\` ${staffBadge}\n<:cookies:865852864504004608> \`Cookie:\` ${cookieBadge}\n<:beta:865852735374098442> \`Beta:\` ${betaBadge}\n<:stikdab:865854104008917013> \`Old Pal:\` ${oldPalBadge}`)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}