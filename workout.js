const cron = require('node-cron');  



const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNo = Math.random();
        if (randomNo > 0.5) {
            resolve(randomNo);
        } else {
            reject(' no is less than 0.5');
        }
    }, 1000)
})
myPromise.then(result => {
    console.log(result)
}).catch(error => {
    console.error(error);
})

// let a= 1
// let b= 2

// a= a+b;
// b= a-b;
// a= a-b;

// console.log(a);
// console.log(b);

function* generateNo(){
    let i = 0;
    while(true) {
        yield i++;
    }
}

const noGen = generateNo();
console.log(noGen.next().value);
console.log(noGen.next().value);
console.log(noGen.next().value);
console.log(noGen.next().value);


const play = () => {
    console.log('Here comes the regular')
}

cron.schedule('* * * * *', play); // run on every minute

const ogObj = {name: 'nelson', age: '22', hobies:[1,2,3]}

const deepCopy = JSON.parse(JSON.stringify(ogObj))
const shallowCopy = ogObj
shallowCopy.name = 'kili'
deepCopy.name = 'anwar'
console.log(deepCopy)
console.log(shallowCopy)
console.log(ogObj)


//example for memoisation
const memoSet = new Set();

function isPrime(n) {
  if (memoSet.has(n)) {
    return true;
  }

  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  memoSet.add(n);
  return true;
}

console.log(isPrime(5)); // Output: true
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(11)); // Output: true

console.log(memoSet); // Output: Set { 5, 7, 11 }

