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


  insertBefore(newItem, nodeVal){
    //check if head is null
    if(this.head === null){
      return new Error('Nothing in list');
    } else {
      let tempNode = this.head;
      let prevNode = this.head;
      // Change newItem, we have to place our newItem before it by newItem(next === that node)
      // newItem before the above newItem also needs to have its next changed
      while (tempNode) {
        if (tempNode.value === nodeVal) {
          prevNode.next = new _Node(newItem, tempNode);
          return;
        }
        prevNode = tempNode;
        tempNode = tempNode.next;
      }
      return new Error('That node does not exist');
    }
  }

  insertAfter(newItem, nodeVal){
    //check if head is null
    if(this.head === null){
      return new Error('Nothing in list');
    } else {
      let tempNode = this.head;
      let prevNode = this.head;
      // Change newItem, we have to place our newItem after it by newItem(next === that node)
      while (tempNode) {
        if (tempNode.value === nodeVal) {
          prevNode = tempNode;
          tempNode = tempNode.next;
          prevNode.next = new _Node(newItem, tempNode);
          return;
        }
        prevNode = tempNode;
        tempNode = tempNode.next;
      }
      return new Error('That node does not exist');
    }
  }

  insertAt(newItem, pos){
    if(this.head === null){
      return new Error('Nothing in list');
    } else {
      let i = 1; //counter variable
      let tempNode = this.head;
      let prevNode = this.head;
      while(tempNode){
        if(i === pos){
          prevNode.next = new _Node(newItem, tempNode);
          return;
        }
      i = i + 1;
      prevNode = tempNode;
      tempNode = tempNode.next;
      }
    }
    return new Error('The list is not that long')
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
  
function main(){
  const SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.removal('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
}

main();