if (false) {
var example = 5;        //variabe hoisting
}

console.log(example)    // no error

/* what javascript sees
var exmaple;

if (false) {
    example = 5;
}

*/

if (false) {
    let example = 5;    // no error
}

const example = 5;
example = 5;             // error
console.log(example)

const example1 = [];
example.push(5);        // no error
console.log(example1)

const example2 = [];
example = 3;
console.log(example2)
