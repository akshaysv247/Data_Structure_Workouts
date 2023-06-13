const arr = [-6, 20, 8, 4, -2];

function mergeSort(a) {
    if (a.length < 2) {
        return a;
    }
    const mid = Math.floor(a.length / 2);
    const leftArr = a.slice(0, mid);
    const rightArr = a.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    const sortedArr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}

console.log(mergeSort(arr))