module.exports = (client) => {
    console.log("Successfully logged into Discord.");

    client.user.setPresence({
        game: {
            name: "Yippies | v0.1",
            type: "PLAYING"
        }
    })  
};