const { RichEmbed } = require("discord.js");

module.exports = {
    name: "serverannounce",
    category: "staff",
    aliases: ["san"],
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new RichEmbed()
                .setColor("RED")
                .setTitle(":x: Permission Error")
                .setDescription("You don't have the permission **ADMINISTRATOR** to use this command.");
            return await message.channel.send(embed);
        }
        if (args.length < 1) {
            return message.channel.send("Usage: b.serverannounce <message>");
        }
        var embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(`Announcement`)
            .setDescription(`${args.join(" ").slice(0)}`);
        message.guild.channels.get("718362767186460695").send(embed);
        var embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(`Announcement`)
            .setDescription("Your announcement has been sent in <#718362767186460695>.");
        await message.channel.send(embed);
    }
};
