const fs = require('fs');

// Fetch all cats
const getCats = () => {
  try {
    const data = fs.readFileSync('./cats.json', 'utf8');

    // parse JSON string to JSON object
    const cats = JSON.parse(data);
    return cats;

  } catch (err) {
      console.log(`Error reading file ${err}`);
  }
};

// List all cats
const showCats = () => {
  const cats = getCats();
  console.log(cats);
};

// Add Cat
const addCat = (name, age, color) => {

    const cats = getCats();

    cats.push({
      name,
      age,
      color
    });

    fs.writeFile('./cats.json', JSON.stringify(cats, null, 4), err => {
      if (err) {
        console.log('Error writing file', err);
      } else {
        console.log('Successfully wrote to file');
        showCats();
      }
    });
};


// Find a Cat
const findCat = (str) => {
    const cats = getCats();
    const cat = cats.find(({name}) => name === str);
    if (cat === undefined) {
      console.log(`No cat with the name ${str} exists`);
    } else {
      console.log(cat);
      return cat;
    }
};

// Export
module.exports = {
  showCats,
  addCat,
  findCat
};
