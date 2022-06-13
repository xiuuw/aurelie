const Discord = require("discord.js");
const { Permissions } = require('discord.js');

module.exports = {
    name: 'mass',
    description: 'm',
    execute(message, args) {


      const embed = new Discord.MessageEmbed()
      .setDescription('︰send your ad in codeblock  \n\n︰state if sep or batch, if sep kindly set the duration (max is 3h, can do ovn if urg)  \n\n︰state the urgency \n\n︰start posting from bottom 2 top  \n\n︰tag the servers you’ved skipped\n︰take ur time \n\nafter posting, type in `done`')
      .setColor('#2f3136')

    let role = message.member.guild.roles.cache.find(role => role.id === "916281371805241404");
    if (role) message.guild.members.cache.get(message.author.id).roles.add(role);

    message.channel.send({ embeds: [embed] })
      


      
    }
}
