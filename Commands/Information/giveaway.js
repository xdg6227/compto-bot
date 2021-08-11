const { Discord, MessageEmbed } = require("discord.js");
const ms = require('ms');

module.exports = {
  name: "giveaway",
  description: "Create and manage giveaways.",
  usage: "giveaway [option] [option] [option] [option] [option]",
  aliases: [],
  category: "Information",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    let optionOne = args[0];
    let optionTwo = args[1];
    let optionThree = args[2];
    let optionFour = args.slice(3).join(' ');

    if (!optionOne) {
      message.channel.send('Please provide something to do! Your options are `start`, `end`, `edit`, `reroll`, and `delete`.')
    }

    if (optionOne === 'start') {
      let time = optionTwo
      let winnerCount = optionThree
      let prize = optionFour
      if (!time) return message.channel.send('Please provide a duration for the giveaway to last.');
      if (!winnerCount) return message.channel.send('Please provide a winner count for the giveaway.');
      if (!prize) return message.channel.send('Please provide a prize for the giveaway.');

      client.giveawaysManager.start(message.channel, {
        time: ms(time),
        winnerCount: parseInt(winnerCount),
        prize: prize
      })
    }

    if (optionOne === 'end') {
      if (!optionTwo) return message.channel.send('Please provide a message ID to reroll the giveaway.');

      client.giveawaysManager.end(optionTwo).then(() => {
        message.channel.send('Success! Giveaway was ended!');
      }).catch((err) => {
        message.channel.send('No giveaway found for ' + optionTwo + ', please check and try again');
      });
    }

    if (optionOne === 'edit') {
      if (!optionTwo) return message.channel.send('Please provide a message ID to reroll the giveaway.');

      client.giveawaysManager.edit(optionTwo, {
        addTime: 5000,
        newWinnerCount: 3,
        newPrize: 'New Prize!'
      }).then(() => {
        const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
        message.channel.send('Success! Giveaway will updated in less than ' + numberOfSecondsMax + ' seconds.');
      }).catch((err) => {
        message.channel.send('No giveaway found for ' + optionTwo + ', please check and try again.');
      });
    }

    if (optionOne === 'reroll') {
      if (!optionTwo) return message.channel.send('Please provide a message ID to reroll the giveaway.');

      client.giveawaysManager.reroll(optionTwo).then(() => {
        message.channel.send('Success! Giveaway was rerolled!');
      }).catch((err) => {
        message.channel.send('No giveaway found for ' + optionTwo + ', please check and try again.');
      });
    }

    if (optionOne === 'delete') {
      if (!optionTwo) return message.channel.send('Please provide a message ID to reroll the giveaway.');

      client.giveawaysManager.delete(optionTwo).then(() => {
        message.channel.send('Success! Giveaway was deleted!');
      }).catch((err) => {
        message.channel.send('No giveaway found for ' + optionTwo + ', please check and try again.');
      });
    }
  }
}