const Tags = require('db/tags');

async function execute(message, args) {

  const tagName = args.shift();

  // equivalent to: DELETE from tags WHERE name = ?;
  const rowCount = await Tags.destroy({
    where: {
      name: tagName
    }
  });
  if (!rowCount) return message.reply('That tag did not exist.');

  return message.reply('Tag deleted.');
  message.channel.send(`List of tags: ${tagString}`);
}

module.exports = {
  name: 'removetags',
  description: 'remove tags',
  cooldown: 5,
  alsiases: ['deletetag'],
  execute
}
