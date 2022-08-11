console.log('While');
const names1 = ['shaun', 'mario', 'luigi'];
let i = 0;

while(i < 5){
  console.log('loop: ', i);
  i++;
}
i = 0;
while(i < names1.length){
  console.log(names1[i]);
  i++;
}

i = 8;
while(i > 5){
  console.log('loop: ', i);
  i--;
}

// do while loops
let r = 5;

do{
  console.log('val of r is: ', r);
  r++;
} while(i < 5);

console.log('_________________________');