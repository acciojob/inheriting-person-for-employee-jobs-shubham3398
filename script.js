function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    let str = `Hello, my name is ${this.name}, I am ${this.age} years old.`;
    console.log(str);
}

function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Corrected this line

Employee.prototype.jobGreet = function () {
    let str = `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
    console.log(str);
}

let emp = new Employee("arvind", 26, "SDE");

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

