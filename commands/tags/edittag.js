async function execute(message, args) {
  const splitArgs = commandArgs.split(' ');
  const tagName = splitArgs.shift();
  const tagDescription = splitArgs.join(' ');

  // equivalent to: UPDATE tags (description) values (?) WHERE name='?';
  const affectedRows = await Tags.update({
    description: tagDescription
  }, {
    where: {
      name: tagName
    }
  });
  if (affectedRows > 0) {
    return message.reply(`Tag ${tagName} was edited.`);
  }
  return message.reply(`Could not find a tag with name ${tagName}.`);
};

module.exports = {
  name: 'edittag',
  description: 'edit tag',
  cooldown: 5,
  execute
};
