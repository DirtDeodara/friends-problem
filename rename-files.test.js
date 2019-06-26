
const fs = require('fs');
const { readDirectory, rename , getModifiedTime } = require('./rename-files');
const { createFiles } = require('./create-files');

describe('rename functions', () => {
  beforeEach(done => {
    createFiles('./friend-files', 2, done);
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

  it('gets all files in target directory', done => {
    readDirectory('./friend-files', (err, files) => {
      expect(files).toHaveLength(2);
      done();
    });
  });

  it('can rename a file given path and new path', done => {
    fs.readFile('./friend-files/0.txt', { encoding: 'utf8' }, (err, oldFileContent) => {
      rename('./friend-files/0.txt', './friend-files/new-name.txt', err => {
        expect(err).toBeFalsy();

        fs.readFile('./friend-files/new-name.txt', { encoding: 'utf8' }, (err, newFileContent) => {
          expect(err).toBeFalsy();

          expect(newFileContent).toEqual(oldFileContent);
          done();
        });
      });
    });
  });

  it('gets the last modified date of a certain file', done => {
    getModifiedTime('./friend-files/0.txt', (err, modifiedTime) => {
      expect(err).toBeFalsy();

      expect(modifiedTime).toEqual(expect.any(String));
      done();
    });
  });


});
