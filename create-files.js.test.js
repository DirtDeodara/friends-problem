
const fs = require('fs');

const { createFiles, randomName } = require('./create-files');

describe('tests create-files function', () => {
  beforeEach(done => {
    fs.mkdir('./friend-files', done);
  });
  
  afterEach(done => {
    fs.readdir('./friend-files', (err, files) => {
      if(files.length === 0) done();
      let deletedSoFar = 0;
      files.forEach(file => {
        fs.unlink(`./friend-files/${file}`, err => {
          if(err) return done(err);
          deletedSoFar += 1;
          if(deletedSoFar === files.length) done();
        });
      });
    });
  });

  it('can get a random name', () => {
    const nameArray = ['Dirt', 'Ash', 'Pepper', 'Nuggette', 'Drow', 'Lex'];
    const name = randomName(nameArray);
    expect(name).toEqual(expect.any(String));
  });

  it('creates number of files', done => {
    createFiles('./friend-files', 2, err => {
      expect(err).toBeFalsy();

      fs.readdir('./friend-files', { encoding: 'utf8' }, (err, files) => {
        expect(files).toHaveLength(2);
        done();
      });
    });
  }); 
});
