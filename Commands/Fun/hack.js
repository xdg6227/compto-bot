const { Discord, MessageEmbed } = require('discord.js');
const passwords = [
  "fakepassword123",
  "n02u83ffh3802",
  "ilikeamogus",
  "69hahahaha69",
  "secretpassword",
  "uwuwpoggywoggy",
  "ihatetacos57",
  "drinkaguanow",
  "90jr33rj9-02qpoaeri"
];

module.exports = {
  name: "hack",
  description: "Hack a user and steal their data.. hehe.",
  usage: "hack [@user]",
  aliases: [],
  category: "Fun",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let password = passwords[Math.floor(Math.random() * passwords.length)];
    let pizzas = Math.floor(Math.random() * 1000)
    if (!member) return message.channel.send('You probably should ping a user if your ever gonna hack someone.');

    const embed = new MessageEmbed()
      .setTitle(`Godly hacking..`)
      .setDescription(`**[ 0% complete ]** Hacking ${member.user.username}...`)
      .setColor('DARK_RED');

    message.channel.send({ embeds: [embed] })
      .then(msg => {
        setTimeout(function () {
          embed.setTitle(`Godly hacking.. | Currently hacking ${member.user.username}`)
          embed.setDescription(`**[ 16% complete ]** Free email & password anyone?\nE-Mail: ${member.user.username}@gmail.com\nPassword: ${password}`)
          msg.edit({ embeds: [embed] })
          setTimeout(function () {
            embed.setDescription(`**[ 32% complete ]** Texting their crush something embarrassing...`)
            msg.edit({ embeds: [embed] })
            setTimeout(function () {
              embed.setDescription(`**[ 48% complete ]** Deleting all social media accounts...`)
              msg.edit({ embeds: [embed] })
              setTimeout(function () {
                embed.setDescription(`**[ 54% complete ]** Stealing browser history...`)
                msg.edit({ embeds: [embed] })
                setTimeout(function () {
                  embed.setDescription(`**[ 63% complete ]** Selling personal and family data on the dark web...`)
                  msg.edit({ embeds: [embed] })
                  setTimeout(function () {
                    embed.setDescription(`**[ 79% complete ]** Ordering ${pizzas} pizza's to their house...`)
                    msg.edit({ embeds: [embed] })
                    setTimeout(function () {
                      embed.setDescription(`**[ 86% complete ]** Messaging their friends their credit card information..`)
                      msg.edit({ embeds: [embed] })
                      setTimeout(function () {
                        embed.setDescription(`**[ 86% complete ]** ERROR: They have no friends.. :clown:`)
                        msg.edit({ embeds: [embed] })
                        setTimeout(function () {
                          embed.setDescription(`**[ 95% complete ]** Subscribing to the worse OF & PH accounts EVER...`)
                          msg.edit({ embeds: [embed] })
                          setTimeout(function () {
                            embed.setTitle(`Godly hacking.. | Hacked ${member.user.username} 😎`)
                            embed.setDescription(`**[ 100% complete ]** Hack complete! Below is all their collected data:\n\n**E-Mail:** ${member.user.username}@gmail.com\n**Password:** ${password}\n\n**Browser History:**\n• bigbootybitches.net\n• is an inch too small?\n• why does no one like me\n\n**Pizza's delivered:** ${pizzas}`)
                            msg.edit({ embeds: [embed] })
                          }, 4000);
                        }, 4000);
                      }, 4000);
                    }, 4000);
                  }, 4000);
                }, 4000);
              }, 4000);
            }, 4000);
          }, 4000);
        }, 4000);
      });
  }
}