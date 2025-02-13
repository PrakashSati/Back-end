const fs = require('fs');

// ----------------------------------------------------------------//

// fs.readFile(file, [options], callback)

// fs.readFile('./letter.txt',{encoding: "utf-8"},(error, data) => {
//     console.log(data);
// });

// console.log('Reading file...');

// ----------------------------------------------------------------//

// fs.writeFile(file, data, callback )  // overwrite, create new file

// fs.writeFile("./test.txt", "This is a test",  (error)=>{
//         if(error){
//             console.log("Error writing file");
//         }else{
//             console.log("File written successfully");
//         }
// })

// ----------------------------------------------------------------//

// fs.appendFile(file, data, callback )  // append to file , it doesn't overwrite it will add more content 

let content = "\nthis is a new file\n"
fs.appendFile("./letter.txt", content,  (error)=>{
    if(error){
        console.log("Error writing file");
    }else{
        console.log("File written successfully");
    }
}) ;

console.log("hii")