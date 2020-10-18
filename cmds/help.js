const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    const infoList = fs.readFileSync("./info.txt", "utf8");
    const adminCommands = fs.readFileSync("./admin.txt", "utf8");
    const funcommands = fs.readFileSync("./fun.txt", "utf8");
    let bicon = bot.user.displayAvatarURL();
    const pidor = message.guild.members.cache.get(args[0]) || message.member;

    message.channel.send("<:NamiWonk:765001436315910165> Nami : Let's show command of Koyo ! <:LogPose:765010226214076416>")

    let funEmbed = new Discord.MessageEmbed()
    .setThumbnail(bicon)
    .setColor(15105040,)
    .setTitle("**__Fun commands__**")
    .setDescription(funcommands)
    
    message.channel.send(funEmbed);

    let infoEmbed = new Discord.MessageEmbed()
    .setColor(15105040,)
    .setTitle("**__Info commands__**")
    .setDescription(infoList)

    message.channel.send(infoEmbed);

    let modembed = new Discord.MessageEmbed()
    .setColor(15105040,)
    .setTitle("**__Admin commands__**")
    .setDescription(adminCommands)
    .setFooter("Help Command", bicon)
    .setTimestamp()
    
    message.channel.send(modembed);

    message.delete();
    
 }

 module.exports.help = {
     name: "help" 
 }
