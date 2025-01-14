const { MessageEmbed } = require("discord.js");
const util = require("util");

module.exports = {
  name: "eval",
  description: "Evaluate code without using the editor.",
  usage: "eval [code]",
  aliases: ["run"],
  category: "Developer",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: true,
  guildOnly: true,
  async execute(client, message, args) {
    if (!client.ownerID.includes(message.author.id)) return message.channel.send('This command is for the owner only.');

    let text = args[0];
    if (!text) return message.channel.send('Provide something to evaluate..');
    if (text === 'client.token') return message.channel.send('Yeahhh no token for you.');
    if (text === 'process.env.TOKEN') return message.channel.send('Yeahhh no token for you.');
    if (text === 'let config = require(`../../config.json`); config.token') return message.channel.send('Yeahhh no token for you.');
    if (text === 'let config = require(\'../../config.json\'); config.token') return message.channel.send('Yeahhh no token for you.');

    try {
      let code = text.toLowerCase() == "-a" ? args.slice(1).join(" ") : args.join(" ");
      let decideAwait = text.toLowerCase() == "-a" ? `(async () => { {code} })();` : `{code}`;
      decideAwait = decideAwait.replace(`{code}`, code);
      let evaluation = util.inspect(await eval(decideAwait));

      const embed = new MessageEmbed()
        .setTitle('<:success:865854104152178688> Code Evaluated')
        .setColor('GREEN')
        .addField(`Input`, `\`\`\`js\n${code}\`\`\``)
        .addField(`Output`, `\`\`\`js\n${evaluation}\`\`\``)
      message.channel.send({ embeds: [embed] });

      console.log(`[EVAL] Command was run by ${message.author.tag} | Contents: ${code}`);
    } catch (error) {
      let errorMessages = require('../../Data/responses.json').error;
      let errMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

      const errorEmbed = new MessageEmbed()
        .setTitle(`<:redwarning:865854104193466368> ${errMsg}`)
        .setColor('RED')
        .setDescription(`The error has been logged to the console. Here is a brief description of the error:\n\n\`\`\`${error}\`\`\``)
      message.channel.send({ embeds: [errorEmbed] });

      const cmdErrorEmbed = new MessageEmbed()
        .setTitle(`Command Error`)
        .setDescription(`**Command:** ${this.name}\n**Error:** ${error}`)
        .setColor('RED')
        .setTimestamp(message.createdAt, true)
      client.guilds.cache.get('848479759284436992').channels.cache.get('874853925428277298').send({ embeds: [cmdErrorEmbed] })
    }
  }
}
