// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.head = null;
//         // this.last = null;
//         this.size = 0;
//     }
//     isEmpty() {
//         return this.size === 0;
//     }
//     getSize() {
//         return this.size;
//     }
//     unshift(value) {
//         const node = new Node(value);
//         if (this.size === 0) {
//             this.first = node;
//             // node = this.last;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size ++;
//     }
//     shift() {
//         if (this.size === 0) {
//             return null;
//         } else {
//             const poppedVal = this.head.value;
//             this.head = this.head.next;
//             this.size --;
//             return poppedVal;            
//         }
//     }
//     push(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             let prev = this.head;
//             while(prev.next) {
//                 prev = prev.next;
//             }
//             prev.next = node;
//             // this.tail = node;
//         }
//         this.size ++;
//     }
    
//       pop() {
//         if (this.size === 0) {
//           return;
//         }
    
//         if (this.head.next === null) {
//           this.head = null;
//           return;
//         }
    
//         let current = this.head;
//         let previous = null;
    
//         while (current.next) {
//           previous = current;
//           current = current.next;
//         }
    
//         previous.next = null;
//         this.size--;
//       }

//     printS() {
//         if (this.isEmpty()) {
//             return;
//         } else {
//             let cur = this.head;
//             while(cur) {
//             console.log(cur.value)
//             cur = cur.next;  
//             }
//         }
//     }

// }

// const stk = new Stack();
// stk.unshift(1);
// stk.unshift(2);
// stk.unshift(3);
// stk.unshift(4);
// stk.shift();
// stk.printS();
// console.log(stk)

// // const stack = new Stack();
// // stack.push(1);
// // stack.push(2);
// // stack.push(3);
// // stack.push(4);
// // stack.pop();
// // stack.printS();
// // console.log(stack);

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
}

class Stack {
    constructr() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    unshift(value) {
        const node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
         this.size ++;
    }
    shift() {
        if (!this.first) return null;
        let temp = this.first;
        let val = this.first.value;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size --;
        return val
    }
    print() {
        if (!this.first) return null;
        let temp = this.first;
        while(temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

const stk = new Stack();
stk.unshift(1);
stk.unshift(2);
stk.unshift(3);
stk.unshift(4);
stk.unshift(5);
stk.print();
console.log(stk.shift())
stk.print();
// console.log(stk);

