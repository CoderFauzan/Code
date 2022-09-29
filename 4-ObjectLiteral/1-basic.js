console.log('Creating object Literal');
// object literals

let user = {
    name: 'fm',
    age: 24,
    email: 'fm@thenetninja.co.in',
    location: 'Delhi',
    blogs: ['Learn JS', 'React  js'],
    Arrayblogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
      ],
    //object methods
    login: function () {
        console.log('the user logged in');
    },
    logout: function () {
        console.log('the user logged out');
    },
    logBlogs: function () {
        // access the blogs here
        console.log(this.blogs);
        console.log('this user has written these blogs:');
        // this keyword
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    },
    logBlogs1(){
        // access the blogs here
        console.log(this);
        console.log('this user has written these blogs:');
        this.Arrayblogs.forEach(blog => {
          console.log(`${blog.title} has ${blog.likes} likes`);
        })
      }
};

console.log(user);
console.log(user.age);

user.age = 35;
console.log(user.age);

console.log(user['name']);
user['name'] = 'fmz';
console.log('New user name :', user['name']);

console.log(typeof user);
//access methods
user.login();
user.logout();
user.logBlogs();
user.logBlogs1();
console.log('_________________________');

console.log('Math Object');
// Math object

console.log('Msth',Math);
console.log('Pi value:',Math.PI);
console.log('E value:',Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area)); // gives 7 as the the number before .
console.log(Math.ceil(area)); // opp to floor
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));
console.log('_________________________');

console.log('Primitive vs Reference');
// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

userOne = { name: 'ryu', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);
console.log('_________________________');