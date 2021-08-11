const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guilds",
  description: "Shows all guilds the bot is in.",
  usage: "guilds",
  aliases: [],
  category: "Developer",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: true,
  guildOnly: true,
  async execute(client, message, args) {
    if (!client.owner.includes(message.author.id)) return message.channel.send('This command is for the owner only.');

    let string = '';
    client.guilds.cache.forEach(guild => { string += "**" + guild.name + "** | `" + guild.id + "` | <@" + guild.owner + ">\n" })

    let embed = new MessageEmbed()
      .setAuthor('All guilds', message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setColor('#7289da')
      .setDescription(`**Guild Name** | \`Guild ID\` | Guild Owner\n==========\n${string}`)
    await message.channel.send({ embeds: [embed] });
  }
}
