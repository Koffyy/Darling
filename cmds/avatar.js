const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");
    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({size: 1024})


    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.username}'s avatar`)
    .setImage(avatar)
    .setColor("RANDOM")
    .setFooter("Avatar", bot.user.displayAvatarURL())
    .setTimestamp()

    message.channel.send(embed);


    msg.delete();
}

module.exports.help = {
    name: "avatar"
}