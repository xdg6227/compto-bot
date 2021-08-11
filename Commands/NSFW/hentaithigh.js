const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "hentaithigh",
  description: "Get hentai thigh nsfw. NOT FOR CHILDREN.",
  usage: "hentaithigh",
  aliases: ["hthigh"],
  category: "NSFW",
  cooldown: 3,
  enabled: true,
  nsfw: true,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    if (message.channel.nsfw) {
      const image = await nsfw.hentaithigh();
      let embed = new MessageEmbed()
        .setTitle(`<:hanime:865853235758497812> Hentai Thigh Image`)
        .setImage(image)
        .setColor('#8b0000')
        .setTimestamp(message.createdAt, true)
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))

      message.channel.send({ embeds: [embed] });
    } else {
      const nsfwEmbed = new MessageEmbed()
        .setTitle('<:redwarning:865854104193466368> Oops!')
        .setDescription('This is an NSFW command, please run it inside of a NSFW channel.')
        .setImage('https://support.discord.com/hc/article_attachments/115000272351/thisisnsfw.png')
        .setColor('RED')

      message.channel.send({ embeds: [nsfwEmbed] })
    }
  }
}