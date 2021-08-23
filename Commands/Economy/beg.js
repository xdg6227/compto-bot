const { MessageEmbed } = require("discord.js");
const utils = require("ms-utility");

module.exports = {
  name: "beg",
  description: "Beg random people for money.",
  usage: "beg",
  aliases: [],
  category: "Economy",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Beg Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });

    // let user = message.author;
    // let timeout = 300000;
    // let amount = Math.floor(Math.random() * (0, 24) + 1);
    // let beg = await client.db.get(`economy_beg_${message.guild.id}_${user.id}`);

    // if (beg !== null && timeout - (Date.now() - beg) > 0) {
    //   let time = utils.parseMS(timeout - (Date.now() - beg))

    //   const timerEmbed = new MessageEmbed()
    //     .setAuthor(`Slow down greedy!`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
    //     .setDescription(`You already begged recently.. beg again in **${time.minutes}m ${time.seconds}s**`)
    //     .setColor('RED')
    //   message.channel.send({ embeds: [timerEmbed] });
    // } else {
    //   client.db.add(`economy_balance_${message.guild.id}_${user.id}`, amount);
    //   client.db.set(`economy_beg_${message.guild.id}_${user.id}`, Date.now());

    //   const begEmbed = new MessageEmbed()
    //     .setAuthor(`Begged Successfully!`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
    //     .setDescription(`You've begged and received ◈ ${amount}`)
    //     .setColor('#7289da')
    //   message.channel.send({ embeds: [begEmbed] });
    // }
  }
}