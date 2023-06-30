class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    deleteMax() {
      if (this.isEmpty()) {
        return null;
      }
  
      const maxValue = this.heap[0];
      const lastValue = this.heap.pop();
  
      if (!this.isEmpty()) {
        this.heap[0] = lastValue;
        this.heapifyDown();
      }
  
      return maxValue;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[currentIndex] <= this.heap[parentIndex]) {
          break;
        }
  
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      }
    }
  
    heapifyDown() {
      let currentIndex = 0;
  
      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let maxChildIndex = currentIndex;
  
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex] > this.heap[maxChildIndex]
        ) {
          maxChildIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] > this.heap[maxChildIndex]
        ) {
          maxChildIndex = rightChildIndex;
        }
  
        if (maxChildIndex === currentIndex) {
          break;
        }
  
        [this.heap[currentIndex], this.heap[maxChildIndex]] = [
          this.heap[maxChildIndex],
          this.heap[currentIndex],
        ];
        currentIndex = maxChildIndex;
      }
    }
     findSmallestInMaxHeap() {
      let smallest = this.heap[0]; 
      for (let i = 1; i < this.heap.length; i++) {
        if (this.heap[i] < smallest) {
          smallest = this.heap[i];
        }
      }
      return smallest;
    }
  }
  const heap = new MaxHeap();

  heap.insert(3);
  heap.insert(5);
  heap.insert(8)
  heap.insert(10);
  heap.insert(15)
  heap.insert(20)
  heap.deleteMax();
  heap.heapifyDown()

  console.log(heap)
  console.log(heap.findSmallestInMaxHeap())