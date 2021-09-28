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
        console.log('Successfully added record');
        showCats();
      }
    });
};

// Find a Cat
const findCat = (cname) => {
    const cats = getCats();
    const cat = cats.find(({name}) => name === cname);
    if (cat === undefined) {
      console.log(`No cat with the name ${cname} exists`);
      return;
    } else {
      console.log(cat);
      return cat;
    }
};

// Update a Cat
const updateCat = (cname, newName, age, color) => {
  const cats = getCats();
  const catIdx = cats.findIndex(({name}) => name === cname);
  if (catIdx === -1) {
    console.log(`No cat with the name ${cname} exists`);
    return;
  } else {
    cats[catIdx].name = newName;
    cats[catIdx].age = age;
    cats[catIdx].color = color;
  }

  fs.writeFile('./cats.json', JSON.stringify(cats, null, 4), err => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully updated record');
    }
  });
};

// Delete a cat
const deleteCat = (cname) => {
  const cats = getCats();
  const catIdx = cats.findIndex(({name}) => name === cname);
  if (catIdx === -1) {
    console.log(`No cat with the name ${cname} exists`);
    return;
  } else {
    cats.splice(catIdx,1);
  }

  fs.writeFile('./cats.json', JSON.stringify(cats, null, 4), err => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully deleted record');
    }
  });
};

// Export
module.exports = {
  showCats,
  addCat,
  findCat,
  updateCat,
  deleteCat
};
