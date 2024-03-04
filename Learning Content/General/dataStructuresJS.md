### Arrays

Arrays in JavaScript are used to store multiple values in a single variable. They are implemented as objects, allowing for a collection of elements, which can be of various types.

**Implementation:**
```javascript
let array = [1, 2, 3, 4, 5];
```

**Native Functions:**
- `slice()`: Returns a shallow copy of a portion of an array.
  ```javascript
  let newArray = array.slice(1, 3); // [2, 3]
  ```
- `splice()`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
  ```javascript
  array.splice(2, 1, 6); // array is now [1, 2, 6, 4, 5]
  ```

### Queues

A queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).

**Implementation using an array:**
```javascript
let queue = [];
queue.push(1); // enqueue
queue.push(2); // enqueue
queue.shift(); // dequeue, queue is now [2]
```

**Follow-up question:** How would you implement a queue using two stacks?

### Stacks

A stack is a linear structure that follows a particular order in which the operations are performed. The order is Last In First Out (LIFO).

**Implementation using an array:**
```javascript
let stack = [];
stack.push(1); // push
stack.push(2); // push
stack.pop(); // pop, stack is now [1]
```

**Follow-up question:** How can you use a single array to implement two stacks?

### Linked Lists

A linked list is a linear data structure where each element is a separate object, linked using pointers.

**Implementation:**
```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}
```

**Follow-up question:** How do you reverse a linked list?

### Binary Search Trees (BST)

A binary search tree is a node-based binary tree data structure which has the following properties:
- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.

**Implementation:**
```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
```

**Follow-up question:** How would you balance a BST?