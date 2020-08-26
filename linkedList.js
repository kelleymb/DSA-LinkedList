class _Node {
    constructor(val, next) {
        //val = value that holds the data
      this.val = val
        // next = serves as pointer to the next node
      this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        //head - indicates the beginning of the list
        //always contains the 1st node
        //empty list, represented by null
    }
    //insert at the beginning is O(1)
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    //insert at the end is O(n)
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }
    insertBefore(newItem, beforeItem) {
        //if there is no item at head, insert a new item
        if (this.head === null) {
          this.insertFirst(newItem);
          return;
        }

        let currNode = this.head;
        let prevNode = this.head;
    
        while (currNode !== null && currNode.val !== beforeItem) {
          prevNode = currNode;
          currNode = currNode.next;
        }
    
        if (currNode === null) {
          this.insertLast(newItem);
          return;
        }
        
        const tempNode = new _Node(newItem, currNode)
        
        prevNode.next = tempNode
    }
    insertAfter(newItem, afterItem) {
        //if there is no item at head, insert a new item
        if (this.head === null) {
          this.insertFirst(newItem);
          return;
        }
    
        let currNode = this.find(afterItem)
    
        if (currNode === null) {
          this.insertLast(newItem)
          return
        }
    
        const tempNode = new _Node(newItem, currNode.next);
    
        currNode.next = tempNode
    }
    insertAt(item, position) {
        //if there is no item at head, insert a new item
        if (this.head === null) {
          this.insertFirst(item);
          return;
        }
        //start at the head
        let currNode = this.head;
        let currPosition = 1;
    
        while (currPosition < position - 1) {
          currNode = currNode.next
          currPosition++
        }
    
        const tempNode = new _Node(item, currNode.next);
    
        currNode.next = tempNode
    }
    find(item) {
        //start at the head
        let currNode = this.head;
        //if the list is empty
        //if there is no head, return null
        if (!this.head) {
            return null;
        }
        //check for the item
        while (currNode.value !== item) {
            //return null if its the end of list and the item is not on the list
            if (currNode.next === null) {
                return null;
            } else {
                // otherwise, continue searching
                currNode = currNode.next;
            }
        }
        // Located 
        return currNode;
    }
    //best case performance is O(1)
    //avg and worst case is O(n)
    remove(item) {
        //if the list is empty
        //if there is no head, return null
        if (!this.head) {
            return null;
        }
        //if the node to be removed is head, make the next node the head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //start at the head
        let currNode = this.head;
        //keep track of previous node
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            //save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found.');
            return;
        }
        previousNode.next = currNode.next;
    }
}

module.exports = LinkedList;