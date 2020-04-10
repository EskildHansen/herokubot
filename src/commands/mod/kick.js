module.exports.run = async(client, message, args) => {
const discord = require('discord.js');

    let LogChannel = client.channels.cache.get(process.env.LOGCHANNELID);

    if(!message.member.hasPermission('KICK_MEMBERS')) {
        message.channel.send("You don't have permission to use this command!")
    }
    else {
        let kicker = await message.author
        let memberId = message.content.substring(message.content.indexOf(' ') + 1);     
        let member = message.guild.members.cache.get(memberId);
        if (member) {
        try {
            await member.kick()
            let logembed = new discord.MessageEmbed()
            .setTitle(member.tag + ' was kicked')
            .setColor('RED')
            setFooter(client.user.username,client.user.avatarURL)
            .setTimestamp()
            .addField("Info: ", member.tag + " was kicked by " + kicker.tag)

            LogChannel.send(logembed);
            console.log(member.tag + " was kicked by " + kicker.tag);
        }
        catch(err) {
            console.log(err)   
        }
     }
    }
}
