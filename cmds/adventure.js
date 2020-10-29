const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   message.channel.send('comming')
   
   message.delete()
}

module.exports.help = {
    name: 'adventure'
}
