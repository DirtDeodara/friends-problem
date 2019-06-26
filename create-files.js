const fs = require('fs');

// need to create new files that mimic the files on our friends computer
// then populate them with the coresponding data
// then we rename them with the data within

const nameArray = ['Dirt', 'Ash', 'Pepper', 'Nuggette', 'Drow', 'Lex'];

const randomName = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

randomName(nameArray);

const createFiles = (directory, n, callback) => {
  let writtenSoFar = 0;
  for(let i = 0; i < n; i++) {
    const newRandomName = randomName(nameArray);
    fs.writeFile(`${directory}/${i}.txt`, newRandomName, (err) => {
      if(err) return callback(err);
      writtenSoFar += 1;

      if(writtenSoFar === n) callback();
    });
  }
};

// createFiles(2);

module.exports = { randomName, createFiles };

