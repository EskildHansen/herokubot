const discord = require('discord.js');

module.exports = {
    run: async(client, message, args) => {

        let LogChannel = client.channels.cache.get(process.env.LOGCHANNELID);

        if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
            message.channel.send("You don't have permissions to use that command.");
        }
        else {
            let memberId = message.content.substring(message.content.indexOf(' ')+1);
            let member = message.guild.members.cache.get(args);
            if(member) {
                if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')) {
                    message.channel.send("You cannot unmute that person!");
                }
                else {
                    let unmuter = await message.author
                    let mutedRole = message.guild.roles.cache.get(process.env.MUTEDROLEID);
                    if(mutedRole) {
                        member.roles.remove(mutedRole);
                        console.log(member.user.tag + " was unmuted by " + unmuter.tag)
                        let logembed = new discord.MessageEmbed()
                            .setTitle( member.user.tag + ' was unmuted')
                            setFooter(client.user.username,client.user.avatarURL)
                            .setTimestamp()
                            .setColor('RED')
                            .addField("Info: ", member.user.tag + " was unmuted by " + unmuter.tag)

            LogChannel.send(logembed);
                        message.channel.send("User was unmuted.");
                    }
                    else {
                        message.channel.send("Muted role not found.");
                    }
                }
            }
            else {
                message.channel.send("Member not found.");
            }
        }
    }
}