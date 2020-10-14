const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var subreddits = [
        'https://i.pinimg.com/originals/20/85/cf/2085cf0f99768cc113b3448efc80d18f.gif',
        'https://media1.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://cdn69.picsart.com/191947441000202.gif?to=min&r=640',
        'https://lh3.googleusercontent.com/proxy/oO2LHho8G9jsPjiWF8e-6mbLP4iVYJOwSkOJ9z4EveaZCw1aNcc994UynsNeqko_-nrTN_o-F2VJUYcSiFQruCklNgyuNQkJaMBLSntmnSN_OvPG1NJfDpVrQHA',
        'https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515',
        'https://i.pinimg.com/originals/2d/20/e8/2d20e85bf5a1c206a894e98f473d4dfd.gif',
        'https://media1.tenor.com/images/f3aa15cc96874fc7bdfb496a79756517/tenor.gif?itemid=10356469',
        '',
    
    
            
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        
       
                var user = message.mentions.members.first()
                if(!user){
                    message.reply(`You've to mention user you want to kiss.`)
                }
                const embed = new Discord.MessageEmbed()
                .setColor(15844367,)
                .setDescription(`${message.author} give kiss to **${user}**`)
                .setImage(sub)
                .setFooter('Kiss', bot.user.displayAvatarURL())
                .setTimestamp()
    
                message.channel.send({
                    embed
                });
}

module.exports.help = {
    name:"kiss"
}