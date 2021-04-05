/*

Stacks - LIFO

Use linked list, pop off top push on top

Queues - FIFO

add/remove data

*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        this.size++;
        return this.size;

        // return ++this.size
    }

    pop() {
        if (!this.first) return null;
        let popped = this.first;

        if (this.first === this.last) {
            this.last = null;
        } 

        this.first = this.first.next;
        this.size--;
        return popped.value
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue () {
        if (!this.first) return null;

        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}