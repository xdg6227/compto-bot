const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "suggest",
  description: "Suggest something to the bot owner.",
  usage: "suggest",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let suggestion = args.slice(0).join(' ');

    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    let mainEmbed = new MessageEmbed()
      .setTitle(`Submit a suggestion!`)
      .setDescription(`Here you can send a suggestion to the support server. To do this, say something after the command.\nExample: \`${prefix}suggest add tacos now.\``)
      .setColor('#7289da')
      .setTimestamp(message.createdAt, true)
      .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))

    if (suggestion) {
      let suggestionEmbed = new MessageEmbed()
        .setTitle(`<:success:865854104152178688> Suggestion Submitted!`)
        .setDescription(`Your suggestion has been send to the support server.\n\n**Suggestion:** ${suggestion}\n**Suggestion by:** \`${message.author.tag}\``)
        .setColor('#7289da')
        let newSuggestionEmbed = new MessageEmbed()
        .setTitle(`New Suggestion!`)
        .setDescription(`**Suggestion:** ${suggestion}\n**Suggestion by:** \`${message.author.tag}\``)
        .setColor('#7289da')
        client.guilds.cache.get('848479759284436992').channels.cache.get('863278638417575937').send({ embeds: [newSuggestionEmbed] })
        message.channel.send({ embeds: [suggestion] });
    } else {
      message.channel.send({ embeds: [mainEmbed] });
    }
  }
}