
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const discordModals = require('discord-modals');
const { Modal, TextInputComponent, showModal } = require('discord-modals');
const { Formatters } = require('discord.js');


const client = new Discord.Client({
    shards: "auto", // 1800+ ,
    allowedMentions: {
      parse: ["roles", "users"],
      repliedUser: false,
    },
    failIfNotExists: false,
    presence: {
      activity: {
        name: `ayame's sexc portal`, 
        type: "WATCHING"
      },
      status: "online"
    },
    restTimeOffset: 0,
    partials: ["CHANNEL", "USER", "MESSAGE", "REACTION"],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
    ]
});

const fs = require('fs');
const express = require("express");
discordModals(client);


const prefix = 'a'

client.once('ready', () => {
	console.log('Ready!');
  client.user.setPresence({ activities: [{ name: `ayame's sexc portal`, type: `WATCHING` }] });
});

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log("idk"));

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    }


client.on("messageCreate", async message => {

    if(message.channel.type === 'dm') return;
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if(command === 'mass') {
        client.commands.get('mass').execute(message, args);
    } else if(command === 'rename') {
        client.commands.get('rename').execute(message, args);
    } else if(command === 'blacklist') {
        client.commands.get('blacklist').execute(message, args);
    } else if(command === 'panel') {
        client.commands.get('panel').execute(message, args);
    } else if(command === 'panel') {
        client.commands.get('panel').execute(message, args);
    } else if(command === 'panel2') {
        client.commands.get('panel2').execute(message, args);
    } else if(command === 'embed') {
        client.commands.get('embed').execute(message, args);
    } else if(command === 'plaintext') {
        client.commands.get('plaintext').execute(message, args);
    } else if(command === 'contact') {
      
      const mm = args.join(' ')
      if(!mm) return message.reply('Please provide a valid user ID!')
      if(isNaN(args[0])) return message.reply("Please provide a valid user ID!");

      const embed3 = new Discord.MessageEmbed()
        .setTitle('Modmail Ticket Opened! <:ablckbfly:973834068934406156>')
        .setDescription(`You have been contacted by the staff in **${message.guild.name}**!`)
        .setColor('#2f3136')

      client.users.fetch(mm, false).then((user) => {
     user.send({ embeds: [embed3] });
  });


     const ch = await message.guild.channels.create(mm, {
	    type: 'GUILD_TEXT',
      parent: '981045194721984512',
      topic: `Ticket opened by ${message.author.id} to contact ${mm}!`
	
  });

      let details_embed = new MessageEmbed()
                 .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true})})
                 .setColor("#2f3136")
                 .setDescription('A new modmail ticket has been opened! <:ablckheart:973868695589912586>')

           const clclrow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('clcl')
                    .setLabel('close ticket')
                    .setStyle('PRIMARY'),
            );

        ch.send({ embeds: [details_embed], components: [clclrow] })
        message.reply(`Successfully contacted that user! ${ch}`)
      
    } else if(command === 'help') {
        client.commands.get('help').execute(message, args);
    }


  
});


        //-----------

client.on("messageCreate", async message => {

  if (message.content.toLowerCase() === 'done'){
    const embed = new Discord.MessageEmbed()
    .setDescription('︰gj! you’ve finished posting \n︰send ss of <#902394059941904395>\n︰ayame will post soon!*!*')
    .setColor('#2f3136')

    message.channel.send({ content: "<@825017173327085648> <@&902363169245249546>", embeds: [embed]})

let role = message.member.guild.roles.cache.find(role => role.id === "916281371805241404");
        if (role) message.guild.members.cache.get(message.author.id).roles.remove(role);
  } if(message.content.startsWith('<#914509088065466410>')){
    
    const eembed = new Discord.MessageEmbed()
    .setDescription('︰tysm for not mass scamming \n︰remember to take breaks!')
    .setColor('#2f3136')

    message.channel.send({embeds: [eembed] })
    
  }

})

client.on('guildMemberAdd', (member) => {

    const channelID = '902371708844015617'

    member.send("   ⨯_ _ _ _ _ _ _ _ __***lov***__\n\n*dm ayame.#6969 or love u#7777 to join*\n\n⪩ **⪨** *am&pm prtls which __guar__ __inv__*\n\n**⸝** ayame : pm prtl\n﹏ https://discord.gg/ZV8bpUHgF3\n\n**⸝** sae : am prtl\n﹏ https://discord.gg/PgQFngmR4q\n\n**⸝** simply : apm prtl\n﹏ https://discord.gg/Bn8QxdQmQf\n\n**⸝** mika : pm prtl\n﹏ https://discord.gg/GktJGEJsu2\n\n**⸝** marsz : pm prtl\n﹏ https://discord.gg/PzeKaDcnst\n\n**⸝** horrid : pm prtl\n﹏ https://discord.gg/DUrcZV6pEu  \n\n**⸝** pia : pm prtl\n﹏ https://discord.gg/Rz9QEkktRz  \n\n**⸝** CH : pm prtl\n﹏ https://discord.gg/z76R5YXNUC  \n\n**⸝** sua : apm prtl\n﹏ https://discord.gg/67Cvc6N6MZ\n\n**⸝** ally : pm prtl\n﹏ https://discord.gg/zywtxzUQBa   ")

  member.send("⨯_ _ _ _ _ _ _ _ __***lov 2***__\n\n*dm ayame.#6969 or love u#7777 to join*\n\n⪩ **⪨** *am&pm prtls which __guar__ __inv__*\n\n**⸝** ayame : pm prtl\n﹏ https://discord.gg/ZV8bpUHgF3\n\n**⸝** vampy : pm prtl\n﹏\nhttps://discord.gg/hJtBP9cKYk \n\n**⸝** scarii : am & pm prtl\n﹏\nhttps://discord.gg/87MmyvS8qe\nhttps://discord.gg/adP3Wyaz4y \n\n**⸝** blush : pm prtl\n﹏ https://discord.gg/xJN8HYdfsG\n\n**⸝** krystal : pm prtl\n﹏ https://discord.gg/4rJVwn2gfF ")

  member.send("_ _ _ _ _ _ _ _  `🥃`_ _ _ _ ***__piss net <3__***\n_ _ _ _ _ _ _ _ *the most epic apm net* `💛`  *all guar invites!!! we r amazing stfu*\n_ _ _ _ _ _ _ _ _ _ _ _*dm **__Shimussy#9725__** 2 join da piss net babes* `🏵️`\n\n> shimussy : https://discord.gg/N2g6Krn5WW\ncassie : https://discord.gg/5RvqFp9tmP\n> lilly : https://discord.gg/qnMaP7V6Bt\nmily : https://discord.gg/F6fEnaVhsS\n> molly : https://discord.gg/e9EMdKAxHx\nfae : https://discord.gg/pTvaZ3nA5v\n> denise : https://discord.gg/FGHacctTee\nyoi and nyx : https://discord.gg/dHTcjkKpcR\n> krystal : https://discord.gg/4rJVwn2gfF\nrose : https://discord.gg/MPZVCA8F6a ")

  member.send("> damon : https://discord.gg/NjxR8wPEpr \nCH : https://discord.gg/z76R5YXNUC\n> avery : https://discord.gg/rCVp59gwDX \nvex : https://discord.gg/scFq9TZTCR\n> len and kye : https://discord.gg/aStNTHFEN2\nolivia : https://discord.gg/quSjv6dmVj\n> xian : https://discord.gg/VbHRM4YJUe\nnicole : https://discord.gg/EtQ4dQdwgj\n> fae² : https://discord.gg/e9BqWjyJQN \nqween & eraser : https://discord.gg/mfbJNnVS9p")

  member.send(" > vamp : https://discord.gg/XDAhAa22gE\nnai : https://discord.gg/JpnCsDyMeA\n> maz : https://discord.gg/pmU45zpwYp\npia : https://discord.gg/Rz9QEkktRz\n> estella & sof : https://discord.gg/MDbDtnSBTJ\nayame : https://discord.gg/ZV8bpUHgF3\n> aponi : https://discord.gg/q92Gme6U3Y\nsae : https://discord.gg/PgQFngmR4q\n> nyx : https://discord.gg/k4zjGyb9dy ")

  member.send("｡ﾟﾟ･｡･ﾟﾟ｡ ﾟ。\n   ***mommy***\n　ﾟ･｡･ﾟ\n\n*dm ➜ ayame.#6969 to join !*\n\n*apm prtls that guar invs !*\n\n**×** ayame : pm prtl\n﹐﹐https://discord.gg/ZV8bpUHgF3\n\n**×** pia : pm prtl\n﹐﹐https://discord.gg/Rz9QEkktRz\n\n**×** mika : pm prtl\n﹐﹐https://discord.gg/GktJGEJsu2\n\n**×** simply : apm prtl\n﹐﹐https://discord.gg/Bn8QxdQmQf\n\n**×** ally : pm prtl\n﹐﹐https://discord.gg/zywtxzUQBa\n\n**×** scarii : am & pm prtl\n﹐﹐https://discord.gg/87MmyvS8qe\nhttps://discord.gg/adP3Wyaz4y ")

  member.send(" ` ⟢ ` **__dying net__** ━ __s__exc prtls designed for invs\n> sho﹕https://discord.gg/fCaxDXUxQT\n．ayame﹕https://discord.gg/ZV8bpUHgF3\n> pia﹕https://discord.gg/Rz9QEkktRz\n．damon﹕https://discord.gg/NjxR8wPEpr\n> kyo﹕https://discord.gg/QFH6hxHfNv \n．ch﹕https://discord.gg/z76R5YXNUC\n> aice﹕https://discord.gg/xnu8c9Hrb2\n．lenza﹕https://discord.gg/aStNTHFEN2\n> kye﹕https://discord.gg/pfRFu6Ng5A ")

    const welcembed = new Discord.MessageEmbed()
    .setTitle(`welc ${member.user.username} ‹𝟹`)
    .setDescription("[info](https://discord.com/channels/902338699080114237/902388794383278101) ﹒ [roles](https://discord.com/channels/902338699080114237/902935591207981127) ﹒ [status](https://discord.com/channels/902338699080114237/902388813156982804) ﹒ [mass](https://discord.com/channels/902338699080114237/902372480583344228)")
    .setColor('#2f3136')
    .setFooter({ text: `u're our ${member.guild.memberCount} mmbr` })
  .setThumbnail(member.user.displayAvatarURL({dynamic: true}))

    const channel = member.guild.channels.cache.get(channelID)

    channel.send({ embeds: [welcembed] })
});

//MODMAIL---------------

client.on("messageCreate", async (message) => {


  
     if (message.author.bot) return;
     else if (!message.guild) {
         const guild = client.guilds.cache.get('902338699080114237') || await client.guilds.fetch('902338699080114237')
         const member = guild?.members.cache.get(message.author.id) || await guild?.members.fetch(message.author.id)
 
         const category = guild.channels.cache.find((x) => x.id == "981045194721984512")
 
         let channel = guild.channels.cache.find((x) => x.name == message.author.id && x.parentId === category.id)
 
         if (!channel) {
             channel = await guild.channels.create(message.author.id, {
                 type: "text",
                 parent: category.id,
                 topic: `Ticket opened by: ${message.author.id}`
             })
 
             let success_embed = new MessageEmbed()
                 .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true})})
                 .setColor("#2f3136")
                 .setDescription(`<a:ablckbbfly:973833115254546482> Successfully opened a ticket!`)
 
             message.author.send({ embeds: [success_embed] })
 
 
             let details_embed = new MessageEmbed()
                 .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true})})
                 .setColor("#2f3136")
                 .setTitle('A new modmail ticket has been opened! <:ablckheart:973868695589912586>')

           const clclrow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('clcl')
                    .setLabel('close ticket')
                    .setStyle('PRIMARY'),
            );

           
 
             let sent = await channel.send({ embeds: [details_embed], components: [clclrow] })

           
        
         }
 
         let content_embed = new MessageEmbed()
             .setColor("#2f3136")
             .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true})})
             .setDescription(message.content)
 
         if (message.attachments.size) content_embed.setImage(message.attachments.map(x => x)[0].proxyURL)
         channel.send({ embeds: [content_embed] })
 
     } else if (message.channel.parentId) {
         const category = message.guild.channels.cache.find((x) => x.id == "981045194721984512")

       
       
         if (message.channel.parentId === category.id) {
             let member = message.guild.members.cache.get(message.channel.name) || await message.guild.members.fetch(message.channel.name).catch(err => { })
 
             let content_embed = new MessageEmbed()
                 .setColor("#2f3136")
             .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true})})
             .setDescription(message.content)
 
             if (message.attachments.size) content_embed.setImage(message.attachments.map(x => x)[0].proxyURL)
             return member.send({ embeds: [content_embed] })

          
         }
     } 
 })



//TICKETS----------------

client.on("interactionCreate", async(interaction) => {
  
  if(interaction.isButton()){
    if(interaction.customId === "open"){
      
      const yeeahh = await interaction.guild.channels.create(`w2p`, {
        type: "GUILD_TEXT",
        parent: "979350766106071060",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          },
          {
            id: interaction.guild.id,
            deny: ['VIEW_CHANNEL'],
          }
        ]
      })

      yeeahh.setTopic('mass w ayame')
      
        const yeah = new Discord.MessageEmbed()
        .setTitle('mass w ayame')
        .setDescription('use `amass` to start!*!* ')
        .setColor('#2f3136')

        const closerow = new MessageActionRow()
		  	.addComponents(
				mkmk = new MessageButton()
					.setCustomId('close')
					.setLabel('close ticket')
					.setStyle('PRIMARY'),

        okok = new MessageButton()
					.setCustomId('reason')
					.setLabel('close with reason')
					.setStyle('PRIMARY'),
			);


        yeeahh.send({ content: `<@${interaction.user.id}>`, embeds: [yeah], components: [closerow] })

      interaction.reply({ content: `Here's your ticket: ${yeeahh} <a:ablckbbfly:973833115254546482>`, ephemeral: true})
    } 
    //------------------------ LINK
    
    else if(interaction.customId === "link"){
      
      
      const yeaa = await interaction.guild.channels.create(interaction.user.username, {
        type: "GUILD_TEXT",
        parent: "979350766106071060",
        permissionOverwrites: [
          {
            id: interaction.user.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          },
          {
            id: interaction.guild.id,
            deny: ['VIEW_CHANNEL'],
          }
        ]
      })

      yeaa.setTopic('link w skyline')
      
        const mhm = new Discord.MessageEmbed()
        .setTitle('link w skyline prtl')
        .setDescription('click the button to link! ')
        .setColor('#2f3136')

        const clrow = new MessageActionRow()
		  	.addComponents(
				mkmk = new MessageButton()
					.setCustomId('close')
					.setLabel('close ticket')
					.setStyle('PRIMARY'),

        mkmkmk = new MessageButton()
					.setCustomId('reason')
					.setLabel('close with reason')
					.setStyle('PRIMARY'),
			);


        yeaa.send({ content: `<@${interaction.user.id}>`, embeds: [mhm], components: [clrow] })

      interaction.reply({ content: `Here's your ticket: ${yeaa} <a:ablckbbfly:973833115254546482>`, ephemeral: true})
    } else if(interaction.customId === "close"){

      interaction.channel.delete()
    
    } else if(interaction.customId === "reason"){

      const modal = new Modal() 
.setCustomId('reasons')
.setTitle('Close Ticket!')
.addComponents(
  new TextInputComponent() 
  .setCustomId('input-1')
  .setLabel('ID of the person who opened the ticket:')
  .setStyle('SHORT') 
  .setMinLength(1)
  .setMaxLength(30)
  .setPlaceholder('User ID here')
  .setRequired(true),
  new TextInputComponent() 
  .setCustomId('input-2')
  .setLabel('Reason for closing this ticket:')
  .setStyle('LONG') 
  .setMinLength(1)
  .setMaxLength(100)
  .setPlaceholder('Start typing!')
  .setRequired(true)
);
      showModal(modal, {
      client: client, 
      interaction: interaction 
    });

  } else if(interaction.customId === 'clcl'){

      const guild = client.guilds.cache.get('902338699080114237') || await client.guilds.fetch('902338699080114237')
         const mmbr = guild?.members.cache.get(interaction.channel.name) || await guild?.members.fetch(interaction.channel.name)

      const ccembed = new Discord.MessageEmbed()
      .setTitle('<:ablckbow:973834803281539132> This ticket has been closed!')
      .setDescription('To open a new ticket, send me another DM')
      .setColor('#2f3136')

      
      client.users.fetch(mmbr, false).then((user) => {
 user.send({ embeds: [ccembed] });
});
           interaction.channel.delete()
  }   
  }
});


client.on('modalSubmit', async (modal) => {
  if(modal.customId === 'reasons') {
    const first = modal.getTextInputValue('input-1');
    const second = modal.getTextInputValue('input-2');
    const closedby = modal.user.id

    const ccembed = new Discord.MessageEmbed()
    .setTitle(`Ticket Closed! <a:ablckheartt:973868649737760778> `)
    .addFields(
		{ name: '**ㆍOpened by:**', value: `<@${first}>`,inline: true },
		{ name: '**ㆍClosed by:**', value: `<@${closedby}>`, inline: true },
		{ name: '**Reason:**', value: second },
	)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor('#2f3136')

    client.users.fetch(first, false).then((user) => {
 user.send({ embeds: [ccembed] });
});

    modal.reply('Deleting channel...')
    modal.channel.delete()
    
  }  
  });




client.login(process.env.token)
