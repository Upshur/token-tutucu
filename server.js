const {
  tokens,
  voice_channel,
  text_channel,
  your_server
} = require("./config.js");
const time = [];
const Discord = require("discord.js");
tokens.forEach(token => {
  const client = new Discord.Client();
  client.login(token);

  client.on("message", async message => {
    if (message.guild.id != your_server) return;
    if (
      message.author.id == "824685479323631626" &&
      message.content.includes("Selam")
    ) {
      setTimeout(() => {
        message.channel.send("SALAM");
      }, time[Math.floor(Math.random() * time.length)]);
    }
  });

  client.on("ready", () => {
    console.log(client.user.tag + " is ready!");
    client.guilds
      .get(your_server)
      .channels.get(voice_channel)
      .join();
  });
});
