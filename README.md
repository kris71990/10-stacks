# Lab 10 - Stack Implementation

**Author** Kris Sakarias

**Version** 1.0.0

## Overview
This is an implementation of a stack as a linked list. A stack is a first in - first out data structure that can be thought of as a linked list where the head is the top of the stack. 

## Documentation
An instance of the Stack class can be created by: `const stack = new Stack()`. A stack is instantiated with a storage value, which is a linked list, and a top value which is the value of the head of the linked list. The stack itself has four methods:

```
push(value)
pop()
peek(value)
isEmpty()
```

Consider the stack: 
```stack = 5->6->7->8|```

### stack.push(value)
The push method inserts a node at the head of the linked list. The top becomes the most recently pushed node in the stack, and will be the first to leave when the pop() method is called. 

The above stack was created by calling `stack.push(val)` four times (with 5 being the most recent).


### stack.pop()
The pop method can be called to remove the most recently added node from the stack. The top is then reassigned to the next value in the stack.

If `stack.pop()` was called on the above example, the function would return the popped value (in this case 5) and the stack would become `6->7->8|`.

### stack.peek()
This method is similar to pop(), but simply returns the value of the top of the stack without removing it. The stack remains unchanged.

`stack.peek()` - returns 5

### stack.isEmpty()
This method checks if the stack is empty or not - returns true if the stack is empty and false if it is not.

`stack.isEmpty()` - returns false

## Tests
To run tests:

1. ```git clone https://github.com/kris71990/10-stacks```
2. ```npm i```
3. ```npm run test```
