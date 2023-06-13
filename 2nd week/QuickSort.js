const arr = [-6, 4, 20, -2, 8];

function quickSort(a){
    if (a.length < 2) {
        return a;
    }
    let pivot = a[a.length - 1];
    let right = [];
    let left = [];
    for (let i = 0; i< a.length -1; i++) {
        if (a[i] < pivot) {
            left.push(a[i]);
        } else {
            right.push(a[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr))
