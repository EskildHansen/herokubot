const discord = require('discord.js');
const Gamedig = require('gamedig');

module.exports.run = async(client, message, args) => {

    

    Gamedig.query({type: 'garrysmod',host: '51.89.128.98'}).then((state) => {
        var players = state.players.map(player => player.name)
        let emb = new discord.MessageEmbed()
        emb.setTitle(`ServerIP: \`${state.connect}\``)
        emb.addField("❯ Player names: ", players.join(", "))
        emb.setColor("GRAY")
        emb.addField('Join the server!', 'steam://connect/51.89.128.98:27015')
        emb.setTimestamp()
        emb.setFooter(client.user.username,client.user.avatarURL)
        console.log(state);
        message.channel.send(emb)
        })
        }
        
                
            
