const { RichEmbed } = require("discord.js");

module.exports = {
    name: "setstatus",
    category: "staff",
    aliases: ["status"],
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new RichEmbed()
                .setColor("RED")
                .setTitle(":x: Permission Error")
                .setDescription("You don't have the permission **ADMINISTRATOR** to use this command.");
            return await message.channel.send(embed);
        }
        if (args.length < 2) {
            return message.channel.send("Usage: b.setstatus <PLAYING,WATCHING> <message>");
        }
        if (args[0].toLowerCase() != "playing" || args[0].toLowerCase() != "watching")
            return await message.channel.send("invalid type kys")
    module.exports = (client) => {

    client.user.setPresence({
        game: {
            name: "Yippes | v0.2",
            type: "PLAYING"
        }
    })  
    }
};
