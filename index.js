const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 'Kill yourself') {
    msg.reply('No, I will kim them.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Light') {
    msg.reply('Thats right. I am Light Yagami.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Light is Kira!') {
    msg.reply('That is right.. I am Kira.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Are you kira?') {
    msg.reply('NO! I am not Kira! Someone is setting me up!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Who is god?') {
    msg.reply('I AM THE GOD OF THE NEW WORLD!');
  }
});

client.login(process.env.BOT_TOKEN);
