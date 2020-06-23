const { RichEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "general",
    description: "Gets the response time to discord.",
    run: async(client, message, args) => {
        const msg = await message.channel.send("Pinging...");
        await msg.edit(`Latency is **${Math.floor(msg.createdAt - message.createdAt)}**ms\nAPI latency is **${Math.floor(client.ping)}**ms`)
    }
};
