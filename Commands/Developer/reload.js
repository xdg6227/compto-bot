const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "reload",
  description: "Reload a command.",
  usage: "reload [command]",
  aliases: [],
  category: "Developer",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: true,
  guildOnly: true,
  async execute(client, message, args) {
    if (!client.ownerID.includes(message.author.id)) return message.channel.send('This command is for the owner only.');
    let commandName = args[0];
    if (!commandName) return message.channel.send('Please provide a command to reload.');
    let command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    try {
      delete require.cache[require.resolve(`../../Commands/${command.category}/${command.name}.js`)];
      let newCommand = require(`../../Commands/${command.category}/${command.name}.js`);
      message.client.commands.set(newCommand.name, newCommand);

      const embed = new MessageEmbed()
        .setTitle('<:success:865854104152178688> Reload Successful')
        .setColor('#00FF00')
        .setDescription(`The command \`${command.name}\` was reloaded.`)
      message.channel.send({ embeds: [embed] });
      console.log(`[RELOAD] Command was reloaded by ${message.author.tag}`);
    } catch (error) {
      let errorMessages = require('../../Data/responses.json').error;
      const errMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

      let errorEmbed = new MessageEmbed()
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
