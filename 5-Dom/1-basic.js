console.log('Query Selector');
// const para1 = document.querySelector('p');
// const para2 = document.querySelector('.error');
// const para3 = document.querySelector('div.error');

// console.log(para1);
// console.log(para2);
// console.log(para3);

// // query multiple elements at once
// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// console.log(paras, errors);
// console.log(paras[1], errors[0]);
console.log('_________________________');

// // get an element by ID
// const title= document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errors1 = document.getElementsByClassName('error');
// console.log(errors1);
// console.log(errors1[0]);

// // get elements by their tag name
// const paras1 = document.getElementsByTagName('p');
// console.log(paras1);
// console.log(paras1[1]);
console.log('_________________________');

console.log('Adding and changing page content');

// console.log(para1.innerText);
// para1.innerText = 'ninjas are awesome';

// paras.forEach(p => {
//   console.log(p.innerText);
//   p.innerText = 'new text!';
// });


// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is a new h2</h2>';

// content.innerHTML += '<h2>this is an h2 added to the content</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });
console.log('_________________________');

console.log('Adding and changing page content');
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.google.com');
// link.textContent = 'The Net Ninja webiste';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: pink');
console.log('_________________________');

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');
console.log('Changing CSS style');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

console.log('_________________________');

console.log('Adding REMOVING class');

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//   if(p.textContent.includes('error')){
//     p.classList.add('error');
//   } else if(p.textContent.includes('success')) {
//     p.classList.add('success');
//   }
// });
console.log('_________________________');
console.log('Parent child siblings');
// const article = document.querySelector('article');

// // console.log(article.children);
// // console.log(Array.from(article.children));
// // console.log(article.children);

// Array.from(article.children).forEach(child => {
//   child.classList.add('article-element');
// });

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// // chaining
// console.log(title.nextElementSibling.parentElement.children);

console.log('_________________________');

console.log('Event basic');

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     // console.log('item clicked');
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(item);
//     e.target.style.textDecoration = 'line-through';
//   });
// });
console.log('_________________________');

console.log('Create Remove elements');

// const ul = document.querySelector('ul');
// // ul.remove();

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   const li = document.createElement('li');
//   li.textContent = 'something new to do';
//   //ul.appendChild(li);
//   ul.prepend(li);
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     // e.target.style.textDecoration = 'line-through';
//     e.target.remove();
//   });
// });


console.log('_________________________');

console.log('Event BUBBLING & DELEGATION');
const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.appendChild(li);  
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

ul.addEventListener('click', e => {
  // console.log('event in UL');
  console.log(e.target, e);
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});
console.log('_________________________');

console.log('More dom elemets');
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('OI! my content is copyrighted!!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);
});
console.log('_________________________');