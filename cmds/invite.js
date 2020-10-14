const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL();
    
 let inviteEmbed = new Discord.MessageEmbed()
 .setTitle("")
 .setDescription("")
 .setThumbnail(bicon)
 .setColor(15105040,)
 .addField("Support => ", "[**Support Server**](https://discord.gg/gHft3Gn)" )

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "invite"
      }