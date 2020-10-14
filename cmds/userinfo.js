const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL();
    let inline = true
    let resence = true
    const status = {
        online: "<:online:764641655559028768> Online",
        idle: "<:idle:764641669336662076> Idle",
        dnd: "<:dnd:764641655549591554> Do Not Disturb",
        streaming: "<:Streaming:765010194756534292> Streaming",
        offline: "<:invisible:765010194542493757> Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "<:bottag:764623696694214676> Yes";
  } else {
    bot = "<:bottag:764623696694214676> No";
  }

            let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL()))
                .setColor(15105040,)
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `<:Yes:764644992333119498> Nickname: ${member.nickname}` : "<:No:764644971109154888> None"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:no:425632070036094986> No Roles"}`, true)
                .addField("Joined Discord At", member.user.createdAt)
                .setFooter(`Information about ${member.user.username}`, bicon)
                .setTimestamp()
    
            message.channel.send(
              embed
            );

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }