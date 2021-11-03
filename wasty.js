const {
  tokens,
  voice_wasty,
  text_wasty,
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
      message.author.id == "778758782121541632" &&
      message.content.includes("cu") // Buraya yazdığın şeyler ile tokenleri konuşturabiliyorsun
    ) {
      setTimeout(() => {
        message.channel.send("ananın amcu"); //tokenlerin diyeceği söz
      }, time[Math.floor(Math.random() * time.length)]);
    }
  });

  client.on("ready", () => {
    console.log(client.user.tag + " hazırım!");
    client.guilds
      .get(your_server)
      .channels.get(voice_wasty)
      .join();
  });
});
