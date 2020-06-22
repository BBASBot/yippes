const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
    messageCacheMaxSize: 500,
	messageCacheLifetime: 2000,
	messageSweepInterval: 900,
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
});

["commands", "aliases"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handler/${x}`)(client));

client.login(process.env.TOKEN);