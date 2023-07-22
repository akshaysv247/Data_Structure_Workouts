class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let smallest = index;
      if (leftChildIdx < length && this.heap[leftChildIdx] < this.heap[smallest]) {
        smallest = leftChildIdx;
      }
      if (rightChildIdx < length && this.heap[rightChildIdx] < this.heap[smallest]) {
        smallest = rightChildIdx;
      }
      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      } else {
        break;
      }
    }
  }

  getMin() {
    return this.heap[0];
  }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(10);
minHeap.insert(2);
minHeap.insert(8);

console.log(minHeap.getMin()); // Output: 2
console.log(minHeap.extractMin()); // Output: 2
console.log(minHeap.getMin()); // Output: 5
