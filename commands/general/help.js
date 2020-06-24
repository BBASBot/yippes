const { RichEmbed } = require("discord.js");

module.exports = {
    name: "help",
    category: "general",
    run: async(client, message, args) => {
        if (args.length < 1) {
            const embed = new RichEmbed()
                .setColor("RANDOM")
                .setTitle("Help")
                .setDescription("**Categories:** general, staff");
            return await message.channel.send(embed)
        }
        let commands = "";

        let ran = false;
        client.commands.forEach(element => {
            if (element.category === args[0]) {
                console.log(element.name);
                commands = commands + "`" + "b." + element.name + "` | ";
                ran = true;
            }
        });
        if (!ran) {
            const embed = new RichEmbed()
                .setColor("RED")
                .setTitle(":x: Error")
                .setDescription("Category not found.");
            return await message.channel.send(embed)
        }
        const embed = new RichEmbed()
            .setColor("RED")
            .setTitle("Help - " + args[0].toUpperCase())
            .setDescription("Below is all the commands in the "+args[0].toUpperCase()+" category\n\n" +commands.substring(0, commands.length-3));
        await message.channel.send(embed)
    }
};
