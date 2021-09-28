const program = require('commander');
const {
  addCat,
  findCat,
  showCats
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

program.parse(process.argv);