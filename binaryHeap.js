/*

MaxBinaryHeap 
-  Parent nodes always larger than child nodes
- Each parents has at most two child nodes
- Parent is greater than thhe children, but no guarantee between siblings
- Binary heap is compact as possible, all children of each node are as full as they can be and left children are filled out first


MinBinaryHeap 
- Parent nodes always smaller than child nodes


----------------------------------------------------
****
for any index n
left child is stored at index 2n + 1
right child at 2n + 2
****

 */

class MaxBinaryHeap {
    constructor() {
         this.values = [];
    }

    insert(value) {
        this.values.push(element)
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx]
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/ 2); 
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;

        this.sinkDown()

        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break; 
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}