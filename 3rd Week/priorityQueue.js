class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    add(element) {
      this.heap.push(element);
      this.heapifyUp();
    }
  
    remove() {
      if (this.isEmpty()) {
        return null;
      }
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
  
      return root;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
      let parentIndex;
  
      while (currentIndex > 0) {
        parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[parentIndex] <= this.heap[currentIndex]) {
          break;
        }
  
        // Swap parent and current elements
        [this.heap[parentIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[parentIndex],
        ];
  
        currentIndex = parentIndex;
      }
    }
  
    heapifyDown() {
      let currentIndex = 0;
      let leftChildIndex, rightChildIndex, minIndex;
  
      while (true) {
        leftChildIndex = currentIndex * 2 + 1;
        rightChildIndex = currentIndex * 2 + 2;
        minIndex = currentIndex;
  
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex] < this.heap[minIndex]
        ) {
          minIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] < this.heap[minIndex]
        ) {
          minIndex = rightChildIndex;
        }
  
        if (minIndex === currentIndex) {
          break;
        }
  
        // Swap current and minimum elements
        [this.heap[currentIndex], this.heap[minIndex]] = [
          this.heap[minIndex],
          this.heap[currentIndex],
        ];
  
        currentIndex = minIndex;
      }
    }
  }
  
  // Example usage
  const priorityQueue = new MinHeap();
  priorityQueue.add(5);
  priorityQueue.add(2);
  priorityQueue.add(7);
  priorityQueue.add(3);
  
  console.log(priorityQueue.remove()); // Output: 2
  console.log(priorityQueue.remove()); // Output: 3
  