module.exports.run = async(client, message, args) => {
    
    let workshopembed = new Discord.MessageEmbed()
            .setTitle('Workshop!')
            .setColor('GREY')
            .addField('URL', 'https://steamcommunity.com/sharedfiles/filedetails/?id=1982036992')
            .setThumbnail('https://steamuserimages-a.akamaihd.net/ugc/404556234639033962/31F30CE86ECE895D177ABD3EC8187341EE2EABCE/')

            message.channel.send(workshopembed);
}