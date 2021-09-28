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
  .command('find <name>')
  .description('Find a cat')
  .action((name) => {
    findCat(name);
  });

program
  .command('show')
  .description('List all the cats')
  .action(() => {
    showCats();
  });

program
  .command('update <name> <newName> <age> <color>')
  .description('Update information on existing cat')
  .action((name, newName, age, color) => {
    updateCat(name, newName, age, color);
  });

program
  .command('delete <name>')
  .description('Delete a cat from the database')
  .action((name) => {
    deleteCat(name);
  });

program.parse(process.argv);