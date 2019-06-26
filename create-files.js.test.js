
const fs = require('fs');

const { createFiles } = require('./create-files');

describe('tests create-files function', () => {
  it('creates number of files', done => {
    createFiles(10, err => {
      expect(err).toBeFalsy();

      fs.readdir('./friend-files', { encoding: 'utf8' }, (err, files) => {
        expect(files).toHaveLength(10);
        done();
      });
    });
  }); 
});
