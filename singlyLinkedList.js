/*

What is a linked list?

A data structure that contains a head, tail and length property

Linked list consist of nodes, and each has has a value and a pointer to another node or null
*/

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++

        return this
    }

    pop() {
        if (!this.head) return undefined
        let current = this.head
        let newTail = current

        while(current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0 ) {
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift() {
        if (!this.head) return undefined;

        let shift = this.head;
        this.head = shift.next;
        this.length--;

        return shift
    }

    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        length++;
        return this;
    }

    get(index) {
        if (index > this.length || index < 0) return null;

        let count = 0;
        let current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }

        return current;
    }

    set(index, val) {
        let node = this.get(index); 
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        let newNode = new Node(val);
        let leftNode = this.get(index-1);
        // let rightNode = this.get(index);
        let rightNode = leftNode.next
        
        leftNode.next = newNode;
        newNode.next = rightNode; 
        this.length++;

        return true
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return !!this.shift(index);
        if(index === this.length - 1) !!this.pop(index);

        let leftNode = this.get(index-1);
        let removed = leftNode.next;

        leftNode.next = removed.next;
        this.length--;

        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for(let i=0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        console.log(this)
        return this;
    }
}

let list =  new SinglyLinkedList()

// console.log(list.push(99))

list.push(100)
list.push(200)
list.push(250)
list.push(300)

// console.log(list.remove(2), list)
list.reverse()