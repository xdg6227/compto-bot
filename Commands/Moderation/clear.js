const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "clear",
  description: "Clear messages up to 100 and below 14 days.",
  usage: "clear [amount]",
  aliases: [],
  category: "Moderation",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('You do not have permission to manage messages.')
    if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send('I do not have permission to manage messages.')

    let amount = parseInt(args[0]);
    if (!amount) return message.channel.send('Please provide an amount of messages to delete.');

    message.channel.bulkDelete(amount + 1).then(() => {
      message.channel.send(`Successfully deleted **${amount}** message(s).`).then(msg => msg.delete({ timeout: 5000 }));
    })
  }
}