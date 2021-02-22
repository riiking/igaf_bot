async function execute(message, args) {
  const tagList = await Tags.findAll({
    attributes: ['name']
  });
  const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
  return message.channel.send(`List of tags: ${tagString}`);
}

module.exports = {
  name: 'showtags',
  description: 'show tags',
  cooldown: 5,
  execute
}
