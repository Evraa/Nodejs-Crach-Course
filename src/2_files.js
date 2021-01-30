//import the node modular in charge
const fs = require('fs');

//reading files

//the callback function returns an error and data buffer
// if no errors, then buffer will be returned in this form:
//<Buffer 48 65 6c 6c 6f 20 45 76 72 61 6d 0a 0a 48 6f 70 65 20 79 6f 75 27 72 65 20 68 61 70 70 79>
// a buffer is a package of data that we've just read.
fs.readFile('../docs/test.txt', (err, data)=>{
    if (err){
        console.log(err);
    }
    console.log(data);
    console.log(data.toString());
});

console.log("Notice that this line is called way before readfile function is ended.");

//writing files

//if file name already exist, it will overwrite
//if it doesn't, it will create it

fs.writeFile('../docs/test_2.txt', 'Hello Evram, \nYes I am happy, \nthanks for asking', ()=>{
    console.log("File is written");
});


//directories

//notice the error that will appear the next time you run this.

// fs.mkdir('./test',(err)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log('folder created');
// });

//a better way of doing this
if (!fs.existsSync('./test')){
    fs.mkdir('./test',(err)=>{
        if (err){
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./test', (err)=> {
        console.log(err);
    });
}