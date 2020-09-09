const { DiscordAPIError } = require("discord.js");

exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("There is nothing playing.");
    const queue1 = new Discord.MessageEmbed()
      .setTitle('Current Song and Queue')
      .addField(`${serverQueue.songs.map((song) => `**-** ${song.title}`).join("\n")}`)
      .addField('__**Now Playing**__', `${serverQueue.songs[0].title}`)
msg.channel.send(queue1)
}
