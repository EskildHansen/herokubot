module.exports.run = async(client, message, args) => {
    
    let helpembed = new Discord.MessageEmbed()
            .setTitle('Help!')
            .addField('My name is BlitzBot!', 'My prefix is "."')
            .addField('.workshop', 'Gives you the link to the server Workshop')
            .addField('.forums', 'Gives you the link to the forums')
            .addField('.website', 'Gives you the link to the website')
            .addField('.connect', 'Gives you the direct link to join the server')
            .setColor('GREY')
            .addField('.needstaff', 'Alerts the staff team that a player need help')
            .setThumbnail('https://static.wixstatic.com/media/86c43c_14bcc288c77a4e02b0bf59c4a56f81d0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/86c43c_14bcc288c77a4e02b0bf59c4a56f81d0~mv2.jpg')
            .addField('.help', 'Shows this message')
            .setTimestamp();

            message.channel.send(helpembed);
}