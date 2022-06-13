const Discord = require("discord.js");
const prefix = 'arename'
const { Permissions } = require('discord.js');

module.exports = {
    name: 'rename',
    description: 'rename a channel',
    execute(message, args) {

        let yea = message.content.substring(prefix.length).split(" ")

        if(!message.member.permissions.has(Permissions.MANAGE_CHANNELS))
          return message.reply("Oops! You don't have enough permissions to run this command! <:nop:970711199492763689>")

        if(!yea.slice(1).join(" ")) return message.channel.send("Please enter what you want me to rename this ticket.")

        message.channel.setName(yea.slice(1).join(" "))

        message.react('973868695589912586');

    }
}
