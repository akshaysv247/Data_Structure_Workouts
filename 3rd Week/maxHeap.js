class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMax() {
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return max;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] < this.heap[index]) {
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
      let largest = index;
      if (leftChildIdx < length && this.heap[leftChildIdx] > this.heap[largest]) {
        largest = leftChildIdx;
      }
      if (rightChildIdx < length && this.heap[rightChildIdx] > this.heap[largest]) {
        largest = rightChildIdx;
      }
      if (largest !== index) {
        [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
        index = largest;
      } else {
        break;
      }
    }
  }

  getMax() {
    return this.heap[0];
  }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(2);
maxHeap.insert(8);

console.log(maxHeap.getMax()); // Output: 10
console.log(maxHeap.extractMax()); // Output: 10
console.log(maxHeap.getMax()); // Output: 8
