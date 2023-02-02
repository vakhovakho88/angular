//primitives
let ageOfStudent: number;
ageOfStudent = 20;

let username: string;
username = 'Vakho';

let isStudent : boolean;
isStudent = false;




// more complex types

//create string array
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];


// same as: let variableWithAnyType: any
// this is same as var keyword in c#
let variableWithAnyType;
variableWithAnyType = 10;


//object type definition, define structure for an object
// we achieve that only object wit this types will e storable
let person: {
    name: string,
    age: number
};

person = {name:'vakho', age:29};

//let us combine array and objects
// let us say we need array of persons, they contain name and age
let people:{
name:string,
age:number
}[];


//type inference
let iKnwoIAmString = 'Value for type inference variable';
//it is same as: let iKnwoIAmString:string = 'Value for type inference variable';


// union type allows us to have multiple types for a variable 
let course: string | number | boolean;
course = "My Course";
course = 10;
course = true;
//none of them above will cause error.


//sometimes we repeat type definitions and have redundancy, we can have type aliaces to avvoid this redundancy
type Person  = {
    name: string,
    age: number
};

let personWithTypeDefinition : Person;
personWithTypeDefinition = {name:'Name', age:20};

//let us make the same thing for an array
let peopleWithTypeDefinitions: Person[];
peopleWithTypeDefinitions = [{name:'name',age:20}]



// let us see functions and function types in typescript
function add(x:number,y:number){
    return x+y;
}
//in this case we have type inference, compiler can see that our function returns number value.

//we could specify the type of the value our function returns
function functionWithPredefinedType(x: number, name: string): boolean {
    return true;
}

//function without return statement is automatically void
function justPrintingSomething(x:any){
    console.log('Hello u');
}
//in typescript we do have void keayword too.



//let us see generics in typescript

// firtsly let us write a function that usese no generics
function insertAtTheBeginning(array:any[], newValue:any){
    return [newValue,...array];
}
//this function does it's job but it returns an array of ojects...

// what if we wanted that the return type is Number or String or Boolean
//Thats why we use generics
function insertAtTheBeginningWithGenerics<T>(array:T[], newValue:T){
    return [newValue,...array];
}
//array of numbers
const demoArray = insertAtTheBeginningWithGenerics([2,3,4],1);
//array of chars
const demoArray2 = insertAtTheBeginningWithGenerics(['2','3','4'],'1');




// let us see classes in typescript
// by default all class members are public
// we can use private modificator, if we want to make it private
//we dont need function, const or let keyword to initialise class members
class Student{
    firstname: string;
    lastname: string;
    age: number;
    private courses: string[];
    

    //let us make a constructor that initialises values of members
    constructor(firstname:string, lastname:string, age:number, courses:string[]) {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.courses=courses;
    }


    //fucntion that adds a course to a student
    enrollCourse(courseName:string){
        this.courses.push(courseName);
    }

    // function that prints all the courses
    printCourses(){
        return this.courses.slice();
    }
}


const student1 = new Student('name','surname',20,['Angular']);
student1.enrollCourse('react'); 



//short head notation, we can declare class members directly in the head of constructor
class Student2{
 
    //create members in the constructor
    constructor(
        public firstname:string, 
        public lastname:string, 
        public age:number, 
        private courses:string[]
        ) 
        {
        //we dont nee assigments here, it is automatically in the head of the constructor
    }
}



// working with interfaces
//interface code will not be compiled to javascript
// no method definitions in interfaces
// we can assign inetface as type of the variables

interface Human {
    firstname:string;
    age:number;

    greet: ()=>void;
}

//using interfaces like type aliaces 
let vakho: Human;
vakho = {
    firstname: 'vakho',
    age: 29,
    greet() {
        console.log('Hello u');
    }
}

//but what is difference between interfaces and type aliaces? Interfaces are used to create structures, that are
// implemented by classes. It is also ok to use interfaces instead of type aliaces
// every member of the interface should be implemented
class Programmer implements Human{
    firstname: string;
    age: number;
    greet(){
        console.log("Hello U");
    }
}
