const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var subreddits = [

        'https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif',
    
            
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        
       
                var user = message.mentions.members.first()
                if(!user){
                    message.reply(`You've to mention user you want to hug.`)
                }
                const embed = new Discord.MessageEmbed()
                    .setColor(15844367,)
                    .setDescription(`${message.author} is hugging **${user}**`)
                    .setImage(sub);
                message.channel.send({
                    embed
                });
}

module.exports.help = {
    name:"hug"
}