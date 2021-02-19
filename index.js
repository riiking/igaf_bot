const dotenv = require('dotenv');
dotenv.config();

const Discord = require('discord.js');
const client = new Discord.Client();

const {
  prefix
} = require('./config.json');

client.once('ready', () => {
  console.log('Ready!');
});
client.login(process.env.TOKEN);

client.on('message', message => {
  if (message.content === `${prefix}ping`) {

    message.channel.send('Pong.');
  } else if (message.content === `${prefix}beep`) {
    message.channel.send('Boop.');
  }
});
