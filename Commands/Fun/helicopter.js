const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "helicopter",
  description: "Drop down and send a message.",
  usage: "helicopter [text]",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let text = args.slice(0).join(' ');
    if (!text) return message.channel.send('Please provide something for me to say.');
    message.delete();

    let embed = new MessageEmbed()
      .setTitle(':helicopter: Helicopter Incoming!')
      .setDescription(`▬▬▬.◙.▬▬▬\n═▂▄▄▓▄▄\n◢◤ █▀▀████▄▄▄▄◢◤\n█▄ █ █▄ ███▀▀▀▀▀▀▀╬\n◥█████◤\n══╩══╩═\n╬═╬\n╬═╬\n╬═╬\n╬═╬\n╬═╬    Just dropped down to say...\n╬═╬\n╬═╬    ${text}\n╬═╬ ☻/ \n╬═╬/▌ \n╬═╬/  \ `)
      .setColor('#7289da')

    message.channel.send({ embeds: [embed] });
  }
}