module.exports = {
	name: 'ping',
	description: 'Ping!',
  cooldown: 5,
  aliases: ['pong'],
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
