console.log('For loop');
for(let j = 0; j < 5; j++){
  console.log('loop: ', j);
}
const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}
console.log('_________________________');