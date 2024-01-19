// complete this js code
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
}

Employee.prototype.constructor = Person;
Employee.prototype = Person.prototype;

function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}
Employee.prototype.jobGreet = function(){
    return  `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
}
let emp = new Employee("arvind", 26, "SDE");
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
