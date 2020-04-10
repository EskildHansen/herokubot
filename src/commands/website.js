module.exports.run = async(client, message, args) => {
    
    let forumsembed = new Discord.MessageEmbed()
            .setTitle('Forums!')
            .setColor('GREY')
            .setThumbnail('https://static.wixstatic.com/media/86c43c_14bcc288c77a4e02b0bf59c4a56f81d0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/86c43c_14bcc288c77a4e02b0bf59c4a56f81d0~mv2.jpg')
            .addField('URL', 'https://blitzroleplay1.wixsite.com/blitzroleplay/forum');

            message.channel.send(forumsembed);
}