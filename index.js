const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjcwNjY5NzUyNzEyMTY3NDY1.Xi2pyA.GEMrdCd_q1ldf6kxS2Q1qLNcwow')