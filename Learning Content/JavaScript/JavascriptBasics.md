# JavaScript Basics

## Introduction

JavaScript is a high-level, interpreted scripting language that enables dynamic content on web pages. It is a core technology of the web, alongside HTML and CSS. This document covers the basics of JavaScript to serve as a quick reference and learning guide.

## Variables

- **var**: Declares a variable, optionally initializing it to a value.
- **let**: Declares a block-scoped, local variable, optionally initializing it to a value.
- **const**: Declares a block-scoped, read-only named constant.

```
var name = "John Doe";
let age = 30;
const BIRTH_YEAR = 1990;
```

## Data Types

JavaScript has dynamic types. The main types are:

- **String**: Represents textual data.
- **Number**: An integer or a floating-point number.
- **Boolean**: Any of two values: true or false.
- **Object**: Collections of key-value pairs.
- **Array**: A list of values.
- **Undefined**: A variable that has not been assigned a value.
- **Null**: Denotes a null value.

```
let name = "Jane Doe"; // String
let age = 25; // Number
let isEmployed = true; // Boolean
let person = { firstName: "Jane", lastName: "Doe" }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
let x; // Undefined
let y = null; // Null
```

## Functions

Functions are blocks of code designed to perform a particular task.

```
function greet(name) {
  return "Hello " + name + "!";
}

console.log(greet("John"));
```

## Conditional Statements

JavaScript supports conditional statements like `if`, `else if`, and `else`.

```
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

## Loops

JavaScript supports several types of loops to iterate over data, such as `for`, `while`, and `do-while`.

```
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## Arrays

Arrays are used to store multiple values in a single variable.

```
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Access the first item, Apple
fruits.push("Durian"); // Add an item to the end
```

## Objects

Objects are collections of properties.

```
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.firstName);
  }
};

person.greet(); // Calls the greet function
```

## DOM Manipulation

JavaScript can change the content of an HTML page by manipulating the Document Object Model (DOM).

```
document.getElementById("demo").innerHTML = "Hello JavaScript!";
```

## Events

JavaScript can react to HTML events.

```
document.getElementById("myBtn").onclick = function() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
};
```
