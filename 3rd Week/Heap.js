class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getLeftChildIndex(parentIndex) {
      return 2 * parentIndex + 1;
    }
  
    getRightChildIndex(parentIndex) {
      return 2 * parentIndex + 2;
    }
  
    getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }
  
    hasLeftChild(parentIndex) {
      return this.getLeftChildIndex(parentIndex) < this.heap.length;
    }
  
    hasRightChild(parentIndex) {
      return this.getRightChildIndex(parentIndex) < this.heap.length;
    }
  
    hasParent(childIndex) {
      return this.getParentIndex(childIndex) >= 0;
    }
  
    leftChild(parentIndex) {
      return this.heap[this.getLeftChildIndex(parentIndex)];
    }
  
    rightChild(parentIndex) {
      return this.heap[this.getRightChildIndex(parentIndex)];
    }
  
    parent(childIndex) {
      return this.heap[this.getParentIndex(childIndex)];
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    peek() {
      if (this.heap.length === 0) {
        return null;
      }
      return this.heap[0];
    }
  
    poll() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const item = this.heap[0];
      const lastItem = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = lastItem;
        this.heapifyDown();
      }
      return item;
    }
  
    add(item) {
      this.heap.push(item);
      this.heapifyUp();
    }
  
    remove(item) {
      const index = this.heap.indexOf(item);
      if (index !== -1) {
        const lastItem = this.heap.pop();
        if (index !== this.heap.length) {
          this.heap[index] = lastItem;
          this.heapifyUp(index);
          this.heapifyDown(index);
        }
      }
    }
  
    heapifyUp(index = this.heap.length - 1) {
      while (
        this.hasParent(index) &&
        this.parent(index) > this.heap[index]
      ) {
        const parentIndex = this.getParentIndex(index);
        this.swap(parentIndex, index);
        index = parentIndex;
      }
    }
  
    heapifyDown(index = 0) {
      while (this.hasLeftChild(index)) {
        let smallerChildIndex = this.getLeftChildIndex(index);
        if (
          this.hasRightChild(index) &&
          this.rightChild(index) < this.leftChild(index)
        ) {
          smallerChildIndex = this.getRightChildIndex(index);
        }
  
        if (this.heap[index] < this.heap[smallerChildIndex]) {
          break;
        } else {
          this.swap(index, smallerChildIndex);
        }
  
        index = smallerChildIndex;
      }
    }
  }
  
  const heap = new MinHeap();
  
  heap.add(5);
  heap.add(3);
  heap.add(10);
  heap.add(1);
  heap.add(7);
  heap.add(2);
  heap.add(8);
  console.log(heap.peek()); 
  heap.heapifyUp();
  
//   console.log(heap.poll()); 
//   console.log(heap.poll()); 
//   console.log(heap.poll()); 
//   console.log(heap.poll()); 
//   console.log(heap.poll()); 
  console.log(heap)