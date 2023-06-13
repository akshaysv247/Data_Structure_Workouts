const addUpTo = (n) => {
    let total = 0;
    for(let i = 0 ; i < n ; i++) {
        total += i ; 
    }
    console.log(total);
    return total;
}

const addupTO = (n) => {
    console.log(n * (n + 1)/2)
    return n * (n + 1) / 2;
}

// let t1 = performance.now();
// // addUpTo(10000000);
// addupTO(10000000);
// let t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1) / 1000 } seconds`);
const ar = [2,1,4,5,3,6,9,7,8,3,2]

const find2ndLargest = (a) => {
    let l1 = 0;
    let l2 = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > l1) {
            l2 = l1;
            l1 = a[i];
        } else if (a[i] > l2 && a[i] < l1) {
            l2 = a[i];
        }
    }
    return l2;
}

const reverseArray = (a) => {
    const l = a.length;
    const lastIndex = l -1;
    for (let i =0; i < Math.round(l/2) ; i++) {
        const temp = a[i];
        a[i] = a[lastIndex -i];
        a[lastIndex - i] = temp;
    }
    return a;
}
// console.log(find2ndLargest(ar));
// console.log(reverseArray(ar));

const linearSearch = (a, el) => {
    const l = a.length;
    for (let i = 0; i < l; i++) {
        if (a[i] === el) {
            console.log(`element found at ${i} position`);
            return a[i];
        }
    }
    console.log('element not found')
}
console.log(linearSearch(ar, 3))




const a = [1,2,3,4,5,6,7,8,9]
function binarySearch(arr, target) {
    let left = arr[0];
    let right = arr[arr.length - 1];
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1; 
      }
    }
  
    return -1;
  }
// console.log(binarySearch(a, 4))

//recursive search
function binarySearchRecursive(arr, target, left, right) {
    if (left > right) {
      return -1;
    }
  
    const mid = Math.floor((left + right) / 2);
  
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
      return binarySearchRecursive(arr, target, left, mid - 1);
    }
  }

//   console.log(binarySearchRecursive(a,3,1,9))







