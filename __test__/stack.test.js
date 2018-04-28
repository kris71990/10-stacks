'use strict';

const Stack = require('../lib/stack');

describe('Stack.push', () => {
  test('push should add a node to the end of the linked list (top of stack)', () => {
    const stack = new Stack();
    stack.push(1); 
    stack.push(2); 
    stack.push(3); 
    expect(stack.top).toEqual(3);
    stack.push(4); 
    stack.push(5); 
    stack.push(6); 
    expect(stack.top).toEqual(6);
  });
});

describe('Stack.pop', () => {
  test('pop should remove the top node of the linked list', () => {
    const stack = new Stack();
    stack.push(1); 
    stack.push(2); 
    stack.push(3); 
    stack.push(4);
    expect(stack.pop()).toEqual(4);
    expect(stack.top).toEqual(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.top).toEqual(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.top).toEqual(1);
  });
});

describe('Stack.peek', () => {
  test('peek return the item at the top of the stack', () => {
    const stack = new Stack();
    stack.push(1); 
    stack.push(2); 
    stack.push(3); 
    stack.push(4);
    expect(stack.peek()).toEqual(4);
    stack.pop();
    expect(stack.peek()).toEqual(3); 
    stack.pop();
    expect(stack.peek()).toEqual(2);
  });
});

describe('Stack.isEmpty', () => {
  test('checks if stack is empty', () => {
    const stack = new Stack();
    const stack2 = new Stack();
    stack.push(1); 
    expect(stack.isEmpty()).toEqual(false);
    expect(stack2.isEmpty()).toEqual(true);
  });
});
