const Tags = require('./db/tags.js');

async function execute(message, args) {

  const tagName = args.shift();


  // equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
  const tag = await Tags.findOne({
    where: {
      name: tagName
    }
  });
  if (tag) {
    return message.channel.send(`${tagName} was created by ${tag.username} at ${tag.createdAt} and has been used ${tag.usage_count} times.`);
  }
  return message.reply(`Could not find tag: ${tagName}`);
}

module.exports = {
  name: 'taginfo',
  description: 'tag info',
  cooldown: 5,
  execute
}
