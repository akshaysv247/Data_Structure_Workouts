class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insertNode(root, newNode){
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if(value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }
    //Depth-first search (DFS)
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        } else {
            return false;
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        } else {
            return false;
        }
    } 
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        } else {
            return false;
        }
    }
    //Breadth-first search (BFS)
    levelOrder() {
        const Queue = [];
        Queue.push(this.root)
        while (Queue.length) {
            let cur = Queue.shift();
            console.log(cur.value);
            if (cur.left) {
                Queue.push(cur.left);
            }
            if (cur.right) {
                Queue.push(cur.right);
            }
        }
    }
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if(value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

   isValidBST(root) {
    let prev = null;
  
    function inorderTraversal(node) {
      if (!node) {
        return true;
      }
  
      if (!inorderTraversal(node.left)) {
        return false;
      }
  
      if (prev !== null && node.val <= prev) {
        return false;
      }
  
      prev = node.val;
  
      return inorderTraversal(node.right);
    }
  
    return inorderTraversal(root);
  }
}

const bst = new BinarySearchTree();
// console.log(bst.isEmpty());
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(7);
bst.insert(3);
// bst.insert(20);
// bst.insert(13);


// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 5))
// console.log(bst.search(bst.root, 15))
// console.log(bst.search(bst.root, 3))
// console.log(bst.search(bst.root, 7))
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
bst.levelOrder();
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
console.log('after delete')
bst.delete(10);
bst.levelOrder();
console.log(bst.isValidBST(bst.root))
