'use strict';

const LinkedList = require('./linked-list');

module.exports = class Stack {
  constructor() {
    this._storage = new LinkedList();
    this.top = null;
  }
  
  push(value) {
    this._storage.insertAtHead(value);
    this.top = value;
    return this;
  }

  pop() {
    const temp = this.top;
    this._storage.head = this._storage.head.next;
    this.top = this._storage.head.value;
    return temp;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    if (!this.top) return true;
    return false;
  }
};
