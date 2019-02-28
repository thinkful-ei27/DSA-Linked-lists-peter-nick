'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  } 
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // start at the head
    let tempNode = this.head;
    // is the list empty?
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (tempNode.value !== item) {
      // return null if end of the list
      // and the item is not on the list
      if (tempNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking
        tempNode = tempNode.next;
      }
    }
    // found the item
    return tempNode;
  }

  removal(item) {
    // is the list empty?
    if (!this.head) {
      return null;
    }

    // if the node to be removed is the head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let tempNode = this.head;
    // keep track of prevNode
    let prevNode = this.head;

    while ((tempNode !== null) && (tempNode.value !== item)) {
      // save the prevNode
      prevNode = tempNode;
      tempNode = tempNode.next;
    }
    if (tempNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = tempNode.next;
  }
}
  
