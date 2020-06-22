const { RichEmbed } = require("discord.js");

module.exports = {
    name: "annoystaff",
    category: "staff",
    aliases: ["as"],
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new RichEmbed()
                .setColor("RED")
                .setTitle(":x: Permission Error")
                .setDescription("You don't have the permission **ADMINISTRATOR** to use this command.");
            return await message.channel.send(embed);
        }
        message.channel.send("@Staff lol ur bad xd xd xd")
    }
};
