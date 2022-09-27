
//---------------Loops------------------------------------------------------
        //For

for(let i = 0; i <= 10; i++ ){
    console.log(`For Loop Number: ${i} `);

}

        //While
let i = 0;
while(i < 10){
console.log(`While Loop Number: ${i} `)
i++;
}         


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

for(let i = 0; i < todos.length; i++ ){
    console.log(todos[i].text);
}

for(let todo of todos){
console.log(todo.text);
}

//------------------forEach, map, filter--------------------------------------

    // forEach

todos.forEach(function(todo){
console.log(todo.text)
});

    // map
const todoText = todos.map(function(todo){
return todo.text;
});

console.log(todoText);      // will return an array includes texts only

    // filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo) {     
    // this and below is optional, we chained       functions. They will return only text in that way
    return todo.text;
})

console.log(todoCompleted);


//---------------------------If-else-----------------------------------------

const x = 10;
const y = 14;

if(x === 10) {
    console.log('x is 10');
} else if (x > 10){
    console.log('x greater than 10');
}else {
    console.log('x is less than 10');
}

if(x > 5 || y < 10) {
    console.log('x is more than 10 OR y is less than 10');
}

if(x > 5 && y < 20) {
    console.log('x is more than 10 AND y is less than 20');
}


//-----------------------Switch----------------------------------------

const a = 15;

const color = a > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {
    case 'red' : 
        console.log('color is red');
        break;
    case 'blue' :
        console.log('color is blue');
        break;
    default:
        console.log('color is not blue or red');    
}

//--------------------Functions--------------------------------------------

function addNums(num1 = 1, num2 = 1){       // we set default values 
    console.log(num1 + num2);
}

addNums(5,22);

//---------------

function addNums2(num1, num2){
    return(num1 + num2);
}

console.log(addNums2(25,35));

//---------------

const addNums3 = num1 => num1 + 5;


console.log(addNums3(19));

//---------------

todos.forEach((todo) => console.log(todo));

//---------------


