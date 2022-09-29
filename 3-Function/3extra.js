console.log('For each and call back');

const my = (cbf) => {
    let v=50;
    cbf(v);
};

my(function(v){
    console.log('value is',v);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(person => {
    console.log(`hello ${person}`);
});

people.forEach(logPerson);
console.log('_________________________');
const ul = document.querySelector('.people');

people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
  // create html template for each person
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

console.log('_________________________');