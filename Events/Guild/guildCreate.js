const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (client, guild) => {
  let embed = new MessageEmbed()
    .setTitle(`<:join:865853957486018560> Joined server`)
    .setDescription(`I was just added into **${guild}**.  I am now in **${client.guilds.cache.size}** servers.`)
    .setColor('GREEN')
  client.guilds.cache.get('848479759284436992').channels.cache.get('866808138312581130').send({ embeds: [embed] })

  let guildEmbed = new MessageEmbed()
    .setTitle(`<a:hearts:868980917148995614> Thank you for inviting me!`)
    .setDescription(`Hello, I am Compto! I am now in **${client.guilds.cache.size} guilds** :D`)
    .addField('Getting Started', `My prefix is \`c!\`, you can change the prefix by running \`c!prefix <new prefix>\` and to see all of my commands, run \`c!help\`.\n\nThere are some features you can enable and disable through settings, to change those run \`c!settings\`.\n\nHope you enjoy using Compto in your server!`)
    .addField('Links', `**[Invite](https://discord.com/oauth2/authorize?client_id=848320077219758111&permissions=4294967287&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize&scope=bot%20applications.commands)** | **[Support Server](https://discord.com/invite/n4kdqEXVTC)** | **[Vote](https://comptobot.xyz/vote.html)** | **[Documentation (NEW)](https://docs.comptobot.xyz/)**`)
    .setColor('#7289da')

  var mainChannel = guild.channels.cache.find(ch => ch.name.includes('welcome'))
  var mainChannelBackup = guild.channels.cache.find(ch => ch.name.includes('general'))

  try {
    mainChannel.send({ embeds: [guildEmbed] })
  } catch {
    mainChannelBackup.send({ embeds: [guildEmbed] })
  }
}