const fs = require("fs");

// // SYNCHRONOUSLY CREATES A FILE AND ADD TEXT TO IT
// fs.writeFileSync("read.txt", "welcome to this PC");
// fs.appendFileSync("read.txt", "New text"); // Appends new data to already existing file

// //FILE DATA READING
// const buf_data = fs.readFileSync("read.txt");
// // console.log(buf_data)

// const original_data = buf_data.toString();
// console.log(original_data);

// fs.renameSync("read.txt","readwrite.txt")
// fs.mkdirSync('NewFolder')
// fs.writeFileSync("NewFolder/challenge.txt","Challenge")
// fs.appendFileSync("NewFolder/challenge.txt"," Updated")
// const buf_data = fs.readFileSync("NewFolder/challenge.txt" , "utf-8")
// console.log(buf_data)
// console.log(buf_data.toString())

// fs.unlinkSync("NewFolder/challenge.txt")
fs.rmdirSync("NewFolder")
