function heapSort(arr) {
    // Build the max heap
    buildMaxHeap(arr);
  
    // Perform heap sort
    for (let i = arr.length - 1; i > 0; i--) {
      // Swap the root (maximum element) with the last element in the unsorted region
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      // Heapify the root node to maintain the heap property
      heapify(arr, 0, i);1
    }
  
    return arr;
  }
  
  function buildMaxHeap(arr) {
    // Start from the first non-leaf node and heapify all nodes in reverse order
    const startIdx = Math.floor(arr.length / 2) - 1;
    for (let i = startIdx; i >= 0; i--) {
      heapify(arr, i, arr.length);
    }
  }
  
  function heapify(arr, idx, size) {
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;
    let largest = idx;
    
    // Compare the root node with its left child
    if (left < size && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // Compare the root node (or updated left child) with its right child
    if (right < size && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If the largest element is not the root, swap them and recursively heapify the affected sub-tree
    if (largest !== idx) {
      [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
      heapify(arr, largest, size);
    }
  }
  
  // Example usage
  const array = [9, 2, 5, 1, 7, 4, 8, 6, 3];
  const sortedArray = heapSort(array);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  