const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "deposit",
  description: "Deposit money into your bank account.",
  usage: "deposit [amount]",
  aliases: ["dep"],
  category: "Economy",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle(`<:error:865853166839267339> Deposit Failed`)
      .setDescription(`This command is not ready for update v1.5, will be releasing soon :eyes:`)
      .setColor('RED')
    message.channel.send({ embeds: [embed] });

    // let user = message.author;
    // let balance = await client.db.get(`economy_balance_${message.guild.id}_${user.id}`);
    // let bank = await client.db.get(`economy_bank_${message.guild.id}_${user.id}`);
    // let amount = args[0];

    // if (amount === 'all') {
    //   if (balance === 0) return message.channel.send('You do not have any money to deposit.. get some money broke ass.');

    //   client.db.add(`economy_bank_${message.guild.id}_${user.id}`, balance);
    //   client.db.subtract(`economy_balance_${message.guild.id}_${user.id}`, balance);

    //   const depositedEmbed = new MessageEmbed()
    //     .setTitle(`Deposited!`)
    //     .setDescription(`You have deposited all your money into your bank`)
    //     .setColor('#7289da')
    //   message.channel.send({ embeds: [depositedEmbed] });
    // } else {
    //   if (!amount) return message.channel.send('Please specify an amount to deposit dib shit');
    //   if (amount === '0') return message.channel.send('You can\'t deposit ◈ 0 money')
    //   if (message.content.includes('-')) return message.channel.send('You can\'t deposit negative money');
    //   if (balance < amount) return message.channel.send('You do not have that much money.. stop dreaming and enter a amount you do have.');

    //   client.db.add(`economy_bank_${message.guild.id}_${user.id}`, amount);
    //   client.db.subtract(`economy_balance_${message.guild.id}_${user.id}`, amount);

    //   const depositedAmountEmbed = new MessageEmbed()
    //     .setTitle(`Deposited!`)
    //     .setDescription(`You have deposited ◈ ${amount} into your bank. You now have ◈ ${bank} inside of your bank account.`)
    //     .setColor('#7289da')
    //     .setTimestamp(message.createdAt, true)
    //     .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))

    //   message.channel.send({ embeds: [depositedAmountEmbed] });
    // }
  }
}