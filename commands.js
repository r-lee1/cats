const program = require('commander');
const {
  addCat,
  findCat,
  showCats,
  updateCat,
  deleteCat
} = require('./index');

program
  .version('1.0.0')
  .description('Cat Management System');

program
  .command('add <name> <age> <color>')
  .description('Add a cat')
  .action((name, age, color) => {
    addCat(name, parseInt(age), color);
  });

program
  .command('find <id>')
  .description('Find a cat')
  .action((id) => {
    findCat(id);
  });

program
  .command('show cats')
  .description('List all the cats')
  .action(() => {
    showCats();
  });

program
  .command('update <id> <name> <age> <color>')
  .description('Update information on existing cat')
  .action((id, name, age, color) => {
    updateCat(parseInt(id), name, parseInt(age), color);
  });

program
  .command('delete <id>')
  .description('Delete a cat from the database')
  .action((id) => {
    deleteCat(parseInt(id));
  });

program.parse(process.argv);