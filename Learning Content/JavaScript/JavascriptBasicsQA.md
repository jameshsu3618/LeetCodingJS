# JavaScript Interview Questions

Below are some common JavaScript interview questions along with their answers. 

## Question 1: What is the difference between `==` and `===` in JavaScript?

- **Answer**: In JavaScript, `==` is the equality operator that checks for equality of value, but not equality of type. It converts the variables to the same type before performing the comparison. On the other hand, `===` is the strict equality operator that checks for equality of both value and type, meaning no type conversion is done before the comparison.

## Question 2: Explain closure in JavaScript.

- **Answer**: A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables—a scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

## Question 3: What is a promise in JavaScript?

- **Answer**: A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states: pending (initial state, operation has not completed yet), fulfilled (operation completed successfully), or rejected (operation failed).

## Question 4: What are the differences between `var`, `let`, and `const`?

- **Answer**:
  - `var` declares a variable globally, or locally to an entire function regardless of block scope.
  - `let` allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the `var` keyword which defines a variable globally, or locally to an entire function regardless of block scope.
  - `const` is similar to `let` but the variable declared must be immediately initialized, with a value that can't be reassigned.

## Question 5: Explain event delegation in JavaScript.

- **Answer**: Event delegation is a technique of handling events efficiently by using a single event listener on a parent element to manage all of its child elements' events. This approach takes advantage of the event bubbling phase, allowing events to propagate up through the DOM tree. It helps in managing dynamic elements (elements added or removed from the DOM) and reduces the memory footprint by needing fewer event handlers.

## Question 6: What is the `this` keyword in JavaScript?

- **Answer**: The `this` keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used:
  - In a method, `this` refers to the owner object.
  - Alone, `this` refers to the global object.
  - In a function, `this` refers to the global object.
  - In a function, in strict mode, `this` is `undefined`.
  - In an event, `this` refers to the element that received the event.
  - Methods like `call()`, and `apply()` can refer `this` to any object.

## Question 7: Explain prototype inheritance in JavaScript.

- **Answer**: In JavaScript, every object has a property called a prototype, where you can add methods and properties to it. When an object inherits from another object, it also inherits its prototype. Therefore, prototype inheritance is the method by which JavaScript objects inherit features from one another. This is also known as prototypal inheritance.

## Question 8: What are arrow functions and how are they different from regular functions?

- **Answer**: Arrow functions are a concise way to write functions in ES6. The syntax for an arrow function is shorter compared to traditional function expressions and does not have its own `this`, `arguments`, `super`, or `new.target`. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

## Question 9: What is event bubbling in JavaScript?

- **Answer**: Event bubbling is a method of event propagation in the DOM where events bubble up from the innermost element to its parents in hierarchy. This means that when an event is fired on an element that has parents, the event handler of the innermost element is executed first and then the event handler of the parent elements.

## Question 10: What are template literals in JavaScript?

- **Answer**: Template literals are string literals allowing embedded expressions. Introduced in ES6, they are enclosed by the back-tick (` `) character instead of double or single quotes. Template literals can contain placeholders (`${expression}`) to insert the values of variables or expressions into a string. This makes constructing strings easier and more readable.
