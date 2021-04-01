/*
Doubly Linked List

Almost identical to singly linked list 

nodes have next and prev pointers

Head prev = null
Tail next = null
*/

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


}