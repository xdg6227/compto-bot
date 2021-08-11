const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "slots",
  description: "Play a fun game of slots!",
  usage: "slots",
  aliases: [],
  category: "Game",
  cooldown: 3,
  enabled: true,
  nsfw: false,
  ownerOnly: false,
  guildOnly: true,
  async execute(client, message, args) {
    if (!args.length) {
      let slotsSpinningEmbed = new MessageEmbed()
        .setTitle(':slot_machine: Slot Maching')
        .setDescription('Welcome to the slot machine! Flipping the lever..')
        .setColor('#7289da')

      let msg = await message.channel.send({ embeds: [slotsSpinningEmbed] });

      setTimeout(function () {
        var replys1 = [":gem: : :gem: : :gem: ", ":lemon: : :lemon: : :lemon: ", ":seven: : :seven: : :seven: ", ":bell: : :bell: : :bell:", ":cherries: : :cherries: : :cherries: ", ":star: : :star: : :star: ", ":gem: : :star: : :seven: ", ":star: : :bell: : :bell:", ":star: : :star: : :cherries: ", ":gem: : :gem: : :cherries:", ":gem: : :seven: : :seven: ", ":star: : :bell: : :lemon: ", ":star: : :star: : :cherries: ", ":seven: : :star: : :star: ", ":star: : :star: : :seven: ", ":gem: : :gem: : :seven: "];
        let reponse = replys1[Math.floor(Math.random() * replys1.length)];
        var replys2 = [":gem: : :gem: : :gem: ", ":lemon: : :lemon: : :lemon: ", ":seven: : :seven: : :seven: ", ":bell: : :bell: : :bell:", ":cherries: : :cherries: : :cherries: ", ":gem: : :star: : :seven: ", ":star: : :bell: : :bell:", ":star: : :star: : :cherries: ", ":gem: : :gem: : :cherries:", ":gem: : :seven: : :seven: ", ":star: : :bell: : :lemon: ", ":star: : :star: : :cherries: ", ":seven: : :star: : :star: ", ":star: : :star: : :seven: ", ":gem: : :gem: : :seven: ", ":gem: : :cherries: : :cherries:", ":gem: : :bell: : :star:"];
        let reponse2 = replys2[Math.floor(Math.random() * replys2.length)];
        var replys3 = [":lemon: : :lemon: : :lemon: ", ":bell: : :bell: : :bell:", ":cherries: : :cherries: : :cherries: ", ":star: : :star: : :star: ", ":gem: : :star: : :seven: ", ":star: : :bell: : :bell:", ":star: : :star: : :cherries: ", ":gem: : :gem: : :cherries:", ":gem: : :seven: : :seven: ", ":star: : :bell: : :lemon: ", ":star: : :star: : :cherries: ", ":seven: : :star: : :star: ", ":star: : :star: : :seven: ", ":gem: : :gem: : :seven: "];
        let reponse3 = replys3[Math.floor(Math.random() * replys3.length)];

        slotsSpinningEmbed.setDescription(`**-------------------**\n${reponse}\n${reponse2} **>    You won some imaginary money!!**\n${reponse3}\n**-------------------**`)
        msg.edit({ embeds: [slotsSpinningEmbed] })
      }, 3000)
    }
  }
}