// Q/A https://www.radiotimes.com/quizzes/pub-quiz-general-knowledge/
// Start at "Obscure quiz questions and answers"

const { Discord, MessageEmbed } = require('discord.js');
const quiz = require('../../Data/quiz.json');

module.exports = {
  name: "quiz",
  description: "Play a fun quiz :D",
  usage: "quiz",
  aliases: [],
  category: "Game",
  cooldown: 3,
  enabled: false,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let welcomeEmbed = new MessageEmbed()
      .setTitle('Welcome to Quiz Game!')
      .setDescription('Your job here is to guess the answer to questions before the timer runs out! The timer lasts for 30 seconds each question. To end the quiz, wait the full 30 seconds and the quiz will end. Have fun :D\n\nThe game will start in 10 seconds.')
      .setColor('#7289da')

    message.channel.send({ embeds: [welcomeEmbed] }).then(msg => {
      setTimeout(function () {
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => { return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase()) };

        let questionEmbed = new MessageEmbed()
          .setTitle('Here is the question!')
          .setDescription(item.question)
          .setColor('#FFFF00')

        message.channel.send({ embeds: [questionEmbed] }).then(() => {
          message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
              let correctEmbed = new MessageEmbed()
                .setTitle('Correct Answer!')
                .setDescription(`${collected.first().author} got the answer correct!`)
                .setColor('GREEN')

              message.channel.send({ embeds: [correctEmbed] });
              newQuestion();
            })
            .catch(collected => {
              let endEmbed = new MessageEmbed()
                .setTitle('Quiz Game Ended!')
                .setDescription(`Looks like nobody got the answer this time. To restart the game, run the quiz command again.`)
                .setColor('RED')

              message.channel.send({ embeds: [endEmbed] });
            });
        });
      }, 10000)
    })

    function newQuestion() {
      const item = quiz[Math.floor(Math.random() * quiz.length)];
      const filter = response => { return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase()) };

      let questionEmbed = new MessageEmbed()
        .setTitle('Here is the question!')
        .setDescription(item.question)
        .setColor('#FFFF00')

      message.channel.send({ embeds: [questionEmbed] }).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
          .then(collected => {
            let correctEmbed = new MessageEmbed()
              .setTitle('Correct Answer!')
              .setDescription(`${collected.first().author} got the answer correct!`)
              .setColor('GREEN')

            message.channel.send({ embeds: [correctEmbed] });
            newQuestion();
          })
          .catch(collected => {
            let endEmbed = new MessageEmbed()
              .setTitle('Quiz Game Ended!')
              .setDescription(`Looks like nobody got the answer this time. To restart the game, run the quiz command again.`)
              .setColor('RED')

            message.channel.send({ embeds: [endEmbed] });
          });
      });
    }
  }
}
