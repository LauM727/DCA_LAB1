const ng = require('name-generate');
const cs = require('cowsayjs');

let n1=ng.first();
let l1=ng.last();

let n2=ng.first();
let l2=ng.last();

let fn1=n1+" "+l1;
let fn2=n2+" "+l2;

console.log(cs.moo(`mi nombre es ${fn1}`,{
    cow:"dragon"
}));

console.log(cs.moo(`y el mio es ${fn2}`,{
    cow:"skeleton"
}));