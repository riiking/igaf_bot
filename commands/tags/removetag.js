module.exports = {
  name: 'removetags',
  description: 'remove tags',
  cooldown: 5,
  alsiases: ['deletetag'],
  execute(message, args) {
    const tagName = commandArgs;
    // equivalent to: DELETE from tags WHERE name = ?;
    const rowCount = await Tags.destroy({
      where: {
        name: tagName
      }
    });
    if (!rowCount) return message.reply('That tag did not exist.');

    return message.reply('Tag deleted.');
    message.channel.send(`List of tags: ${tagString}`);
  };
}
