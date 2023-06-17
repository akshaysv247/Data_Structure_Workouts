class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(value) {
      const childNode = new TreeNode(value);
      this.children.push(childNode);
      return childNode;
    }
  }

  // Create the root node
const root = new TreeNode('A');

// Create child nodes and connect them to the root
const nodeB = root.addChild('B');
const nodeC = root.addChild('C');

// Create child nodes for nodeB
const nodeD = nodeB.addChild('D');
const nodeE = nodeB.addChild('E');

// Create child nodes for nodeC
const nodeF = nodeC.addChild('F');

// Print the tree structure
console.log(root);
