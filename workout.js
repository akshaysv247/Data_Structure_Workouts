// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const randomNo = Math.random();
//         if (randomNo > 0.5) {
//             resolve(randomNo);
//         } else {
//             reject(' no is less than 0.5');
//         }
//     }, 1000)
// })
// myPromise.then(result => {
//     console.log(result)
// }).catch(error => {
//     console.error(error);
// })

let a= 1
let b= 2

a= a+b;
b= a-b;
a= a-b;

console.log(a);
console.log(b);