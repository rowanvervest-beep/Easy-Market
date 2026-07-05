require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.on("ready", () => {
  console.log(`Bot is online as ${client.user.tag}`);
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(c => c.name === "welcome");
  if (!channel) return;

  channel.send(`🎉 Everyone welcome **${member.user.username}**! We now have **${member.guild.memberCount}** members.`);
});

client.login(process.env.TOKEN);
