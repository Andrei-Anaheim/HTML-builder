const fs = require('fs');
const readline = require('readline');
const outputfile = fs.createWriteStream(`${__dirname}/output.txt`);
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
console.log('What is your name?')
rl.on ('line', line => {
    outputfile.write(line);
    if (line.toString().toLowerCase() === 'exit') {
        rl.close();
    }
})

rl.on('close',()=> {
    outputfile.end();
    console.log('Your name was recorded. Bye!');
})
rl.on('SIGINT', () => {
    rl.close();
})