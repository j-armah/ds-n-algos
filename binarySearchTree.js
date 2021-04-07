/*

Binary Search Tree

A data structure that consists of nodes in a parent/ child relationship

Root - top node in tree
Child - Node directly connected to another node when moving away from the root
Parent - converse notion of a child
Siblings - A group of nodes with the same parent
Leaf - A node with no children
Edge - The connection between one node and another


How BSTS Work

Every parent node has at most two children

Every node to the left of a parent node is always less than the parent
Every node to the right of a parent node is always greater than the parent

*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let current  = this.root;
        let found = false;

        while(!found && current) {
            if(value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!current) return false;
        return current;
    }

    breadthFirstSearch () {
        let data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder () {
        let data = [];
        // let current = this.root;

        function traverse(node) {
            data.push(node.value); // value not node, remove value for full node
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder () {
        let data = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value); 
        }
        traverse(this.root);
        return data;
    }


}



var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree.breadthFirstSearch())