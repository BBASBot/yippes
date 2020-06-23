const { stripIndents } = require('common-tags');

const { RichEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "normal",
    aliases: ["pong"],
    run: async(client, message, args) => {

 async run(message) {
    const msg = await message.channel.send('Pinging...');
    const ping = Math.round(msg.createdTimestamp - message.createdTimestamp);

    if (ping <= 0) {
      return msg.edit('Wtf? The bot\'s ping is below 0 how tf did this message get sent? pls contact User or Fascinated');
    }

    return msg.edit(
      stripIndents`
      🏓 P${'o'.repeat(Math.ceil(ping / 100))}ng: \`${ping}ms\`
      💓 Heartbeat: \`${Math.round(message.client.ping)}ms\`
      `,
    );
  }
};
