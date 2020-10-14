const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL();
    let usersize = bot.users.cache.size
    let chansize = bot.channels.cache.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.cache.size
    let botembed = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot Name", `<:bottag:764623696694214676> ${bot.user.username}`, inline)
    .addField("Bot Owner", "<:owner:764830137697959936> <@321017931423023105>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `<:user:424958082691629057> ${usersize}`, inline)
    .addField("Bot Library", "<:discordjs:425241283779362816> Discord.js", inline)
    .addField("Created On", bot.user.createdAt)
    .setFooter(`Information about: ${bot.user.username}. Developed by: Koyo`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}