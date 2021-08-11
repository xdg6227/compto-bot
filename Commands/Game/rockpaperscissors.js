const { MessageEmbed } = require("discord.js");
const chooseArr = ["✊", "✋", "✌️"];

module.exports = {
  name: "rockpaperscissors",
  description: "Start a round of rock paper scissors with an AI.",
  usage: "rockpaperscissors",
  aliases: [],
  category: "Game",
  cooldown: 5,
  enabled: false,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle(":scissors: Rock Paper Scissors")
      .setDescription("Add a reaction to one of these emojis to play the game!\n Wait for all reactions to load in.")
      .setColor('#7289da')

    function promptMessage(message, author, time, validReactions) {
      time *= 1000;

      for (const reaction of validReactions) message.react(reaction);

      const filter = (reaction, user) =>
        validReactions.includes(reaction.emoji.name) && user.id === author.id;

      return message
        .awaitReactions(filter, { max: 1, time: time })
        .then(collected => collected.first() && collected.first().emoji.name);
    }

    const m = await message.channel.send({ embeds: [embed] });
    const reacted = await promptMessage(m, message.author, 30, chooseArr);
    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];
    const result = await getResult(reacted, botChoice);
    await m.reactions.removeAll();

    embed.setDescription("").addField(result, `${reacted} vs ${botChoice}`);
    m.edit({ embeds: [embed] });

    function getResult(me, clientChosen) {
      if (
        (me === "✊" && clientChosen === "✌️") ||
        (me === "✋" && clientChosen === "✊") ||
        (me === "✌️" && clientChosen === "✋")
      ) {
        return "You won!";
      } else if (me === clientChosen) {
        return "It's a tie!";
      } else {
        return "You lost!";
      }
    }
  }
}