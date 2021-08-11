const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "poll",
  description: "Create and vote on a poll.",
  usage: "poll [info]",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let description = args.slice(0).join(' ');
    if (!description) return message.channel.send('Please provide a description for your poll.')

    let embed = new MessageEmbed()
      .setTitle(`New Poll!`)
      .setDescription(`${description}\n\n**Poll by:** \`${message.author.tag}\``)
      .setColor('#7289da')
    let msg = await message.channel.send({ embeds: [embed] });
    msg.react('👍');
    msg.react('👎');
  }
}