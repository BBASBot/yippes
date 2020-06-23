const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply('Chill bro, ur on cooldown!')
    } else {
        message.reply('ur free from cooldown my bruhdah')
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

const { RichEmbed } = require("discord.js");

module.exports = {
    name: "bread",
    category: "general",
    description: "BREAD BREAD BREAD BREAD AAAAAAAAAA",
    run: async(client, message, args) => {
        const msg = await message.channel.send(":bread:\n:bread:\n:bread:");
    }
};
