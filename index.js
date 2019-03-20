console.log("Hello World!");

let name = 'bob';
console.log(`Hello ${name}`);

module.exports = {
    sayHi: () => { return 'Hello World'; },
    sayHiToUser: (name) => { return `Hello ${name}`; }
};