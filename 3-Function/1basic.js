console.log('Function Declaration');
// function declaration
function g() {
    console.log('hello there');
}

// function expression, store function in a variable
const say = function () {
    console.log('good day!');
};

g();
say();
console.log('_________________________');

console.log('arguments & parameters');
// arguments & parameters

const speak = function (name = 'name', time = 'night') {
    console.log(`good ${time}, ${name}!`);
};

speak('abc', 'morning');
speak();
speak('fm');
console.log('_________________________');

console.log('Returns some value');
const calcArea = function (radius) {
    let area = 3.14 * radius ** 2;
    return area;
}

const area = calcArea(5);
console.log('area is:', area);
console.log('_________________________');