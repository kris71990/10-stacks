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
    const val = this.top;
    this.top = this.top.next;
    return val;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    if (!this.top) return true;
    return false;
  }
};
