const fs = require('fs');

const readStream = fs.createReadStream('../docs/large.txt', {encoding:'utf8'});
const writeStream = fs.createWriteStream('../docs/large2.txt');

//an event listener
// readStream.on('data', (chunk) =>{
//     console.log("--------------------- NEW CHUNK ---------------------");
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });


//easier way: pipe

readStream.pipe(writeStream);
