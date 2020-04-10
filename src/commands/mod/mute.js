const ms = require('ms')
const discord = require('discord.js');

module.exports.run = async(client, message, args) => {


    if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
        message.channel.send("You don't have permission to use that command.")
    }
    else {
        let memberId = message.content.substring(message.content.indexOf(' ')+ 1)
        let member = message.guild.members.cache.get(memberId);
        if (member) {
            if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')) {
                message.channel.send("You cannot mute that person!");
            }
            else{

                const LogChannel = client.channels.cache.get(process.env.LOGCHANNELID);

                let muter = await message.author
                let mutedRole = message.guild.roles.cache.get(process.env.MUTEDROLEID);
                if(mutedRole) {
                member.roles.add(mutedRole)
                console.log(member.user.tag + " was muted by " + muter.tag);
                
                let logembed = new discord.MessageEmbed()
                    .setTitle(member.user.tag + ' was muted')
                    .setColor('RED')
                    .setFooter(client.user.username,client.user.avatarURL)
                    .setTimestamp()
                    .addField("Info: ", member.user.tag + " was muted by " + muter.tag)
                LogChannel.send(logembed);

                message.channel.send("The player has been muted.")
                }
                else {
                    message.channel.send("Muted role nor found.");
                }
            }
        }
        else {
            message.channel.send("Member not found!")
        

}

        }

    }


