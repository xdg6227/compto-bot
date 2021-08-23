const { MessageEmbed } = require("discord.js");
const utils = require("ms-utility");

module.exports = {
  name: "work",
  description: "Work at a sketchy building and earn money.",
  usage: "work",
  aliases: [],
  category: "Economy",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Work Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });

    // let user = message.author;
    // let timeout = 300000;
    // let amount = Math.floor(Math.random() * 100 + 20);
    // let jobs = ["Gamestop Employee", "Discord Moderator", "Waiter at a Restaurant", "Uber Driver", "Apple Developer", "Gas Station Employee", "Pro Gamer", "Assassin", "Mailman", "Designer", "Tiktoker"]
    // let job = jobs[Math.floor(Math.random() * jobs.length)];
    // let work = await client.db.get(`economy_work_${message.guild.id}_${message.author.id}`);

    // if (work !== null && timeout - (Date.now() - work) > 0) {
    //   let time = utils.parseMS(timeout - (Date.now() - work))

    //   const timerEmbed = new MessageEmbed()
    //     .setAuthor(`Slow down mate!`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
    //     .setDescription(`You already worked recently.. you can work again in **${time.minutes}m ${time.seconds}s**`)
    //     .setColor('RED')
    //   message.channel.send({ embeds: [timerEmbed] });
    // } else {
    //   client.db.add(`economy_balance_${message.guild.id}_${user.id}`, amount);
    //   client.db.set(`economy_work_${message.guild.id}_${user.id}`, Date.now());

    //   const workEmbed = new MessageEmbed()
    //     .setAuthor(`You worked!`, user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
    //     .setDescription(`You went to work as a **${job}** and received ◈ ${amount}`)
    //     .setColor('#7289da')
    //   message.channel.send({ embeds: [workEmbed] });
    // }
  }
}