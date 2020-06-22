module.exports = (client) => {
    console.log("Successfully logged into Discord.");

    client.user.setPresence({
        game: {
            name: "Yippes Bot | v0.1",
            type: "PLAYING"
        }
    })  
        function setData() {
        let guild = client.guilds.find("684121060916068393")
        let memberCount = guild.members.size()
        guild.channels.find("709793993852190740").setName("some shit: " + memberCount)
    }
    setInterval(setData, 60000);
};
