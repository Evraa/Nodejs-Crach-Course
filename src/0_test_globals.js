// Write down some js code
var name = "Evram";
var numb = 4;
console.log(name+' '+numb);

const greet = (name) => {
    console.log(`hello, ${name}`);
};

greet('Evram');
greet('Ev');

//Know your globals
// console.log(global); //uncomment if u want to..

//showing how to handle global functions in nodejs
//similar to js (window..)
//allowing the use of many useful functionalities

//in this example we print 'interval' every one second
//and after 3 seconds, time is up and interval is cleared.

setTimeout(()=> {
    console.log('TIMEOUT');
    clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
    console.log('interval');
}, 1000);

//logging information
console.log(__dirname);
console.log(__filename);