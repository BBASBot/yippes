module.exports = (client) => {
    console.log("Successfully logged into Discord.");

    client.user.setPresence({
        game: {
            name: "Yippies | v0.1",
            type: "PLAYING"
        }
    })  

    function setData() {
        let guild = client.guilds.get("684121060916068393")
        console.log(guild);
    }
    setInterval(setData, 10000);
};
