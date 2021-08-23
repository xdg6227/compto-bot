const { MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: "settings",
  description: "Edit the settings for your server.",
  usage: "settings",
  aliases: ["setting", "config"],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You do not have permission to run this command.')

    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    const components = (state, placeHolder) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("Settings")
          .setPlaceholder(placeHolder)
          .setDisabled(state)
          .addOptions(
            {
              label: '🏆 Leveling',
              value: 'leveling',
              description: 'Enable or disable leveling in your server.'
            },
            {
              label: "<:thread:865854104193728532> Logging",
              value: "logging",
              description: "Enable or disable logging in your server."
            }
          )
      ),
    ]

    let homeEmbed = new MessageEmbed()
      .setAuthor(`${message.guild.name} Settings`, message.guild.iconURL({ dynamic: true }))
      .setColor('#7289da')
      .setDescription(`Welcome to your server's personal settings page! This is how you can enable or disable certain things about Compto. To get started, select something from the dropdown below. The dropdown disappears after 15 seconds.`)
    let initmessage = await message.channel.send({ embeds: [homeEmbed], components: components(false, "Select your module here") });

    let filter = (interaction) => {
      if (interaction.user.id === message.author.id) return true; else {
        return interaction.reply({ content: "You must be the author of this interaction to use it.", ephemeral: true })
      }
    }

    let collector = message.channel.createMessageComponentCollector({
      filter,
      componentType: "SELECT_MENU",
      max: 1,
      time: 1000 * 15,
    });

    collector.on("collect", (interaction) => {
      let value = interaction.values[0]

      if (value === "logging") {
        let loggingEmbed = new MessageEmbed()
          .setAuthor(`${message.guild.name} Settings • Logging`, message.guild.iconURL({ dynamic: true }))
          .setDescription("This will log most events that happen such as new emoji, message delete, etc. Keep in mind this is brand new so it will not function fully.\nYou have 15 seconds to click a button.")
          .setColor("RANDOM");

        const components = (state) => [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId("enable")
              .setLabel("Enable")
              .setStyle("SUCCESS")
              .setDisabled(state),
            new MessageButton()
              .setCustomId("disable")
              .setLabel("Disable")
              .setStyle("DANGER")
              .setDisabled(state),
            new MessageButton()
              .setCustomId("edit")
              .setLabel("Edit")
              .setStyle("PRIMARY")
              .setDisabled(true)
          )
        ];

        interaction.deferUpdate()
        initmessage.edit({ embeds: [loggingEmbed], components: components(false) })

        let filter = (interaction) => {
          if (interaction.user.id === message.author.id) return true; else {
            return interaction.reply({ content: "You must be the author of this interaction to use it.", ephemeral: true })
          }
        }

        let collector = message.channel.createMessageComponentCollector({
          filter,
          max: 1,
          time: 1000 * 15,
        });

        collector.on("collect", async (i) => {
          initmessage.edit({ components: components(true) })
          let value = i.customId;

          if (value === "enable") {
            let loggingCheck = await client.db.fetch(`settings_logging_${message.guild.id}`);
            if (loggingCheck === true) return i.reply("Logging is already enabled!");
            await client.db.set(`settings_logging_${message.guild.id}`, true);

            let loggingTrueEmbed = new MessageEmbed()
              .setAuthor(`${message.guild.name} Settings • Logging`, message.guild.iconURL({ dynamic: true }))
              .setColor('GREEN')
              .setDescription('Logging was enabled. Make sure you have a channel with the word `log` in it.')
            initmessage.edit({ embeds: [loggingTrueEmbed], components: [] })
          } else if (value === "disable") {
            let loggingCheck = await client.db.fetch(`settings_logging_${message.guild.id}`);
            if (loggingCheck === false) return i.reply("Logging is already disabled!");

            await client.db.set(`settings_logging_${message.guild.id}`, false);

            let loggingFalseEmbed = new MessageEmbed()
              .setAuthor(`${message.guild.name} Settings • Logging`, message.guild.iconURL({ dynamic: true }))
              .setColor('RED')
              .setDescription('Logging was disabled.')
            initmessage.edit({ embeds: [loggingFalseEmbed], components: [] })
          };
        });
      } else if (value === "leveling") {
        let levelingEmbed = new MessageEmbed()
          .setAuthor(`${message.guild.name} Settings • Leveling`, message.guild.iconURL({ dynamic: true }))
          .setDescription("This will allow users to earn XP for being active! For now you can't earn anything like roles but soon you can.\nYou have 15 seconds to click a button.")
          .setColor("RANDOM");

        // I expect a small loan of $1000000 
        const components = (state) => [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId("enable")
              .setLabel("Enable")
              .setStyle("SUCCESS")
              .setDisabled(state),
            new MessageButton()
              .setCustomId("disable")
              .setLabel("Disable")
              .setStyle("DANGER")
              .setDisabled(state),
            new MessageButton()
              .setCustomId("edit")
              .setLabel("Edit")
              .setStyle("PRIMARY")
              .setDisabled(true)
          )
        ];

        interaction.deferUpdate()
        initmessage.edit({ embeds: [levelingEmbed], components: components(false) })

        let filter = (interaction) => {
          if (interaction.user.id === message.author.id) return true; else {
            return interaction.reply({ content: "You must be the author of this interaction to use it.", ephemeral: true })
          }
        }

        let collector = message.channel.createMessageComponentCollector({
          filter,
          max: 1,
          time: 1000 * 15,
        });

        collector.on("collect", async (i) => {
          initmessage.edit({ components: components(true) })
          let value = i.customId;

          if (value === "enable") {
            let levelingCheck = await client.db.fetch(`settings_leveling_${message.guild.id}`);
            if (levelingCheck === true) return i.reply("Leveling is already enabled!");
            await client.db.set(`settings_leveling_${message.guild.id}`, true);

            let levelingTrueEmbed = new MessageEmbed()
              .setAuthor(`${message.guild.name} Settings • Leveling`, message.guild.iconURL({ dynamic: true }))
              .setColor('GREEN')
              .setDescription('Leveling was enabled. Make sure you have a channel with the word `log` in it.')
            initmessage.edit({ embeds: [levelingTrueEmbed], components: [] })
          } else if (value === "disable") {
            let levelingCheck = await client.db.fetch(`settings_leveling_${message.guild.id}`);
            if (levelingCheck === false) return i.reply("Leveling is already disabled!");
            await client.db.set(`settings_leveling_${message.guild.id}`, false);

            let levelingFalseEmbed = new MessageEmbed()
              .setAuthor(`${message.guild.name} Settings • Leveling`, message.guild.iconURL({ dynamic: true }))
              .setColor('RED')
              .setDescription('Leveling was disabled.')
            initmessage.edit({ embeds: [levelingFalseEmbed], components: [] })
          };
        });
      }
    });

    collector.on("end", (i) => {
      //
    });
  }
}








/* Original Code */
// const { Discord, MessageEmbed } = require("discord.js");

// module.exports = {
//   name: "settings",
//   description: "Read the privacy information for Compto.",
//   usage: "settings [setting] [enable/disable]",
//   aliases: ["setting", "config"],
//   category: "Information",
//   cooldown: 3,
//   enabled: true,
//   nsfw: false,
//   ownerOnly: false,
//   guildOnly: true,
//   async execute(client, message, args) {
//     if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You do not have permission to run this command.')

//     let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
//     if (prefix == null) prefix = client.prefix;
//     if (prefix == undefined) prefix = client.prefix;

//     let setting = args[0];
//     let toggle = args[1];

//     let levelingToggle = await client.db.get(`settings_leveling_${message.guild.id}`);
//     let loggingToggle = await client.db.get(`settings_logging_${message.guild.id}`);

//     if (levelingToggle == true) levelingToggle = '\`Enabled\`';
//     if (loggingToggle == true) loggingToggle = '\`Enabled\`';

//     if (!args.length) {
//       let homeEmbed = new MessageEmbed()
//         .setAuthor(`${message.guild.name} Settings`, message.guild.iconURL({ dynamic: true }))
//         .setColor('#7289da')
//         .setDescription(`Welcome to your server's settings page! Here you can change custom features and make it right for your server. This is still in <:beta:865852735374098442> so if there are any bugs please let us know in the support server.`)
//         .addField(':trophy: Leveling <:beta:865852735374098442>', `This will allow users to earn XP for being active! For now you can't earn anything like roles but soon you can:tm:.\n**Enabled:** ${levelingToggle || '\`Disabled\`'}\n**How to enable/disable:** \`${prefix}settings leveling [enable/disable]\``, false)
//         .addField('<:thread:865854104193728532> Logging <:beta:865852735374098442>', `This will log most events that happen such as new emoji, message delete, etc. Keep in mind this is brand new so it will not function fully.\n**Enabled:** ${loggingToggle || '\`Disabled\`'}\n**How to enable/disable:** \`${prefix}settings logging [enable/disable]\``, false)
//       message.channel.send({ embeds: [homeEmbed] })
//     } else if (setting == 'leveling') {
//       if (toggle == 'enable') {
//         await client.db.set(`settings_leveling_${message.guild.id}`, true);

//         let levelingTrueEmbed = new MessageEmbed()
//           .setAuthor(`${message.guild.name} Settings • Leveling`, message.guild.iconURL({ dynamic: true }))
//           .setColor('GREEN')
//           .setDescription('Leveling was enabled.')
//         message.channel.send({ embeds: [levelingTrueEmbed] })
//       } else if (toggle == 'disable') {
//         await client.db.set(`settings_leveling_${message.guild.id}`, false);

//         let levelingFalseEmbed = new MessageEmbed()
//           .setAuthor(`${message.guild.name} Settings • Leveling`, message.guild.iconURL({ dynamic: true }))
//           .setColor('RED')
//           .setDescription('Leveling was disabled.')
//         message.channel.send({ embeds: [levelingFalseEmbed] })
//       } else {
//         message.channel.send('Please say if you want Leveling `enabled` or `disabled`.')
//       }
//     } else if (setting == 'logging') {
//       if (toggle == 'enable') {
//         await client.db.set(`settings_logging_${message.guild.id}`, true);

//         let loggingTrueEmbed = new MessageEmbed()
//           .setAuthor(`${message.guild.name} Settings • Logging`, message.guild.iconURL({ dynamic: true }))
//           .setColor('GREEN')
//           .setDescription('Logging was enabled. Make sure you have a channel with the word `log` in it.')
//         message.channel.send({ embeds: [loggingTrueEmbed] })
//       } else if (toggle == 'disable') {
//         await client.db.set(`settings_logging_${message.guild.id}`, false);

//         let loggingFalseEmbed = new MessageEmbed()
//           .setAuthor(`${message.guild.name} Settings • Logging`, message.guild.iconURL({ dynamic: true }))
//           .setColor('RED')
//           .setDescription('Logging was disabled.')
//         message.channel.send({ embeds: [loggingFalseEmbed] })
//       } else {
//         message.channel.send('Please say if you want Logging `enabled` or `disabled`.')
//       }
//     }
//   }
// }