require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = process.env.PREFIX;
const fs = require('fs').promises;
const path = require('path');
client.commands = new Map();
client.login(process.env.BOT_TOKEN)
client.on('ready', () => {
    console.log(`${client.user.username} is online!`);
});

client.on('message', async function(message) {
    if(message.author.bot) return;
    if(!message.content.startsWith(PREFIX)) return;
    let cmdName = message.content.substring(message.content.indexOf(PREFIX)+1).split(new RegExp(/\s+/)).shift();
    let argsToPars = message.content.substring(message.content.indexOf(' ')+1);
    if(client.commands.get(cmdName)) {
        client.commands.get(cmdName).run(client, message, argsToPars)
    }
    else{
        console.log("Command does not exist")
    }
});

(async function registerCommands(dir = 'commands') {
    let files = await fs.readdir(path.join(__dirname, dir));
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory())
            registerCommands(path.join(dir, file));
        else {
            if(file.endsWith(".js")) {
                let cmdName  = file.substring(0, file.indexOf(".js"));
                try {
                    let cmdModule = require(path.join(__dirname, dir, file));
                client.commands.set(cmdName, cmdModule);

                }
                catch(err) {
                    console.log(err)
                }

            }
        }
    }
})();