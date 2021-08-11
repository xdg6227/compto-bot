const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "filter",
  description: "Cover your songs with special filters.",
  usage: "filter [filter]",
  aliases: [],
  category: "Music",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    if (!message.member.voice.channel) return message.channel.send('Please join a voice channel.');
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Please join my current voice channel.');

    let prefix = await client.db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.prefix;
    if (prefix == undefined) prefix = client.prefix;

    let filter = args[0];
    let bassboostEnabled = false;
    let nightcoreEnabled = false;
    let normalizerEnabled = false;
    let vaporwaveEnabled = false;
    let reverseEnabled = false;
    let vibratoEnabled = false;

    if (!filter) {
      let embed = new MessageEmbed()
        .setTitle(`:musical_note: ${message.guild.name}'s Player`)
        .addFields({
          name: `Bassboost - ${prefix}filter bassboost`,
          value: `Enabed: ${bassboostEnabled}`,
          inline: false
        }, {
          name: `Nightcore - ${prefix}filter nightcore`,
          value: `Enabed: ${nightcoreEnabled}`,
          inline: false
        }, {
          name: `Normalizer - ${prefix}filter normalizer`,
          value: `Enabed: ${normalizerEnabled}`,
          inline: false
        }, {
          name: `Vaporwave - ${prefix}filter vaporwave`,
          value: `Enabed: ${vaporwaveEnabled}`,
          inline: false
        }, {
          name: `Reverse - ${prefix}filter reverse`,
          value: `Enabed: ${reverseEnabled}`,
          inline: false
        }, {
          name: `Vibrato - ${prefix}filter vibrato`,
          value: `Enabed: ${vibratoEnabled}`,
          inline: false
        })
        .setColor('#7289da')
      message.channel.send({ embeds: [embed] });
    } else if (filter == 'bassboost') {
      if (!message.member.voice.channel) return message.channel.send('Please join a voice channel.');
      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Please join my current voice channel.');
      const isBassboostEnabled = client.player.getQueue(message).filters.bassboost;

      if (!isBassboostEnabled) {
        client.player.setFilters(message, { bassboost: true });
        let bassboostEnabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Bassboost filter has been enabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [bassboostEnabledEmbed] });
      } else {
        client.player.setFilters(message, { bassboost: false });
        let bassboostDisabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Bassboost filter has been disabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [bassboostDisabledEmbed] });
      }
    } else if (filter == 'nightcore') {
      if (!message.member.voice.channel) return message.channel.send('Please join a voice channel.');
      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Please join my current voice channel.');
      const isNightcoreEnabled = client.player.getQueue(message).filters.nightcore;
      
      if (!isNightcoreEnabled) {
        client.player.setFilters(message, { nightcore: true });
        let nightcoreEnabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Nightcore filter has been enabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [nightcoreEnabledEmbed] });
      } else {
        client.player.setFilters(message, { nightcore: false });
        let nightcoreDisabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Nightcore filter has been disabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [nightcoreDisabledEmbed] });
      }
    } else if (filter == 'normalizer') {
      if (!message.member.voice.channel) return message.channel.send('Please join a voice channel.');
      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Please join my current voice channel.');
      const isNormalizerEnabled = client.player.getQueue(message).filters.normalizer;
      
      if (!isNormalizerEnabled) {
        client.player.setFilters(message, { normalizer: true });
        let normalizerEnabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Normalizer filter has been enabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [normalizerEnabledEmbed] });
      } else {
        client.player.setFilters(message, { normalizer: false });
        let normalizerDisabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Normalizer filter has been disabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [normalizerDisabledEmbed] });
      }
    } else if (filter == 'vaporwave') {
      if (!message.member.voice.channel) return message.channel.send('Please join a voice channel.');
      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Please join my current voice channel.');
      const isVaporwaveEnabled = client.player.getQueue(message).filters.vaporwave;
      
      if (!isVaporwaveEnabled) {
        client.player.setFilters(message, { vaporwave: true });
        let vaporwaveEnabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Vaporwave filter has been enabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [vaporwaveEnabledEmbed] });
      } else {
        client.player.setFilters(message, { vaporwave: false });
        let vaporwaveDisabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Vaporwave filter has been disabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [vaporwaveDisabledEmbed] });
      }
    } else if (filter == 'reverse') {
      if (!message.member.voice.channel) return message.channel.send('Please join a voice channel.');
      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Please join my current voice channel.');
      const isReverseEnabled = client.player.getQueue(message).filters.reverse;
      
      if (!isReverseEnabled) {
        client.player.setFilters(message, { reverse: true });
        let reverseEnabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Reverse filter has been enabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [reverseEnabledEmbed] });
      } else {
        client.player.setFilters(message, { reverse: false });
        let reverseDisabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Reverse filter has been disabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [reverseDisabledEmbed] });
      }
    } else if (filter == 'vibrato') {
      if (!message.member.voice.channel) return message.channel.send('Please join a voice channel.');
      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Please join my current voice channel.');
      const isVibratoEnabled = client.player.getQueue(message).filters.vibrato;
      
      if (!isVibratoEnabled) {
        client.player.setFilters(message, { vibrato: true });
        let vibratoEnabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Vibrato filter has been enabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [vibratoEnabledEmbed] });
      } else {
        client.player.setFilters(message, { vibrato: false });
        let vibratoDisabledEmbed = new MessageEmbed()
          .setTitle(`${message.guild.name}'s Player`)
          .setDescription(`Vibrato filter has been disabled!`)
          .setColor('#7289da')
        message.channel.send({ embeds: [vibratoDisabledEmbed] });
      }
    }
  }
}
