const discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let StaffChannel = client.channels.cache.get(process.env.STAFFCHANNELID);
    let embedConent = message.content.substring(11);
    if(!embedConent) return message.reply("Please type what you need help with!")

        let needstaff = new discord.MessageEmbed();
        needstaff.addField('Reason: ', embedConent);
        needstaff.setTitle(message.author.username + ' requires your assistant!')
        needstaff.setColor('GREY');
        needstaff.setFooter(client.user.username,client.user.avatarURL)
        needstaff.setTimestamp()
        needstaff.addField('Join the server!', 'steam://connect/51.89.128.98:27015')
            StaffChannel.send(process.env.STAFFROLEID)
            StaffChannel.send(needstaff)

            message.channel.send('The staff team has been informed!')

}