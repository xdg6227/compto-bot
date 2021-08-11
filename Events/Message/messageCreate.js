const { Discord, MessageEmbed, Collection } = require('discord.js');
const Levels = require('discord.js-leveling');
const cooldowns = new Collection();

module.exports = async (client, message) => {
  if (message.channel.type === 'dm') return;

  /* Prefix */
  let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.prefix;
  if (prefix == undefined) prefix = client.prefix;

  if (message.content.startsWith(prefix)) {
    /* Ban Check */
    let banCheck = await client.db.fetch(`botban_${message.author.id}`);
    if (banCheck == true) {
      let bannedEmbed = new MessageEmbed()
        .setTitle(`You were been banned from using Compto.`)
        .setDescription(`To get unbanned, talk to the owner aka <@528637169544331291> | \`Night_Crown_#0001\`.`)
        .setColor('RED')

      return message.channel.send({ embeds: [bancheck] });
    } else {
    let args = message.content.substring(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.aliases.get(cmd);
    if (!command) return;
    client.statcord.postCommand(command.name, message.author.id);

    if (!command.enabled) {
      let disabledEmbed = new MessageEmbed()
        .setDescription(`This command is currently disabled, try again later.`)
        .setColor('RED')

      return message.channel.send({ embeds: [disabledEmbed] })
    };

    if (command.guildOnly && message.channel.type === 'dm') {
      let dmEmbed = new MessageEmbed()
        .setDescription(`I can't execute that command inside DMs!`)
        .setColor('RED')

      return message.channel.send({ embeds: [dmEmbed] })
    };

    /* Command Cooldown */
    if (!cooldowns.has(command.name)) cooldowns.set(command.name, new Collection());
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime && command.nsfw) {
        const timeLeft = (expirationTime - now) / 1000;
        let hornySlowdownEmbed = new MessageEmbed()
          .setDescription(`Slow down horny fuck! Wait **${timeLeft.toFixed(1)}** more seconds before using the **${command.name}** command.`)
          .setColor('RED')

        return message.channel.send({ embeds: [hornySlowdownEmbed] })
      } else if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        let slowdownEmbed = new MessageEmbed()
          .setDescription(`You must wait **${timeLeft.toFixed(1)}** more seconds before using the **${command.name}** command.`)
          .setColor('RED')

        return message.channel.send({ embeds: [slowdownEmbed] })
      };
    };

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    command.execute(client, message, args);

    /* Leveling */
    const levelingToggle = await client.db.get(`settings_leveling_${message.guild.id}`);

    if (levelingToggle === true) {
      const user = await Levels.fetch(message.author.id, message.guild.id);
      const randomAmountOfXp = Math.floor(Math.random() * 29) + 1;
      const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);

      if (hasLeveledUp) {
        const levelEmbed = new MessageEmbed()
          .setTitle('Leveled Up!')
          .setColor('RANDOM')
          .setDescription(`**GG** ${message.author}, you just leveled up to level **${user.level + 1}** 🥳`);
        const sendLevelEmbed = await message.channel.send({ embeds: [levelEmbed] });
      }
    }

    /* Command Ran */
    let commandEmbed = new MessageEmbed()
      .setTitle(`Command was Ran`)
      .setDescription(`**Command:** ${command.name}\n**Ran by:** <@${message.author.id}>\`(${message.author.id})\`\n**Ran in:** ${message.guild.name}\`(${message.guild.id})\``)
      .setColor('#7289da')
      .setTimestamp(message.createdAt, true)
    client.guilds.cache.get('848479759284436992').channels.cache.get('866808138312581130').send({ embeds: [commandEmbed] })
    }
  };

  /* AFK Stuff */
  let afkStatusCheck = await client.db.fetch(`afk_status_${message.author.id}`);

  if (afkStatusCheck === true) {
    client.db.set(`afk_status_${message.author.id}`, false)
    client.db.set(`afk_status_id_${message.author.id}`, false)
    let afkEmbed = new MessageEmbed()
      .setAuthor('AFK Status', message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setDescription(`Welcome back ${message.author}! I removed your AFK status.`)
      .setColor('#7289da')
    message.channel.send({ embeds: [afkEmbed] })
  };

  const mentioned = message.mentions.members.first();
  if (mentioned) {
    const data = await client.db.fetch(`afk_status_${mentioned.id}`);

    if (data) {
      message.channel.send(`**${mentioned.user}** is currently AFK.`);
    };
  };
};