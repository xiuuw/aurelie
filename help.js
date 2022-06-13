const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
    name: 'help',
    description: 'help cmd!',
    async execute(message, args) {
      
      const embed = new MessageEmbed()
.setColor('#2f3136')
.setDescription("> Select a category to see its functions/commands!")

  const tickets = new MessageEmbed()
  .setColor('#2f3136')
  .setTitle("<a:ablckheartt:973868649737760778> Tickets")
  .setDescription("ㆍ`apanel` : Set up the mass panel\nㆍ`apanel2` : Set up the link panel")

  const modmail = new MessageEmbed()
  .setColor('#2f3136')
  .setTitle("<a:ablckheartt:973868649737760778> Modmail")
  .setDescription("ㆍ`acontact` : Contact a member\nDM <@979761065934065725> to open a ticket!")

  const misc = new MessageEmbed()
  .setColor('#2f3136')
  .setTitle('<a:ablckheartt:973868649737760778> Misc.')
  .setDescription("ㆍ`aembed` : Begin embed creation \nㆍ`arename` : Rename a channel\nㆍ`ablacklist` : Ban a user\nㆍ`aplaintext` : Send a message in plain text")

  
  const components = (state) => [
    new MessageActionRow().addComponents(
        new MessageSelectMenu()
        .setCustomId("help-menu")
        .setPlaceholder("Select a category!")
        .setDisabled(state)
        .addOptions([{
                label: `Tickets`,
                value: `tickets`,
                description: `Ticket system`
            },
            {
                label: `Modmail`,
                value: `modmail`,
                description: `Modmail system`
            },
            {
                label: `Misc.`,
                value: `misc`,
                description: `Misc. commands`
            }

                     
        ])
    ),
];

const initialMessage = await message.reply({ embeds: [embed], components: components(false) });

const filter = (interaction) => interaction.user.id === message.author.id;

        const collector = message.channel.createMessageComponentCollector(
            {
                filter,
                componentType: "SELECT_MENU",
                idle: 300000,
                dispose: true,
            });

        collector.on('collect', (interaction) => {
            if (interaction.values[0] === "tickets") {
                interaction.update({ embeds: [tickets], components: components(false) }).catch((e) => {});
            } else if (interaction.values[0] === "modmail") {
                interaction.update({ embeds: [modmail], components: components(false) }).catch((e) => {});
            } else if (interaction.values[0] === "misc") {
                interaction.update({ embeds: [misc], components: components(false) }).catch((e) => {});
            }
        
        
        
        });


      
        collector.on("end", (collected, reason) => {
            if (reason == "time") {
                initialMessage.edit({
                   content: "This message is now inactive!",
                   components: [],
                });
             }
        });
      
    }
}
