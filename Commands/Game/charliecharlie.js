const { Discord, MessageEmbed } = require("discord.js");
const { stripIndent } = require('common-tags');
const answers = ['yes', 'no'];

module.exports = {
  name: "charliecharlie",
  description: "Talk with Charlie Charlie.",
  usage: "charliecharlie [question]",
  aliases: ["charlie-charlie"],
  category: "Game",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let question = args.slice(0).join(" ");
    if (!question) return message.channel.send('Please provide something to ask Charlie Charlie.');
    const answer = answers[Math.floor(Math.random() * answers.length)];

    function sendEmbed() {
      let embed = new MessageEmbed()
        .setTitle(':smiling_imp: Charlie Charlie')
        .setColor('#7289da')
        .setDescription(stripIndent`
			**Your Question:** ${question}
			\`\`\`
			    ${answer === 'no' ? '\\' : ' '}  |  ${answer === 'yes' ? '/' : ' '}
			  NO ${answer === 'no' ? '\\' : ' '} | ${answer === 'yes' ? '/' : ' '}YES
			      ${answer === 'no' ? '\\' : ' '}|${answer === 'yes' ? '/' : ' '}
			————————————————
			      ${answer === 'yes' ? '/' : ' '}|${answer === 'no' ? '\\' : ' '}
			  YES${answer === 'yes' ? '/' : ' '} | ${answer === 'no' ? '\\' : ' '}NO
			    ${answer === 'yes' ? '/' : ' '}  |  ${answer === 'no' ? '\\' : ' '}
			\`\`\`
		`)

      message.channel.send({ embeds: [embed] })
    }

    message.channel.send("Asking Charlie Charlie...").then(m => {
      setTimeout(function () {
        m.delete()
        sendEmbed();
      }, 2000);
    })
  }
}