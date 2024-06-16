// import { getStudentName, name } from "./module.js";
//ui.dev/rwd/develop/browser-feature-support/media-queries-for-common-device-breakpointshttps://github.com/topics/interview-preparation
// }
/*
- Primitive datatype
Boolean
String 
Number
Null
Undefined
BigInt

- Non primitive datatype
Array
Object
*/

//Primitive Type example

// let a = "Suresh";
// let b = a;
// b = "Ram";
// console.log(a, b);

//Non-Primitive example

// let student = {
//   firstName: "Ratheesh",
//   lastName: "Kumar"
// };

// let student2 = student;

// student2.gender = "Male";

// console.log(student, "<==== Student", student2, "<===== student2");

//---------------------------

// Name convenstions
// 1.Camel case - "camelCase"
// 2.Snake case - "snake_case"
// 3.Kebab case - "kebab-case"
// 4.Pascal Notation - "PascalCase"

//---------------------------

// Storing a variables
/*
1. var - old way of declaring a variable
2. let - ES6 feature
3. const  - ES6 feture
*/

//var
/*
- var is global variable.
- The var keyword was used in all JavaScript code from 1995 to 2015.
- Only use var if you MUST support old browsers.
- var supports fearure called hosting.
- we can change the data type value even after it is declared.
- global scoped
*/

// let
/*
- we can change the data type value even after it is declared.
- let doesn't supports feature called hosting.
- block scoped 
*/

//const
/*
- we can't change the any data types value after it is declared both primitve and non-primitive.
- const doesn't supports feature called hosting.
- We can mutate the values which is present inside the non-primitive datatype.
- block scoped
*/

// var name = "suresh";
// console.log(name, "name before change the value");
// name = 89;
// console.log(name, "name after change the value");

// let firstName = "Mustafa";
// console.log(firstName, "firstName before change the value");
// firstName = 30;
// console.log(firstName, "firstName after change the value");

// Prmititve Data type example
// const lastName = "Rafique";
// console.log(lastName, "lastName before change the value");
// lastName = 50;
// console.log(lastName, "lastName after change the value");

// Non primitive datatype example

//Object
// const student = {
//   firstName: "Ratheesh",
//   lastName: "Kumar"
// };
// console.log(student, "before changing the student object");
// student.age = 50;
// console.log(student, "after changing the student object");

//Array
// const studentInfo = [
//   //1 Dimensinal Array
//   91839021803,
//   { name: "ratheesh kumar" },
//   "english",
//   10.0,
//   false,
//   null,
//   [0, 1, 4, 2], //2 Dimensional Array
//   [1, [2, 144, 3]] //3 Dimensional Array
// ];
// console.log(studentInfo, "before changing the student info array");
// studentInfo.push(undefined);
// console.log(studentInfo, "after changing the student info array");
//---------------------------

// Types of Scopes in JavaScript:
// Block scope
// Function scope
// Local scope
// Global scope

//Block Scope
// {
//   const totalName = "sam";
//   console.log(totalName, "this is name");
// }

// console.log(totalName, "this is name");

//Global Scope
// const name1 = "raj";

// function getName() {
//   console.log(name1, "this is name");
// }

// getName();

//Function scope

// function getName() {
//   const name1 = "Sam";
//   console.log(name1, "this is name");
// }
// getName();
// console.log(name1, "name1");

//Local Scope

// function getName() {
// const name1 = "raj";
//   console.log(name1, "this is name");
// }

// getName();

// const studentInfo = [1, 2, { name: "sam" }, null, undefined, false, [1, 2]];

// [[1, 2], [3, 4], [[12, 2]]];

// [] - 1 dimensional array
//[[]] - 2 dimensional array
//[[[]]] - 3 dimesional array

// const names = ["sam", "raj", "kumar"];

// const isStudentQualified = (name) => {
//   const isQualified = names.includes(name);

//   console.log(isQualified);
//   //   if (isQualified) {
//   //     return "Student Qualified";
//   //   }
//   //   return "Student not Qualified";

//   return isQualified ? "Student Qualified" : "Student not Qualified";
// };

// console.log(isStudentQualified("sam"));

// const firstName = "Ratheesh";
// const lastName = "kumar";

// const a = 10;

// const b = "sam";

// //Concatation (combining two strings)
// console.log(firstName + " " + lastName);

// //Type corrsion
// console.log(a - b);

//Logical Operators

// const a = true;
// const b = false;

// console.log(a && b);

// console.log(a || b);

// console.log(!a);

//For loop or for of loop
// const iteratateNumber = () => {
//   var i;
//   const num = [1, 2, 4, 56, 6, 2, 4];

//   for (i = 0; i < num.length; i++) {
//     console.log(num[i]);
//     console.log(num[i] === 2 && "It is 2");
//   }

//   for (const element of num) {
//     console.log(element);
//   }
// };

// iteratateNumber();

//Switch
// const getValues = (key) => {
//   switch (key) {
//     case "A":
//       return "It's A";

//     case "B":
//       return "It's B";

//     case "C":
//       return "It's C";

//     default:
//       return "It's defualt";
//   }
// };

// console.log(getValues(""));

//For in loop
// const iteratateStudentInfo = () => {
//   const studentInfo = {
//     firstName: "sam",
//     lastName: "anderson"
//   };

//   for (const property in studentInfo) {
//     console.log(`${property} : ${studentInfo[property]}`);
//   }
// };

// iteratateStudentInfo();

//...............

//Plain JS

//DOM elements

// const helloWord = document.getElementById("test-hello");

// const studentNames = document.getElementsByClassName("intro");

// const studentNamesTag = document.getElementsByTagName("h1");

// const x = document.querySelectorAll("p.intro");

// helloWord.addEventListener("click", () => console.log("Its clicked"));

// helloWord.style.color = "red";

// helloWord.innerText = "Rogers";

// document.getElementById("demo").innerHTML =
//   'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

// console.log(x, "x");

// helloWord.addEventListener("click", function () {
//   console.log("Document was clicked");
// });

// function clikedName() {
//   console.log("Document was clicked");
// }

// (()=>  {
//   console.log("deeecode");
// })();
// (() => {
//   console.log("deeecode", "this is execeuted");
// })();

// (function print() {
//   console.log("deeecode");
// })();

// print();

// console.log(helloWord);

// console.log(studentNames, "studentNames");

// console.log(studentNamesTag, "studentNamesTag");

// const btnStop = document.getElementById("stop");
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//Depp clone , Shallow clone

//spread operator array & object

//Shallow copy

// const array1 = [1, 2, 4, 5, 6, 6];
// const array2 = [5, 1, 23, 12, 1];
// const arr = [...array1, ...array2];

// console.log(arr);

// const obj = { name: "Version 1", additionalInfo: { version: 1 } };

// const shallowCopy1 = { ...obj };
// const shallowCopy2 = Object.assign({}, obj);

// shallowCopy1.name = "Version 2";
// shallowCopy1.additionalInfo.version = 2;

// shallowCopy2.name = "Version 2";
// shallowCopy2.additionalInfo.version = 2;

// console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
// console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
// console.log(shallowCopy2); // { name: 'Version 2', additionalInfo: { version: 2 } }

// //Deep Copy
// const obj1 = { name: "Version 1", additionalInfo: { version: 1 } };

// const deepCopy = JSON.parse(JSON.stringify(obj1));

// deepCopy.name = "Version 2";
// deepCopy.additionalInfo.version = 2;

// const obj3 = { ...obj1, additionalInfo: { ...obj1.additionalInfo } };

// obj3.name = "Version 2";
// obj3.additionalInfo.version = 2;

// console.log(obj3, "deep clone 2");

// console.log(obj1, "original object"); // { name: 'Version 1', additionalInfo: { version: 1 } }
// console.log(deepCopy, "deep clone 1"); // { name: 'Version 2', additionalInfo: { version: 2 } }

// //Rest Operator

// function getValues(...arg) {
//   console.log(arg);
//   const [a, b, c, d] = arg;
//   console.log(a, b, c, d);
// }

// getValues(1, 2, 4, 5, 3);

// //Default Parameter

// function getArray(x = 11, a = 10) {
//   console.log(a, x);
// }
// getArray();

// function getMobile(manufacturer, model, year) {
//   return {
//     manufacturer,
//     model,
//     year
//   };
// }
// console.log(getMobile("Samsung", "Galaxy", "2020"));
// console.log(getMobile("Apple", "iPhone 10", "2020"));

// console.log(name);

// getStudentName();

fetch("https://freetestapi.com/api/v1/books")
  .then((res) => {
    console.log(res);
    if (res.status === 404) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  })
  .then((res) => {
    console.log(res, "this is second rs");

    fetch(`https://freetestapi.com/api/v1/books/${res[0].id}`)
      .then((firstBook) => {
        console.log(firstBook, "this is first fook");
        return firstBook.json();
      })
      .then((firstBookRes) =>
        console.log(firstBookRes, "this is first book res")
      );
    return res[0];
  })
  .then((res) => {
    console.log(res, "this is third rs");
  })
  .catch((error) => console.log(error, "this is eror"));
// ---------------------------
