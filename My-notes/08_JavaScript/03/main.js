//---------------Constructor Function-------------------------------

function Person(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dateOfBirth);

    // this.getBirthYear = function(){
    //     return this.dateOfBirth.getFullYear();
    // }

    this.getFullName = function(){
        return `Full name: ${this.firstName} ${this.lastName}`
    }
}
// Prototype
Person.prototype.getBirthYear = function () {
    return this.dateOfBirth.getFullYear();
}
// In that way, we removed this function from the body of Person function and it will not appear when we call a person. However, if we want to reach out to data by using this removed function, we will be able to. Because we have placed it into prototype section --can be seen on the console.




// Instantiate object

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Marry', 'Smith', '1-8-1996');
const person3 = new Person('Alex', 'William', '9-5-1930');


console.log(person2.dateOfBirth.getFullYear());

console.log(person3.getBirthYear());
console.log(person2.getFullName());


console.log(person2);
console.log(person2.getBirthYear())



//---------------Class--------------------------------------------------

class Person1 {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    getBirthYear() {
        return this.dateOfBirth.getFullYear();
    }

    getFullName(){
        return `Full name: ${this.firstName} ${this.lastName}`
    }
}

//---------------DOM--------------------------------------------------
    //this topic will be covered later
