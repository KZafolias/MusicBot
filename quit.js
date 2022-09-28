const { SlashCommandsBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandsBuilder().setName("quit").setDescription("stops the bot and clears the queue"),
    run: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guildId)
        
        if (!queue) return await interaction.editReply(`invalid page. There are only a total of ${totalPages} pages of songs`)

        queue.destroy()
        await interaction.editReply("bye")
    },
}