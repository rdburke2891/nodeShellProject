//Import Files
const pwd = require('./pwd')


console.log(pwd)
// Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line

process.stdin.on('data', (data) =>{
    const cmd = data.toString().trim();
    module.export = cmd
    pwd(cmd)
   // if (cmd === 'pwd') {pwd()}
});



