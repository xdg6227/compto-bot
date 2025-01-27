const { MessageEmbed } = require("discord.js");
const utils = require("ms-utility");

module.exports = {
  name: "daily",
  description: "Collect a daily reward from the bank.",
  usage: "daily",
  aliases: [],
  category: "Economy",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Daily Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });

    // let user = message.author;
    // let timeout = 86400000;
    // let amount = 50;
    // let daily = await client.db.get(`economy_daily_${message.guild.id}_${user.id}`);

    // if (daily !== null && timeout - (Date.now() - daily) > 0) {
    //   let time = utils.parseMS(timeout - (Date.now() - daily))

    //   const timerEmbed = new MessageEmbed()
    //     .setAuthor(`Slow down greedy!`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
    //     .setDescription(`You already collected your daily.. collect again in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
    //     .setColor('RED')
    //   message.channel.send({ embeds: [timerEmbed] });
    // } else {
    //   client.db.add(`economy_balance_${message.guild.id}_${user.id}`, amount);
    //   client.db.set(`economy_daily_${message.guild.id}_${user.id}`, Date.now());

    //   const dailyEmbed = new MessageEmbed()
    //     .setAuthor(`Collected Successfully!`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
    //     .setDescription(`You've collected your daily reward and received ◈ ${amount}`)
    //     .setColor('#7289da')
    //   message.channel.send({ embeds: [dailyEmbed] });
    // }
  }
}