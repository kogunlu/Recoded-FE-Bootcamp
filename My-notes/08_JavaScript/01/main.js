// console.log('Hello World');
// console.warn('This is a warning');

// var-not used and preffered
//let, const

let age = 30;
age = 31;
console.log(age);

const age1 = 45;   // the value can not re-assigned with const

let score;

score = 10;
console.log(score);

//---------------------------------------------------------------------------

// String, Number, Boolean, null, undefined, Symbol

const name = 'Kuday';
const ageKuday = 26;
const rating = 4.5;
const isCool = true;
const x = null;

const y = undefined;
let z;   // undefined as well

console.log(typeof z);

// Concatenation
console.log('My name is ' + name + ' and I am ' + ageKuday)

// Template String  
// the sign of `` created with ' option + comma + comma '
const hello = `My name is ${name} and I am ${ageKuday}`;
console.log(hello);

const s = 'Hello World';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const k = 'technology, computers, it, code';
console.log(k.split(', '));
// this will catch each value by detecting comma and space combined


//---------------------------------------------------------------------------
    // Arrays - variables that hold multiple values

    const numbers = new Array(1,2,3,4,5);
    console.log(numbers);


    const fruits = ['apples', 'oranges', 'pears', 10, true];

    fruits[5] = 'grapes';
    fruits.push('mangos');  // to add value at the end of array
    fruits.unshift('strawberries');  // to add value at the beginnig of array

    fruits.pop();   // removes the last item in the array

    console.log(Array.isArray(fruits));
    console.log(fruits.indexOf('oranges'));     // index value of orange

    console.log(fruits);

//---------------------------------------------------------------------------

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}


console.log(person.firstName, person.lastName, person.address);

console.log(person.hobbies[1]);
console.log(person.address.city);


const { firstName, lastName, address: {city} } = person;
console.log(city);

person.email = 'john@gmail.com';
console.log(person.email);


//---------------------------------------------------------------------------

const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
 
console.log(todos[1].text);     // will print "Meeting with boss"



const todoJSON = JSON.stringify(todos);
console.log(todoJSON);



