class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
        }
  
        currentNode = currentNode.children[char];
      }
  
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!currentNode.children[char]) {
          return false;
        }
  
        currentNode = currentNode.children[char];
      }
  
      return currentNode.isEndOfWord;
    }
  
    startsWith(prefix) {
      let currentNode = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
  
        if (!currentNode.children[char]) {
          return false;
        }
  
        currentNode = currentNode.children[char];
      }
  
      return true;
    }
  }
  
  // Example usage:
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("orange");
  
  console.log(trie.search("apple")); 
  console.log(trie.search("grape")); 
  
  console.log(trie.startsWith("app")); 
  console.log(trie.startsWith("ban")); 
  console.log(trie.startsWith("ora")); 
//   console.log(trie.startsWith("gr"));
console.log(trie)  