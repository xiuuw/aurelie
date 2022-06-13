const Discord = require("discord.js");
const { Permissions } = require('discord.js');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'panel',
    description: 'create a reaction panel!',
    async execute(message, args) {

      //move into index.js if want to make it perm :D

      if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS))
          return message.reply("Oops! You don't have enough permissions to run this command!")

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply("Please mention a channel!")

        const embed = new Discord.MessageEmbed()
        .setTitle('mass w ayame')
        .setDescription("click the button to mass!")
        .setColor("#2f3136")


        const openrow = new MessageActionRow()
		  	.addComponents(
				new MessageButton()
					.setCustomId('open')
					.setLabel('open ticket')
					.setStyle('PRIMARY'),
	  		);

      
      channel.send({ embeds: [embed], components: [openrow] })
        
        message.reply(`Successfully sent the panel to ${channel}!`)
      
    }
}
