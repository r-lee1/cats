const fs = require('fs');
//TODO: Implement database program, e.g, MongoDB


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

// Generate ID for new record
const generateId = () => {
  const cats = getCats();
  if (cats.length === 0) {
    return 1;
  } else {
    const lastId = cats[cats.length - 1].id;
    return lastId + 1;
  }
};

// Add Cat
// TODO: Input validation
const addCat = (name, age, color) => {
    const cats = getCats();
    const id = generateId();

    cats.push({
      id,
      name,
      age,
      color
    });

    fs.writeFile('./cats.json', JSON.stringify(cats, null, 4), err => {
      if (err) {
        console.log('Error writing file', err);
      } else {
        console.log('Successfully added record');
      }
    });
};

// Find a Cat
// TODO: Search by different fields
const findCat = (cid) => {
    const cats = getCats();
    const cat = cats.find(({id}) => id === cid);
    if (cat === undefined) {
      console.log(`No cat with the id ${cid} exists`);
      return;
    } else {
      console.log(cat);
    }
};

// Update a Cat
const updateCat = (cid, name, age, color) => {
  const cats = getCats();
  const catIdx = cats.findIndex(({id}) => id === cid);
  if (catIdx === -1) {
    console.log(`No cat with the id ${cid} exists`);
    return;
  } else {
    cats[catIdx].name = name;
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
const deleteCat = (cid) => {
  const cats = getCats();
  const catIdx = cats.findIndex(({id}) => id === cid);
  if (catIdx === -1) {
    console.log(`No cat with the id ${cid} exists`);
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
