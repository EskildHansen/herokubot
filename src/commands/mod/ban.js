const discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let LogChannel = client.channels.cache.get(process.env.LOGCHANNELID);

    if(!message.member.hasPermission('BAN_MEMBERS')) {
        message.channel.send("You don't have permission to use this command.");
    }
    else {     
        try {
            let banner = await message.author
            let bannedMember = await message.guild.members.ban(args);
            if(bannedMember) {
                console.log(bannedMember.tag + " was banned by " + banner.tag);
                let logembed = new discord.MessageEmbed()
                    .setTitle(bannedMember.tag + ' was ban!')
                    .setColor('RED')
                    .setFooter(client.user.username,client.user.avatarURL)
                    .setTimestamp()
                    .addField('Info: ', bannedMember.tag + " was banned by " + banner.tag)

            LogChannel.send(logembed);
                message.channel.send(bannedMember.tag + " was banned.");
            
        }
        else {
            console.log("The ban did not happen.");
        }
    }
    catch(err) {
        console.log(err)
    }
    }
}