console.log('Logic');
password = 'p@ss12';

if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
  console.log('that password is strong enough');
} else {
  console.log('that password is not strong enough');
}

const user = false;

if(!user){
  // do something
  console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);
console.log('_________________________');