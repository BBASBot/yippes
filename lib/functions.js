const { RichEmbed } = require("discord.js");

module.exports = {
    getMember: async function(message, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = await message.guild.members.get(toFind);

        if (!target && message.mentions.members)
            target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) || member.user.tag.toLowerCase().includes(toFind)
            });
        }
        
        if (!target)
            target = message.member;

        return target;
    },

    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US').format(date);
    },

    getRndInteger: function(min, max) {
        return Math.floor(Math.random() * (max - min) + 1) + min;
    },

    formatTime: function(seconds) {
        function pad(s) {
          return (s < 10 ? "0" : "") + s;
        }
        var days = Math.floor(seconds / (60 * 60 * 24));
        var hours = Math.floor(seconds / (60 * 60));
        var minutes = Math.floor((seconds % (60 * 60)) / 60);
        var seconds = Math.floor(seconds % 60);
      
        return pad(days) + "d " + pad(hours) + "h " + pad(minutes) + "m " + pad(seconds) + "s";
      },
};