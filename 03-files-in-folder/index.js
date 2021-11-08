const fs = require('fs');
const path = require('path');
const folderPath = `${__dirname}/secret-folder`;
fs.promises.readdir(folderPath, {withFileTypes: true}).then(files => {
    for (const file of files) {
      if (file.isFile()) {
          fs.stat(`${folderPath}/${file.name}`, (err, stats) => {
              if (err) throw err;
              console.log(`${path.parse(file.name).name} - ${path.parse(file.name).ext.slice(1)} - ${stats.size/1024} kb`)
          })
      }
    }
}) 
