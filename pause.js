const { SlashCommandsBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandsBuilder().setName("pause").setDescription("pauses the music"),
    run: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guildId)
        
        if (!queue) return await interaction.editReply(`invalid page. There are only a total of ${totalPages} pages of songs`)

        queue.setPaused(true)
        await interaction.editReply("music has been paused! use `/resume` to resume the music")
    },
}