const exportCmd = require('./bash')
module.exports = function (cmd) {
  if(cmd === "pwd"){
    process.stdout.write(process.cwd());
    //remove the newline
    process.stdout.write('\nprompt >');
  }
}

