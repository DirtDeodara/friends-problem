const fs = require('fs');


const readDirectory = (directory, callback) => {
  fs.readdir(directory, (err, files) => {
    callback(err, files);
  });
};

const rename = (path, newPath, callback) => {
  fs.rename(path, newPath, err => {
    callback(err);
  });
};

const getModifiedTime = (path, callback) => {
  fs.stat(path, (err, stats) => {
    callback(err, stats && stats.mtime.toISOString());
  });
};

// const renameFiles = () => {
//   for(let i = 0; i < 100; i++) {
//     fs.readFile(`/friend-files/${i}.txt`, { encoding: 'utf8' }, (err, data) => {
//       if(err) console.error(err);

//       fs.rename(`./friend-files/${i}.txt`, `./friend-files/${data}-${i}.txt`, err => {
//         if(err) console.error(err);
//       });
//     });
//   }
// };


module.exports = { readDirectory, rename, getModifiedTime };
