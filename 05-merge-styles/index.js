const fs = require('fs');
const path = require ('path');
const stylesfiles = `${__dirname}/styles`
const finalresult = `${__dirname}/project-dist`;
let finalcss = [];
fs.promises.readdir(stylesfiles, {withFileTypes: true}).then(files => {
    for (const file of files) {
        if (file.isFile() && path.extname(file.name) === '.css') {
            finalcss.push(fs.promises.readFile(`${stylesfiles}/${file.name}`))
        }
    }
}).then(() => {
    Promise.all(finalcss).then(values => {
      fs.writeFile(`${finalresult}/bundle.css`, values.join('\n'), err => {
        // console.log(values)
        if (err) {
          console.error('Error!');
        }
      })
    })
})
  

