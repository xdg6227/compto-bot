const { MessageEmbed } = require("discord.js");
const { stripIndents } = require('common-tags');
const urban = require('urban');

module.exports = {
  name: "hangman",
  description: "Play a nice game of hangman.",
  usage: "hangman",
  aliases: [],
  category: "Game",
  cooldown: 5,
  enabled: false,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let welcomeEmbed = new MessageEmbed()
      .setTitle('<:stikdab:865854104008917013> Hangman!')
      .setDescription(`Welcome to Hangman game! This is where you and your friends can try and guess the final word. This command is new so if there are any bugs please report them. The Game starts in 10 seconds.\n\nNote: Do not ping people or type more than one letter while playing, it breaks the command and you will have to restart.`)
      .setColor('#8205B3')

    let msg = await message.channel.send({ embeds: [welcomeEmbed] }).then(msg => {
      setTimeout(function () {
        try {
          urban.random().first(async json => {
            const word = json.word.toLowerCase().replace(/ /g, '-');
            let points = 0;
            let displayText = null;
            let guessed = false;
            const confirmation = [];
            const incorrect = [];
            const display = new Array(word.length).fill('_');
            while (word.length !== confirmation.length && points < 6) {
              welcomeEmbed.setColor('RANDOM')
              welcomeEmbed.setDescription(stripIndents`
                  ${displayText === null ? 'Here we go!' : displayText ? 'Good job!' : 'Nope!'}
                  \`${display.join(' ')}\`. Which letter do you choose?
                  Incorrect Tries: ${incorrect.join(', ') || 'None'}
                  \`\`\`
                  ___________
                  |     |
                  |     ${points > 0 ? 'O' : ''}
                  |    ${points > 2 ? '—' : ' '}${points > 1 ? '|' : ''}${points > 3 ? '—' : ''}
                  |    ${points > 4 ? '/' : ''} ${points > 5 ? '\\' : ''}
                  |
                  ===========
                  \`\`\`
              `)

              await msg.edit({ embeds: [welcomeEmbed] });
              const filter = res => {
                const choice = res.content.toLowerCase();
                return res.author.id === message.author.id && !confirmation.includes(choice) && !incorrect.includes(choice);
              };
              const guess = await message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000
              });
              if (!guess.size) {
                welcomeEmbed.setDescription(`Sorry, time ran out! The word was \`${word}\``)
                welcomeEmbed.setColor('RED')
                await msg.edit({ embeds: [welcomeEmbed] })
                break;
              }
              const choice = guess.first().content.toLowerCase();
              if (choice === 'end') break;
              if (choice.length > 1 && (choice === word || choice === body.word.toLowerCase())) {
                guessed = true;
                break;
              } else if (word.includes(choice)) {
                displayText = true;
                for (let i = 0; i < word.length; i++) {
                  if (word[i] !== choice) continue;
                  confirmation.push(word[i]);
                  display[i] = word[i];
                }
              } else {
                displayText = false;
                if (choice.length === 1) incorrect.push(choice);
                points++;
              }
            }
            if (word.length === confirmation.length || guessed) {
              welcomeEmbed.setDescription(`You won! The word was \`${word}\``)
              welcomeEmbed.setColor('GREEN')
              return msg.edit({ embeds: [welcomeEmbed] })
            }
            welcomeEmbed.setDescription(`Too bad... the word was \`${word}\``)
            welcomeEmbed.setColor('RED')
            return msg.edit({ embeds: [welcomeEmbed] })
          });
        } catch (err) {
          return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        }
      }, 10000)
    })
  }
}