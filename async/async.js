const fs = require('fs')
fs.writeFile("read.txt" , "Asynchronous Data" , (error)=>{
    console.log(error);
});