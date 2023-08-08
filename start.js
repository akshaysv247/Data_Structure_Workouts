// Rafeeque11:12 AM
const getData = async () => {
    // return new Promise((resolve, reject) => {
    //     axios.get('url').then(res => resolve(res)).catch(e => reject(e))
    // })
    const newPromise = await axios.get('url')
    console.log(newPromise);
    return newPromise;
}

const callFunction = async () => {
    // getData.then(res => console.log(res))
    const data = await getData();
    console.log(data);
}

const arr = [{ name: 'Rafeeque', age: 29 }, { name: 'Akshay', age: 22 }]

const obj = arr.map((a) => {
    a.email = 'akshay@gmail.com'
});
console.log(obj)

const result = arr.map((a) => a.name)
console.log(result)

const aedd = (a,b,c) => {
    return a+b+c;
}
function mCurry(a){
    return function(b){
       return function(c){
            return a+b+c;
        }
    }
}
console.log(mCurry(2)(5)(4))

function calc(sum) {
    return function (amount) {
        return sum + amount
    }
}

// console.log(calc(5)(10));

// let add = calc(10);

// let so = add(5)

// console.log(so, 'sfsdfsfs');


let amount = 10;

function add(sum) {
    return sum + amount
}

amount = 5
let re = add(5)

console.log(re);

function umb(){
    let anj = 5;
    console.log(anj);
    function aaru(){
        anj =4;
        console.log(anj);
    }
    aaru();
}
umb()