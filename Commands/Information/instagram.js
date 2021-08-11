const { MessageEmbed } = require("discord.js");
const axios = require('axios');

module.exports = {
  name: "instagram",
  description: "View a users instagram profile.",
  usage: "instagram [username]",
  aliases: ["insta"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let username = args[0];
    if (!username) return message.channel.send('Please provide a instagram username.');
    let url, response, account, details;

    try {
      url = `https://instagram.com/${username}/?__a=1`;
      response = await axios.get(url);
      account = response.data;
      details = account.graphql.user;
    } catch (error) {
      return message.channel.send('That account does not exist, make sure you typed it correctly.');
    }

    let embed = new MessageEmbed()
      .setAuthor('Instagram Account', message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setTitle(`${details.is_verified ? `${details.username} [verifiedEmoji]` : ` ${details.username}`} ${details.is_private ? '🔒' : ''}`)
      .setDescription(details.biography)
      .setThumbnail(details.profile_pic_url)
      .addField('Total Posts:', details.edge_owner_to_timeline_media.count.toLocaleString(), true)
      .addField('Followers:', details.edge_followed_by.count.toLocaleString(), true)
      .addField('Following:', details.edge_follow.count.toLocaleString(), true)
      .setColor('#7289da')
    message.channel.send({ embeds: [embed] });
  }
}