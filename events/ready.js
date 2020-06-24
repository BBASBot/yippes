module.exports = (client) => {
    console.log("Successfully logged into Discord.");

    client.user.setPresence({
        game: {
            name: "Yippes | v0.4",
            type: "PLAYING"
        }
    })  
function setData() {
        let guild = client.guilds.get("684121060916068393")
        let memberCount = guild.memberCount
        let boosterCount = guild.premiumSubscriptionCount
        guild.channels.get("709793993852190740").setName("Server Members: " + memberCount)
        guild.channels.get("709794564004904960").setName("Server Boosts: " + boosterCount)
    console.log(guild);
    }
    setInterval(setData, 60000);
};
