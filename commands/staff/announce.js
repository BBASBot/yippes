const { RichEmbed } = require("discord.js");

module.exports = {
    name: "announce",
    category: "staff",
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new RichEmbed()
                .setColor("RED")
                .setTitle(":x: Permission Error")
                .setDescription("You don't have the permission **ADMINISTRATOR** to use this command.");
            return await message.channel.send(embed);
        }
        if (args.length < 1) {
            return message.channel.send("Usage: b.announce <message>");
        }
        var embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(`Announcement`)
            .setDescription(`${args.join(" ").slice(0)}`);
        message.guild.channels.get("690021741497810956").send(embed);
        var embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(`Announcement`)
            .setDescription("Your announcement has been sent in <#690021741497810956>.");
        await message.channel.send(embed);
    }
};
