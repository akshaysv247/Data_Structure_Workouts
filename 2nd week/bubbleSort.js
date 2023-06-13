const arr = [-6,8,20,-2,4];

const bubbleSort = (a) => {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < a.length -1; i++) {
            if (a[i] > a[i +1]) {
                let temp = a[i] ;
                a[i] = a[i + 1] ;
                a[i + 1] = temp ;
                swap = true ;
            }
        }
    } while (swap)
}

bubbleSort(arr)
console.log(arr)