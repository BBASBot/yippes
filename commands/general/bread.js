const { RichEmbed } = require("discord.js");
const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply('Chill bro, ur on cooldown!')
    } else {
        module.exports = {
    name: "bread",
    category: "general",
    description: "BREAD BREAD BREAD BREAD AAAAAAAAAA",
    run: async(client, message, args) => {
        const msg = await message.channel.send(":bread:\n:bread:\n:bread:");
    }
};
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); 
    }
}
