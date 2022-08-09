// Boolean 
console.log('Boolean data type');
console.log(true, false, 'true', 'false');

// methods can return booleans
let email2 = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let result3 = email2.includes('@');
console.log(result3);
result3 = names.includes('luigi');
console.log(result3);

let no = 25;

console.log(no == 25); //t
console.log(no == 30); //f
console.log(no != 30); //t
console.log(no > 20); //t
console.log(no < 20); //f
console.log(no <= 25); //t
console.log(no >= 25); //t

let na= 'shaun';

console.log(na== 'shaun'); //t
console.log(na== 'Shaun'); //f
console.log(na> 'crystal'); //t s is greater than
console.log(na> 'Shaun'); //t small s greater than S
console.log(na> 'Crystal'); // small s greater than C

console.log('_________________________');