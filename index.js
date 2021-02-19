const dotenv = require('dotenv');
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
  prefix
} = require('./config.json');

dotenv.config();

client.once('ready', () => {
  console.log('Ready!');
});
client.login(process.env.TOKEN);

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', message => {
  if (message.content === `${prefix}ping`) {

    message.channel.send('Pong.');
  } else if (message.content === `${prefix}beep`) {
    message.channel.send('Boop.');
  }
});
