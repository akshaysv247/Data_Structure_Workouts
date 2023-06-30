class Node {
    constructor(value) {
        this.value = value;
        this.next  = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        // this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
            // this.tail = node;
        }
        this.size ++;
    }
    arrayToList(a) {
        for (let i = 0; i < a.length; i++) {
            this.append(a[i]);
        }
    }
    listToArray() {
        if (this.isEmpty()) {
            console.log('list is empty');
        } else {
            let a = [];
            let current = this.head;
            while (current.next) {
                a.push(current.value);
                current = current.next;
            }
            return a;
        }
    }
    reverse() {
        let curr = this.head;
        let prev = null;
        while (curr) {
            let nextcurr = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextcurr;
        }
        this.head = prev;
    }
    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        } else {
            const value = this.head.value;
            this.head = this.head.next;
            this.size --;
            return value;
        }
    }
    sort() {
        let cur = this.head;
        while (cur) {
            let nex = cur.next;
            while (nex) {
                if (cur.value > nex.value) {
                    let temp = cur.value;
                    cur.value = nex.value;
                    nex.value = temp;
                }
                nex = nex.next;
            }
            cur = cur.next;
        }
    }
    removeDuplicates() {
        if (this.isEmpty()){
            return null;
        } else {
            const set = new Set();
            let curr = this.head;
            let prev = null;
            while (curr) {
                if (set.has(curr.value)) {
                    prev.next = curr.next;
                } else {
                    set.add(curr.value);
                    prev = curr;
                }
                curr = curr.next;
            }
        }
    }
    sum() {
        let sum = 0 ;
        if (this.isEmpty()) {
            return null;
        } else {
            let curr = this.head;
            while(curr) {
                 sum += curr.value;
                 curr = curr.next;
            }
        }
        return sum;
    }
    deleteMid() {
        if (this.isEmpty()) {
            return null;
        } else {
            let prev = null;
            let fast = this.head;
            let slow = this.head;
            while (fast && fast.next) {
                fast = fast.next.next;
                prev = slow;
                slow = slow.next;
            }
            prev.next = slow.next;
            this.size --;
            return slow.value;

        }

    }
    printList() {
        if (this.isEmpty()) {
            return null;
        } else {
            let curr = this.head;
            while (curr) {
                console.log(curr.value);
                curr = curr.next;
            }
        }
    }
    printRiversly(node){
        if (this.isEmpty()) {
            return ;
        }
        if (node) {
            this.printRiversly(node.next);
            console.log(node.value);
        }
    }
}

const list = new LinkedList();
const b = [20,10,50,40,30]
// console.log(list.isEmpty())
// console.log(list.getSize());
// list.prepend(1);
// list.prepend(2)
list.arrayToList(b)
// list.reverse();
// list.removeFromFront();
// list.removeDuplicates();
// console.log(list.sum());
// console.log(list.deleteMid())
// console.log(list)
// console.log(list.listToArray());
list.printRiversly(list.head)
console.log('##############')
// list.sort();
list.printList();