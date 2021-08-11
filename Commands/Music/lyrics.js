const { MessageEmbed } = require("discord.js");
const ly = require('solenolyrics');

module.exports = {
  name: "lyrics",
  description: "Get the lyrics for your favorite songs.",
  usage: "lyrics [song name]",
  aliases: [],
  category: "Music",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let song = args.slice(0).join(' ');
    if (!song) return message.channel.send('Please something to get the lyrics of.').then(message.delete({ timeout: 5000 }));
    let msg = await message.channel.send(`<a:loading:865853991660159026> Searching lyrics for **${song}**... If this takes awhile, try searching again.`);

    let lyrics = await ly.requestLyricsFor(song);
    let icon = await ly.requestIconFor(song);
    let title = await ly.requestTitleFor(song);
    let author = await ly.requestAuthorFor(song);

    if (lyrics.error) return msg.edit(`Could not find lyrics for **${song}**. Try typing the artist as well.`).then(message.delete({ timeout: 5000 }));
    if (lyrics.length > 2048 && lyrics.length < 4096) {
      msg.delete();
      let lyricsPageOneEmbed = new MessageEmbed()
        .setColor('#7289da')
        .setTitle(`:musical_note: ${title} - ${author}`)
        .setDescription(lyrics.substring(0, 2048))
        .setThumbnail(icon)
        .setURL('https://genius.com')

      let lyricsPageTwoEmbed = new MessageEmbed()
        .setColor('#7289da')
        .setDescription(lyrics.substring(2048, 4096))
      message.channel.send({ embeds: [lyricsPageOneEmbed] });
      message.channel.send({ embeds: [lyricsPageTwoEmbed] });
    } else if (lyrics.length < 2048) {
      msg.delete();
      let lyricsAllEmbed = new MessageEmbed()
        .setColor('#7289da')
        .setTitle(`:musical_note: ${title} - ${author}`)
        .setDescription(lyrics.substring(0, 2048))
        .setThumbnail(icon)
        .setURL('https://genius.com')
      message.channel.send({ embeds: [lyricsAllEmbed] });
    } else {
      message.channel.send(`Could not find lyrics for **${song}**. Try typing the artist as well.`).then(message.delete({ timeout: 5000 }));
    }
  }
}