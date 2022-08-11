console.log('if');
// if statements
let age = 25;

if(age > 20){
  console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3){
  console.log("that's a lot of ninjas!");
}

let password = 'p@ssword';

if(password.length >= 8){
  console.log('that password is long enough');
}

// else if statements
password = 'p@ssword123456';

if(password.length >= 12){
  console.log('that password is mighty strong');
} else if(password.length >= 8){
  console.log('that password is long enough');
} else {
  console.log('password should be at least 8 characters long');
}
console.log('_________________________');