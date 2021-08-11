const { Discord, MessageEmbed } = require("discord.js");
const moment = require('moment');
const filterLevels = {
  DISABLED: "Off",
  MEMBERS_WITHOUT_ROLES: "No Roles",
  ALL_MEMBERS: "Everyone"
};
const verificationLevels = {
  NONE: "None",
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "(╯°□°）╯︵ ┻━┻",
  VERY_HIGH: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻"
};
const regions = {
  brazil: "Brazil",
  europe: "Europe",
  hongkong: "Hong Kong",
  india: "India",
  japan: "Japan",
  russia: "Russia",
  singapore: "Singapore",
  southafrica: "South Africa",
  sydney: "Sydney",
  "us-central": "US Central",
  "us-east": "US East",
  "us-west": "US West",
  "us-south": "US South"
};

module.exports = {
  name: "serverinfo",
  description: "Get info about the server.",
  usage: "serverinfo",
  aliases: ["server-info", "si"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const memberCount = message.guild.memberCount;
    let ownerMain = await message.guild.members.fetch(message.guild.ownerID);

    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    const embed = new MessageEmbed()
      .setAuthor(`${message.guild.name} | Server Info`, message.guild.iconURL({ dynamic: true }))
      .setColor('#7289da')
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField('<:crown:865852881130749962> OWNER', `\`\`\`${ownerMain.user.tag}\`\`\``, false)
      .addField(`<:chanel:865852793273581598> CHANNELS [${channels.size || '0'}]`, `\`\`\`Categories: ${channels.filter(channel => channel.type === "category").size} | Text: ${channels.filter(channel => channel.type === "text").size} | Voice: ${channels.filter(channel => channel.type === "voice").size}\`\`\``, false)
      .addField(`<:people:865854103983620156> MEMBERS [${memberCount || '0'}]`, `\`\`\`Humans: ${members.filter(member => !member.user.bot).size} | Bots: ${members.filter(member => member.user.bot).size}\`\`\``, true)
      .addField(':globe_with_meridians: REGION', `\`\`\`${regions[message.guild.region]}\`\`\``, true)
      .addField(':credit_card: ID', `\`\`\`${message.guild.id}\`\`\``, true)
      .addField(':calendar: SERVER CREATED', `\`\`\`${moment(message.guild.createdTimestamp).format("LL")}\`\`\``, true)
      .addField('<:nitro:865854069167226910> BOOST TIER', `\`\`\`${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : "Tier 0"}\`\`\``, true)
      .addField('<:nitroboost:865854104004853770> BOOST COUNT', `\`\`\`${message.guild.premiumSubscriptionCount || "No boosts"}\`\`\``, true)
      .addField('<:partner:865854103733141507> PARTNERED', `\`\`\`${message.guild.partnered || "Not Partnered"}\`\`\``, true)
      .addField('<:verified:865855110278021147> VERIFICATION LEVEL', `\`\`\`${verificationLevels[message.guild.verificationLevel]}\`\`\``, true)
      .addField(`:sunglasses: EMOJIS`, `Moved to \`${prefix}emojis\` command.`, false)

    message.channel.send({ embeds: [embed] })
  }
}