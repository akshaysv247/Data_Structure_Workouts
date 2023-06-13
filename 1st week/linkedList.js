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
    arrayToList() {
        let a = [1,2,3,2,1];
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
            while (current.next != null) {
                a.push(current.value);
                current = current.next;
            }
            return a;
        }
    }
    reverse() {
        let curr = this.head;
        let prev = null;
        while (curr.next != null) {
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
    // removeFronEnd() {
    //     if (this.isEmpty()) {
    //         return null;
    //     } else {
            
    //     }
    // }
    removeDuplicates() {
        if (this.isEmpty()){
            return null;
        } else {
            const set = new Set();
            let curr = this.head;
            let prev = null;
            while (curr != null) {
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
}

const list = new LinkedList();

// console.log(list.isEmpty())
// console.log(list.getSize());
// list.prepend(1);
// list.prepend(2)
list.arrayToList()
// list.reverse();
// list.removeFromFront();
// list.removeDuplicates();
// console.log(list.sum());
list.printList();
console.log(list.deleteMid())
// console.log(list)
// console.log(list.listToArray());