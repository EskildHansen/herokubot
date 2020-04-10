const discord = require('discord.js');

module.exports.run = async(client, message, args) => {


        let modhelpembed = new discord.MessageEmbed()
        modhelpembed.setTitle('Moderator Help')
        modhelpembed.setColor('GREY')
        modhelpembed.setThumbnail('https://static.wixstatic.com/media/86c43c_14bcc288c77a4e02b0bf59c4a56f81d0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/86c43c_14bcc288c77a4e02b0bf59c4a56f81d0~mv2.jpg')
        modhelpembed.addField('.modhelp', 'Shows this message')
        modhelpembed.addField('.Ban', 'Bans a player')
        modhelpembed.addField('.kick', 'Kicks a player')
        modhelpembed.addField('.mute', 'mutes a player')
        modhelpembed.addField('.unmute', 'unmutes a muted player')
        modhelpembed.addField('.prune', 'Clears the amount of messages you have specified')
    
            message.channel.send(modhelpembed)

}
