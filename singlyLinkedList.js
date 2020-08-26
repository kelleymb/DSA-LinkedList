const LinkedList = require('./linkedList')

// Create a singly linked list
function main() {

    const SLL = new LinkedList();
    //add Apollo to the list
    SLL.insertFirst('Apollo')
    //add Boomer, Helo, Husker, Starbuck
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    //add Tauhida
    SLL.insertLast('Tauhida')
    //remove Husker
    SLL.remove('Husker')
    //add Athena before Boomer
    SLL.insertBefore('Athena', 'Boomer')
    //add Hotdog after Helo
    SLL.insertAfter('Hotdog', 'Helo')
    //insert Kat in the 3rd position
    SLL.insertAt('Kat', 3)
    SLL.remove('Tauhida')
    //return linked list 'SLL'
    return SLL;
}

console.log(main());

// Supplemental functions for a linked list

//display: displays the linked list
function display() {
    let output = '';
    let currNode = this.head;
    while (currNode !== null) {
        output += currNode.val
        if(currNode.next !== null) {
            output += ' -> '
        }
        currNode = currNode.next
    } 
     return output;
}

//size: returns the size of the linked list
function size() {
    let currentNode = this.head;
    let i = 0;
    while (currentNode !== null) {
      i++;
      currentNode = currentNode.next;
    }
    return i;
}

//isEmpty: finds if the list is empty or not (without using the size() function)
function isEmpty() {
    if(this.head === null){
        return true;
      }
      return false;
}

//findPrevious: finds the node before the item you are looking for
function findPrevious(key) {
    if (this.isEmpty()) {
        console.log('list is empty');
        return;
      }
      if (this.head.data === key)    {
        console.log('that key has no previous element');
        return;
      }
      let currentElement = this.head.next;
      let previousElement = this.head;
      // next item is not null
      while (currentElement !== null) {
        if (currentElement.data === key) {
          return previousElement;
        }
        previousElement = currentElement;
        currentElement = currentElement.next;
      }
      console.log('the key does not exist in the list');
}

//findLast: returns the last node in the linked list
function findLast() {
    if (this.isEmpty()) {
        console.log('list is empty');
        return;
      }
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      return currentNode;
}

//write an algorithm to reverse a linked list
function reverse() {
    if (this.isEmpty()) {
        console.log('list is empty');
        return;
    }
    // nextNode = this.head(beginning of the list).next(pointer to next node)
    let nextNode = this.head.next;
    let nextNextNode;
    // currentNode = this.head(beginning of the list)
    let currentNode = this.head;
    // currentNode.next --> next node = null
    currentNode.next = null;

    while (nextNode !== null) {
        // nextNextNode = next pointer after this.head.next
        nextNextNode = nextNode.next;
        nextNode.next = currentNode;
        // this.head = this.head.next?
        currentNode = nextNode;
        //this.head.next = this.head.next
        nextNode = nextNextNode;
    }
    this.head = currentNode;
}

//write an algorithm to find the 3rd element from the end of a linked list
function thirdElement() {
    if (this.isEmpty()) {
        console.log('list is empty');
        return;
    }
    //currentNode = beginning of list
    let currentNode = this.head;
    //if there is only 1 element in the list
    if (currentNode.next === null) {
      console.log('list is not long enough');
      return;
    }
    //if there are only 2 elements in the list
    if (currentNode.next.next === null) {
      console.log('list is not long enough');
      return;
    }
    // lastNodeFinder === 3rd element
    let lastNodeFinder = currentNode.next.next;
    while (lastNodeFinder.next !== null) {
      currentNode = currentNode.next;
      lastNodeFinder = lastNodeFinder.next;
    }
    //return 3rd element
    return currentNode;
}

//write an algorithm to find the middle element of a linked list
function middle() {
    if (this.isEmpty()) {
        console.log('list is empty');
        return;
    }
    let size = this.findSize();
    size = Math.floor(size/2);
    
    let currentNode = this.head;
    
    for (let i = 0; i < size; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
}


//// incomplete ////


//write an algorithm to find whether a linked list has a cycle
//For this exercise, create a linked list with the name CycleList. 
//Be sure to insert nodes in the list so that it has a cycle. 
//Then test your program with a cycleList function.


//write an algorithm that will sort a given linked list
//or example given a list such as 3->2->5->7->1, 
//your program will output the sorted version of this list which will be 1->2->3->5->7. 
//You may not use another list or any other data structure such as an array to store the data.
