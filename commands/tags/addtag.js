const Tags = require('../db/tags.js');

async function execute(message, args) {
  const splitArgs = args;
  const tagName = args.shift();
  const tagDescription = args.join(' ');

  try {
    // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
    const tag = await Tags.create({
      name: tagName,
      description: tagDescription,
      username: message.author.username,
    });
    return message.reply(`Tag ${tag.name} added.`);
  } catch (e) {
    if (e.name === 'SequelizeUniqueConstraintError') {
      return message.reply('That tag already exists.');
    }
    return message.reply('Something went wrong with adding a tag.');
  }
}


module.exports = {
  name: 'addtag',
  description: 'add tag',
  cooldown: 5,
  aliases: ['newtag'],
  execute
};
