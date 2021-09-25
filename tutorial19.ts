// string templates

let user = "ross";

// in the js form
// let greet = "Welcome " + user + " to es2015 "

// in es2015 we can use backtick symbol `` instead of + symbol
// we cam also have muiltilines  without having to use string concactination
// and it gonna also take the spaces and tabs along with the new line
let greet = `Welcome 'single' "double" ${user} to es2015
                this is second line
                this is third line
                `
console.log(greet);
