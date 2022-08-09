// comparison
console.log('Loose and strict Comparison');
let page = 25;

// loose comparison (different types can still be equal)

console.log(page == 25); //t
console.log(page == '25'); //t
console.log(page != 25); //f
console.log(page != '25'); //f

// strict comparison (different types cannot be equal) [same value and type ===]

console.log(page === 25); //t
console.log(page === '25'); //f
console.log(page !== 25); //f
console.log(page !== '25'); //t


// type conversion
let score = '100';
console.log(score + 1); // 1001 bcoz of concat
score = Number(score);
console.log(score + 1); // 101
console.log(typeof score);

let result4 = Number('hello');
console.log(result4, typeof result4); //nan number
result4 = String(50);
console.log(result4, typeof result4); //50 string
result4 = Boolean(100);
console.log(result4, typeof result4); // t b +ve -ve no true
result4 = Boolean(0);
console.log(result4, typeof result4); // f b 0 is false
result4 = Boolean('0');
console.log(result4, typeof result4); // string are true
result4 = Boolean('');
console.log(result4, typeof result4); // empty string is false
console.log('_________________________');