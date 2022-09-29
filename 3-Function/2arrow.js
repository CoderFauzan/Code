console.log('Arrow');
const cArea = radius => 3.14 * radius**2;

const a = cArea(10);
console.log('area is:', a);

const hello = () => 'hello, world';

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(hello());
console.log(bill([10, 10, 10], 0.2));
console.log('_________________________');

console.log('function vs methods');
const name = 'mojo jojo';

// function

const greet = () => {
  return 'hello';
};

let resultOne = greet();
console.log(resultOne);

// method

let resultTwo = name.toUpperCase();
console.log(resultTwo);
console.log('_________________________');