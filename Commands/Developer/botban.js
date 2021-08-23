const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "botban",
  description: "This is how you ban users from using the bot.",
  usage: "botban [@user] [reason]",
  aliases: [],
  category: "Developer",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: true,
  guildOnly: true,
  async execute(client, message, args) {
    if (!client.ownerID.includes(message.author.id)) return message.channel.send('This command is for the owner only.');

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(' ');
    if (message.author.id == member) return message.channel.send('You cannot ban yourself.');
    if (!member) return message.channel.send('Please provide a member to ban.');
    if (!reason) reason = 'No reason was provided';
    let banCheck = await client.db.fetch(`botban_${member.id}`)

    if (!banCheck) {
      client.db.set(`botban_${member.id}`, true)

      const embed = new MessageEmbed()
        .setTitle(`User is now Banned from using Compto.`)
        .setDescription(`A message has been sent to the user on how to get unbanned.\n\n**User:** ${member}\n**Reason:** ${reason}`)
        .setColor('RED')
      const userEmbed = new MessageEmbed()
        .setTitle(`You have been banned from using Compto.`)
        .setDescription(`To get unbanned, talk to the owner aka <@528637169544331291> | \`Night_Crown_#0001\`.\n\n**Reason:** ${reason}`)
        .setColor('RED')

      message.channel.send({ embeds: [embed] });
      member.send({ embeds: [userEmbed] })
    } else {
      message.channel.send('There was either an error or the user was already banned.')
    }
  }
}