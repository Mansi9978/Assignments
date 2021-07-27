var readline = require('readline');

var a=readline.createInterface(process.stdin,process.stdout);
a.question("what your name",(name)=>{
    console.log(name);
    a.close();
});