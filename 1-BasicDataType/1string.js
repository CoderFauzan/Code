// Data type
console.log('String data type');
// String
console.log('hello,world');
let email = 'a@email.com'
console.log(email);
// Concat
let fname= 'first';
let sname= 'second';
let fullname = fname + ' ' + sname;
console.log(fullname);
// get character
console.log(fullname[3]);
// string length
console.log(fullname.length);
// stringh methods
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
let index = fullname.indexOf('s');
console.log(index);
let lindex = fullname.lastIndexOf('s');
console.log(lindex);
console.log(fullname.slice(0,7)); // from 0 to 7 position
console.log(fullname.substr(3,7)); // from 3 to next 7 position
console.log(fullname.replace('s', 'n')); // will replace the first s instance with alphabet n

// template strings
const title = 'Best reads of 2022';
const author = 'FM';
const likes1 = 30;

// concatenation way

let result1 = 'The blog called ' + title + ' by ' + author + ' has ' + likes1 + ' likes';
console.log(result1);
result1 = `The blog called ${title} by ${author} has ${likes1} likes`;
console.log(result1);
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes1} likes</span>
`;

console.log(html);
console.log('_________________________');