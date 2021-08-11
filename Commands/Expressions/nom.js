const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "nom",
  description: "Express your emotions on others.",
  usage: "nom",
  aliases: [],
  category: "Expressions",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let person1 = message.author.username;
    let image = 'https://media.tenor.com/images/e8bbe712a5f36bbe9545930894b08bf9/tenor.gif';

    let embed = new MessageEmbed()
      .setTitle(`${person1} noms`)
      .setImage(image)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}