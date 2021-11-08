const fs = require('fs');
const originalFolder = `${__dirname}/files`
const newFolder = `${__dirname}/files-copy`;
let copy = (src, dest) => {
    fs.promises.readdir(src, {withFileTypes: true}).then(files => {
        for (const file of files) {
          if (file.isFile()) {
              fs.promises.copyFile(`${src}/${file.name}`, `${dest}/${file.name}`);
              console.log(`${file.name} copied`)
          } else {
              console.log(`${file.name} failed to copy`);
          }
        }
    }).catch(err => {
        console.log(err);
    })
}
fs.promises.mkdir(newFolder, {recursive: true});
copy(originalFolder, newFolder);
  

