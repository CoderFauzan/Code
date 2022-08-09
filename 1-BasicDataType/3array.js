//Array
console.log('Array data type');
let ninjas = ['abc', 'def', 'chun-li'];
console.log(ninjas[0]);
ninjas[1] = 'ken';
console.log(ninjas[1]);
let random = ['diamond', 'crystal', 30, 20];
console.log(random);
console.log(ninjas.length)
let result2 = ninjas.join('*');
console.log(result2);
result2 = ninjas.indexOf('chun-li');
console.log(result2);
result2 = ninjas.concat(['ken', 'crystal']);
console.log(result2);
result2 = ninjas.push('kenny');
console.log(result2);
result2 = ninjas.pop();
console.log(result2);
console.log(ninjas);

console.log('_________________________');