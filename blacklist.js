const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban a member',
    async execute(message, args) {

      
        if(!message.member.permissions.has(Permissions.BAN_MEMBERS))
          return message.reply("Oops! You don't have enough permissions to run this command! <:nop:970711199492763689>")

      let User = message.mentions.users.first() ||args[0]
      
      try {
      
        await message.guild.members.ban(User);
        message.channel.send(`Successfully blacklisted **${User}**!`)

        } catch (error){
        message.reply('Please mention a valid user/provide a valid user ID!')
      }

  }
}
