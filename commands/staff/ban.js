const { RichEmbed } = require("discord.js");
const { watchFile } = require("fs-nextra");

module.exports = {
    name: "ban",
    category: "staff",
    run: async(client, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            const embed = new RichEmbed()
                .setColor("RED")
                .setTitle(":x: Permission Error")
                .setDescription("You don't have the permission **BAN_MEMBERS** to use this command.");
            return await message.channel.send(embed);
        }
        if (args.length < 1) {
            return message.channel.send("Usage: !ban <@member> <reason>");
        }

        let banMember = message.mentions.members.first();
        if (banMember == null) {
            return message.channel.send("That is not a valid member, are they even a member?")
        }
        let banReason = args.slice(1).join(' ');
        message.channel.send("You have banned **<@" + banMember.user.id + ">** for **" + banReason + "**.")
        // Fix later it broke idk why but yeh
        //banMember.send("You have been banned from **" + message.guild.name + "** for **" + banReason + "**.")
        await banMember.ban(banReason).catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    }
}