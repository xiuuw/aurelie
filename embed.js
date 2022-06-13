const Discord = require("discord.js");
const { Permissions } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'create an embed!',
    execute(message, args) {

      const msg_filter = (m) => m.author.id === message.author.id;


        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES))
          return message.reply("Oops! You don't have enough permissions to run this command!")

const channelEmbed = new Discord.MessageEmbed().setTitle("Embed Channel! <:ablckbfly:973834068934406156>").setDescription("・ Mention the channel you want the embed to be sent in!\n・ If you want me to send it in this channel, type `here`\n<a:ablckheartt:973868649737760778> *Type `cancel` to cancel*").setColor('#2f3136')

        const titleEmbed = new Discord.MessageEmbed().setTitle("<:ablckbfly:973834068934406156> Embed Title! ").setDescription("・ Please enter the embed title!\n・ If you don't want your embed to have a title, type `no`\n<a:ablckheartt:973868649737760778> *Type `cancel` to cancel*").setColor('#2f3136')

        const descEmbed = new Discord.MessageEmbed().setTitle("<:ablckbfly:973834068934406156> Embed Description! ").setDescription("・ Please enter the embed description!\n・ If you don't want your embed to have a description, type `no`\n<a:ablckheartt:973868649737760778> *Type `cancel` to cancel*").setColor('#2f3136')

        const colorEmbed = new Discord.MessageEmbed().setTitle("<:ablckbfly:973834068934406156> Embed Color!").setDescription("・ Please enter a hex code!\n・ If you don't want your embed to have a color, type `no`\n<a:ablckheartt:973868649737760778> *Type `cancel` to cancel*").setColor('#2f3136')
      
          const thumbnailEmbed = new Discord.MessageEmbed().setTitle("<:ablckbfly:973834068934406156> Embed Thumbnail! ").setDescription("・ Please enter the embed thumbnail!\n・ If you don't want your embed to have a thumbnail, type `no`\n<a:ablckheartt:973868649737760778> *Type `cancel` to cancel*").setColor('#2f3136')
      
          const imgEmbed = new Discord.MessageEmbed().setTitle("<:ablckbfly:973834068934406156> Embed Image!").setDescription("・ Please enter the embed image!\n・ Image __links__ will not work. Please send an attachment.\n・ If you don't want your embed to have a image, type `no`\n<a:ablckheartt:973868649737760778> *Type `cancel` to cancel*").setColor('#2f3136')

        let color; let nocolor = false;
        let thumbnail; let nothumbnail = false;
        let description; let nodescription = false;
        let title; let notitle = false;
        let image; let noimage = false;
        let channel; 
      
        
      
        //CHANNEL
        message.channel.send({ embeds: [channelEmbed] }).then(msg=>{
            msg.channel.awaitMessages({ filter: msg_filter, max: 1 }).then(collected => 
                {
                    if(collected.first().content.toLowerCase() === "cancel")
                    return message.reply("Cancelled embed creation successfully.")
                    else if(collected.first().content.toLowerCase() === "here")
                        channel = message.channel;
                    else
                        {
                            try{
                                let actch = collected.first().mentions.channels.first() || collected.first().content;
                                console.log(actch)
                                channel = message.guild.channels.cache.get(actch.id)
                            }catch{
                                return message.reply("That isn't a valid channel or I don't have permissions to send embeds in that channel.")
                            }
                        }
            
        //COLOR
        message.channel.send({ embeds: [colorEmbed] }).then(msg=>{
            msg.channel.awaitMessages({ filter: msg_filter, max: 1 }).then(collected =>
                {
                    if(collected.first().content.toLowerCase() === "cancel")
                        return message.reply("Cancelled embed creation successfully.")
                    else if(collected.first().content.toLowerCase() === "no")
                        nocolor = true;
                    else if(collected.first().content.toLowerCase() === "standard")
                        color = config.colors.yes;
                    else if(!collected.first().content.startsWith("#") && collected.first().content.length !== 7)
                        return message.reply("That is not a valid hex code. Cancelled embed creation.")
                    else
                        color = collected.first().content;
             
        //TITLE
        message.channel.send({ embeds: [titleEmbed] }).then(msg=>{
            msg.channel.awaitMessages({ filter: msg_filter, max: 1 }).then(collected =>
                {
                    if(collected.first().content.toLowerCase() === "cancel")
                        return message.reply("Cancelled embed creation successfully.")
                    else if(collected.first().content.toLowerCase() === "no")
                        notitle = true;
                    else if(collected.first().content.length > 256)
                        return message.reply("Title exceeds character limit of 256. Embed creation cancelled.")
                    else
                        title = collected.first().content;
                
        //DESCRIPTION
        message.channel.send({ embeds: [descEmbed] }).then(msg=>{
            msg.channel.awaitMessages({ filter: msg_filter, max: 1 }).then(collected => 
                {
                    if(collected.first().content.toLowerCase() === "cancel")
                        return message.reply("Cancelled embed creation successfully.")
                    else if(collected.first().content.toLowerCase() === "no")
                        nodescription = true;
                    else if(collected.first().content.length > 2048)
                        return message.reply("Description exceeds character limit of 2048. Embed creation cancelled.")
                    else
                        description = collected.first().content;
           
        //THUMBNAIL
        message.channel.send({ embeds: [thumbnailEmbed] }).then(msg=>{
            msg.channel.awaitMessages({ filter: msg_filter, max: 1 }).then(collected => 
                {
                    let url = "";
                    if(collected.first().content.toLowerCase() === "cancel")
                        return message.reply("Cancelled embed creation successfully.")
                    else if(collected.first().content.toLowerCase() === "no")
                        nothumbnail = true;
                    else if (collected.first().attachments.size > 0) {
                        if (collected.first().attachments.every(attachIsImage))
                        thumbnail = url;
                        else{
                            return message.reply("I can't use that as an image. Embed creation cancelled.")
                        }
                        }
                    else if (collected.first().content.includes("https")||collected.first().content.includes("http"))
                        thumbnail = collected.first().content;
                    else{
                        return message.reply("I can't use that as a thumbnail. Embed creation cancelled.")
                    }
                    function attachIsImage(msgAttach) {
                        url = msgAttach.url;
                        return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1 ||
                        url.indexOf("gif", url.length - "gif".length /*or 3*/) !== -1 ||
                            url.indexOf("jpeg", url.length - "jpeg".length /*or 3*/) !== -1 ||
                            url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1;
                    }
             
        //IMAGE
        message.channel.send({ embeds: [imgEmbed] }).then(msg=>{
            msg.channel.awaitMessages({ filter: msg_filter, max: 1 }).then(collected => 
                {
                    let url = "";
                    if(collected.first().content.toLowerCase() === "cancel")
                        return message.reply("Cancelled embed creation successfully.")
                    else if(collected.first().content.toLowerCase() === "no")
                       {
                            noimage = true;
                            let embed = new Discord.MessageEmbed()
                            if(!notitle)embed.setTitle(title)
                            if(!nodescription)embed.setDescription(description)
                            if(!nocolor)embed.setColor(color)
                            if(!nothumbnail)embed.setThumbnail(thumbnail)
                            if(!noimage)embed.setImage(image)
                        
                        channel.send({ embeds: [embed] }).then(msg =>{
                            try{
                                if(msg.channel.type === "news")
                                msg.crosspost()
                        } catch (error) {
                            console.log(error.stack.toString().red)
                        }  
                        })
                        }
                    else if (collected.first().attachments.size > 0) {
                        if (collected.first().attachments.every(attachIsImage))
                        image = url;
                        else{ (collected.first().content.includes("https")||collected.first().content.includes("http"))
                        image = collected.first().content;
                        }
                        let embed = new Discord.MessageEmbed()
                                if(!notitle)embed.setTitle(title)
                                if(!nodescription)embed.setDescription(description)
                                if(!nocolor)embed.setColor(color)
                                if(!nothumbnail)embed.setThumbnail(thumbnail)
                                if(!noimage)embed.setImage(image)
                            
                            channel.send({ embeds: [embed] }).then(msg =>{
                                try{
                                    if(msg.channel.type === "news")
                                    msg.crosspost()
                            } catch (error) {
                                console.log(error.stack.toString().red)
                            }  
                            })
                        }
                    else if (collected.first().content.includes("https")||collected.first().content.includes("http"))
                    {
                        image = collected.first().content;
                        let embed = new Discord.MessageEmbed()
                                if(!notitle)embed.setTitle(title)
                                if(!nodescription)embed.setDescription(description)
                                if(!nocolor)embed.setColor(color)
                                if(!nothumbnail)embed.setThumbnail(thumbnail)
                                if(!noimage)embed.setImage(image)
                            
                            message.channel.send(embed).then(msg =>{
                                try{
                                    if(msg.channel.type === "news")
                                    msg.crosspost()
                            } catch (error) {
                                console.log(error.stack.toString().red)
                            }  
                            })
                    }
                    else{
                        return message.reply("Oh, that's weird, it seems that I can't use that as an image.. Cancelled embed creation. Please try again.")
                    }
                    function attachIsImage(msgAttach) {
                        url = msgAttach.url;
                        return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1 ||
                        url.indexOf("gif", url.length - "gif".length /*or 3*/) !== -1 ||
                        url.indexOf("jpeg", url.length - "jpeg".length /*or 3*/) !== -1 ||
                            url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1;
                    }
                })
            .catch(error => {
                console.log(error)
                return message.reply("Embed creation cancelled. Please try again.");
            });
        })
    })
    .catch(error => {
        console.log(error)
        return message.reply("Embed creation cancelled. Please try again.");
    });
})
})
.catch(error => {
console.log(error)
return message.reply("Embed creation cancelled. Please try again.");
});
})
})
.catch(error => {
console.log(error)
return message.reply("Embed creation cancelled. Please try again.");
});
})
})
.catch(error => {
console.log(error)
return message.reply("Embed creation cancelled. Please try again.");
});
})
})
.catch(error => {
console.log(error)
return message.reply("Embed creation cancelled. Please try again.");
});
})


    }
}
