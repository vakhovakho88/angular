var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//primitives
var ageOfStudent;
ageOfStudent = 20;
var username;
username = 'Vakho';
var isStudent;
isStudent = false;
// more complex types
//create string array
var hobbies;
hobbies = ['Sports', 'Cooking'];
// same as: let variableWithAnyType: any
// this is same as var keyword in c#
var variableWithAnyType;
variableWithAnyType = 10;
//object type definition, define structure for an object
// we achieve that only object wit this types will e storable
var person;
person = { name: 'vakho', age: 29 };
//let us combine array and objects
// let us say we need array of persons, they contain name and age
var people;
//type inference
var iKnwoIAmString = 'Value for type inference variable';
//it is same as: let iKnwoIAmString:string = 'Value for type inference variable';
// union type allows us to have multiple types for a variable 
var course;
course = "My Course";
course = 10;
course = true;
var personWithTypeDefinition;
personWithTypeDefinition = { name: 'Name', age: 20 };
//let us make the same thing for an array
var peopleWithTypeDefinitions;
peopleWithTypeDefinitions = [{ name: 'name', age: 20 }];
// let us see functions and function types in typescript
function add(x, y) {
    return x + y;
}
//in this case we have type inference, compiler can see that our function returns number value.
//we could specify the type of the value our function returns
function functionWithPredefinedType(x, name) {
    return true;
}
//function without return statement is automatically void
function justPrintingSomething(x) {
    console.log('Hello u');
}
//in typescript we do have void keayword too.
//let us see generics in typescript
// firtsly let us write a function that usese no generics
function insertAtTheBeginning(array, newValue) {
    return __spreadArray([newValue], array, true);
}
//this function does it's job but it returns an array of ojects...
// what if we wanted that the return type is Number or String or Boolean
//Thats why we use generics
function insertAtTheBeginningWithGenerics(array, newValue) {
    return __spreadArray([newValue], array, true);
}
//array of numbers
var demoArray = insertAtTheBeginningWithGenerics([2, 3, 4], 1);
//array of chars
var demoArray2 = insertAtTheBeginningWithGenerics(['2', '3', '4'], '1');
// let us see classes in typescript
// by default all class members are public
// we can use private modificator, if we want to make it private
//we dont need function, const or let keyword to initialise class members
var Student = /** @class */ (function () {
    //let us make a constructor that initialises values of members
    function Student(firstname, lastname, age, courses) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.courses = courses;
    }
    //fucntion that adds a course to a student
    Student.prototype.enrollCourse = function (courseName) {
        this.courses.push(courseName);
    };
    // function that prints all the courses
    Student.prototype.printCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student1 = new Student('name', 'surname', 20, ['Angular']);
student1.enrollCourse('react');
//short head notation, we can declare class members directly in the head of constructor



// npx tsc --init  -> creates tsconfig.json in the folder.



//train here: https://www.typescriptlang.org/