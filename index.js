const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == "!y") {
        message.reply('yeet ur mom gey');
    }

    if(message.content == "eu4") {
        message.reply('tf dat is gay');
    }

    if(message.content == "eu4?") {
        message.reply('tf dat is gay');
    }

    if(message.content == "Fortnite?") {
        message.reply('Wel mijn map in creative');
    }

    if(message.content == "Fortnite") {
        message.reply('Wel mijn map in creative');
    }

    if(message.content == "!disconnect") {
        message.reply('Wy u do that');
    }

});

bot.login('NTgwODAyODYxMTM5NDkyODY0.XObbwg.cL4Ot94QiGzXjUWuOYRG4Ftj1yw');