const Discord = require("discord.js");
const { Permissions } = require('discord.js');

module.exports = {
    name: 'plaintext',
    description: 'send a message in plain text',
    async execute(message, args) {

      const msg = args.join(" ")
      if(!msg){
        
        message.channel.send('Please provide a message.')

      }
      

      message.channel.send(msg)

      message.delete()
    }
}
