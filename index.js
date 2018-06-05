const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 'Kill yourself') {
    msg.reply('No, I will kim them.');
  }
});

client.on('message', msg => {
  if (msg.content === 'キルあなた自身') {
    msg.reply('いいえ、私はそれらを殺すでしょう。');
  }
});

client.on('message', msg => {
  if (msg.content === 'Light') {
    msg.reply('Thats right. I am Light Yagami.');
  }
});

client.on('message', msg => {
  if (msg.content === 'ライト') {
    msg.reply('それは正しい。 私は 夜神 月 ライト');
  }
});

client.on('message', msg => {
  if (msg.content === 'Light is Kira!') {
    msg.reply('That is right.. I am Kira.');
  }
});

client.on('message', msg => {
  if (msg.content === 'ライト は キラ!') {
    msg.reply('それは正しい.. 私は キラ.');
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


client.on('message', msg => {
  if (msg.content === 'Talk Light') {
    msg.channel.send('/tts I WILL BE GOD OF THE NEW WORLD');
  }
});
client.login(process.env.BOT_TOKEN);
