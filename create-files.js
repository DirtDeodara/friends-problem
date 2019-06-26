const fs = require('fs');

// need to create new files that mimic the files on our friends computer
// then populate them with the coresponding data
// then we rename them with the data within

const nameArray = ['Dirt', 'Ash', 'Pepper', 'Nuggette', 'Drow', 'Lex'];

const randomName = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

randomName(nameArray);

const createFiles = (n, callback) => {
  for(let i = 0; i < n; i++) {
    const newRandomName = randomName(nameArray);
    fs.writeFile(`./friend-files/${i}.txt`, newRandomName, (err) => {
      if(err) {
        callback(err);
      }
    });
  }
};

createFiles(100);

module.exports = { randomName, createFiles };

