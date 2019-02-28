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

  
  //TESTING PURPOSES ONLY!
  insert(item, next){
    if(this.head === null){
      this.head = new _Node(item, this.head);
    }
    new _Node(item, next);
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
    return new Error('The list is not that long');
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

function display(list) {
  if (list.head === null) {
    return new Error('The list is empty');
  }
  const results = [];
  let tempNode = list.head;
  while (tempNode.next !== null) {
    results.push(tempNode.value);
    tempNode = tempNode.next;
  }
  results.push(tempNode.value);
  return results;
}

function copy(list) {
  if (list.head === null) {
    return new Error('The list is empty');
  }
  let copiedList = new LinkedList();
  let tempNode = list.head;
  while (tempNode.next !== null) {
    copiedList.insertLast(tempNode.value);
    tempNode = tempNode.next;
  }
  copiedList.insertLast(tempNode.value);
  return copiedList;
}

function size(list) {
  let counter = 1;
  if (list.head === null) {
    return 0;
  }
  let tempNode = list.head;
  while(tempNode.next !== null) {
    counter = counter + 1;
    tempNode = tempNode.next;
  }
  return counter;
}

function isEmpty(list) {
  if(list.head === null){
    return true;
  } else {
    return false;
  }
}

function findPrevious(list, item){
  if(list.head === null){
    return new Error('The list is empty');
  } else {
    let prevNode = list.head;
    let tempNode = list.head;
    if(tempNode.value === item){
      return new Error('There is nothing before this item');
    }
    while(tempNode){
      if(tempNode.value === item){
        return prevNode;
      }
      prevNode = tempNode;
      tempNode = tempNode.next;
    }
  }
  return new Error('The item is not in the list');
}

function findLast(list){
  if(list.head === null){
    return new Error('The list is empty');
  } else {
  
    let tempNode = list.head;
    while(tempNode){
      if(tempNode.next === null){
        return tempNode;
      }
      tempNode = tempNode.next;
    }
    return new Error('Somehow, this list never ends.');
  }
}

// Reverse a Linked List -- Must be O(n)
function reverseList (list) {
  let tempNode = list.head;
  let prevNode = null;
  let nextNode = list.head.next;
  // Handle if list is empty
  if (list.head === null) {
    return new Error('This list is empty');
  }
  // Handle if there is only one item in the list
  if (tempNode.next === null) {
    return list;
  }
  while (nextNode) {
    tempNode.next = prevNode;
    prevNode = tempNode;
    tempNode = nextNode;
    nextNode = nextNode.next;
  }
  tempNode.next = prevNode;
  list.head = tempNode;
  return list;
}

//Third from the end (DON'T ADD LENGTH), runtime O(n)

function thirdFromEnd(list){
  if(list.head === null){
    return new Error('List is empty');
  }
  if(list.head.next === null){
    return new Error('List only has one item');
  }
  if(list.head.next.next === null){
    return new Error('List only has two items');
  }
  let tempNode = list.head;
  let prevNode = null;
  let thirdEndNode = null;
  while(tempNode.next){
    thirdEndNode = prevNode;
    prevNode = tempNode;
    tempNode = tempNode.next;
  }
  return thirdEndNode;
}

function middle(list) {
  let tempNode = list.head;
  let i = 1;
  let answer = list.head;
  if(list.head === null){
    return new Error('List is empty');
  }
  if (list.head.next === null) {
    return new Error('List only has one item');
  }
  while (tempNode.next !== null) {
    i = i + 1;
    if (i % 2 === 0) {
      answer = answer.next;
    }
    tempNode = tempNode.next;
  }
  return answer;
}

function checkCycleList(list) {
  if(list.head === null){
    return new Error('List is empty');
  }
  //So we don't mutate original list
  let tempList = copy(list);
  let fakeNode = 'fake';
  let tempNode = tempList.head;
  let prevNode = null;
  while(tempNode.next !== null){
    if(tempNode.next === 'fake'){
      return true;
    }
    prevNode = tempNode;
    tempNode = tempNode.next;
    prevNode.next = fakeNode;
  }
  return false;
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
  SLL.removal('Tauhida');
  // console.log(checkCycleList(SLL));
  // console.log(checkCycleList(cycleList));
  // console.log(display(cycleList));
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // const empty = new LinkedList();
  // console.log(isEmpty(empty));
  // console.log(findPrevious(SLL, 'Helo')); //want to find Boomer
  // console.log(findPrevious(SLL, 'Tauhida')); //want to get an error (not in list)
  // console.log(findPrevious(SLL, 'Apollo')); //want to get an error
  // console.log(findPrevious(empty, 'Does not matter'));
  // console.log(findLast(SLL)); //expect to find Starbuck
  // console.log(findLast(empty)); //expect to get an error
  // console.log(reverseList(SLL));
  // console.log(display(SLL));
  // console.log(thirdFromEnd(SLL));
  // console.log(middle(SLL));

  
}

// insert(item, next){
//   if(this.head === null){
//     this.head = new _Node(item, this.head);
//   }
//   new _Node(item, next);

//Mystery Program Analysis: This program is going through the entire Linked List to remove duplicates 
//by resetting the pointers to skip over any duplicate values in the list.
//Runtime: O(n^2) maybe?

main();

