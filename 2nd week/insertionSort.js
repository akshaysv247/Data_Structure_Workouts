const arr = [-6,20,-2,8,4];

const insertionSort = (a) => {
    for (let i = 1; i < a.length; i++) {
        let numberToInsert = a[i];
        let j = i-1;
        while (j > 0 && a[j] > numberToInsert) {
            a[j+1] = a[j];
            j = j-1;
        }
        a[j+1] = numberToInsert;
    }
}

insertionSort(arr)
console.log(arr);