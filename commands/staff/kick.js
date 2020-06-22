const { RichEmbed } = require("discord.js");
const { watchFile } = require("fs-nextra");

module.exports = {
    name: "kick",
    category: "staff",
    run: async(client, message, args) => {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            const embed = new RichEmbed()
                .setColor("RED")
                .setTitle(":x: Permission Error")
                .setDescription("You don't have the permission **KICK_MEMBERS** to use this command.");
            return await message.channel.send(embed);
        }
        if (args.length < 1) {
            return message.channel.send("Usage: b.kick <@member> <reason>");
        }

        let kickMember = message.mentions.members.first();
        if (kickMember == null) {
            return message.channel.send("That is not a valid member, are they even a member?")
        }
        let kickReason = args.slice(1).join(' ');
        message.channel.send("You have kicked **<@" + kickMember.user.id + ">** for **" + kickReason + "**.")
        kickMember.send("You have been kicked from **" + message.guild.name + "** for **" + kickReason + "**.")
        await member.kick(kickReason).catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    }
}
