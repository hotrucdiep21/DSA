// Node class to represent each element in the list
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Linked List class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node to the end of the list
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Remove a node by its value
    remove(value) {
      if (this.head === null) return;
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next !== null && current.next.value !== value) {
        current = current.next;
      }
  
      if (current.next !== null) {
        current.next = current.next.next;
      }
    }
  
    // Display the list
    print() {
      let current = this.head;
      let listValues = '';
      while (current !== null) {
        listValues += current.value + ' -> ';
        current = current.next;
      }
      console.log(listValues + 'null');
    }
  
    // Insert a node at a specific index
    insertAt(index, value) {
      const newNode = new Node(value);
  
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      let previous = null;
      let i = 0;
  
      while (current !== null && i < index) {
        previous = current;
        current = current.next;
        i++;
      }
  
      if (previous !== null) {
        previous.next = newNode;
        newNode.next = current;
      }
    }
  
    // Remove a node at a specific index
    removeAt(index) {
      if (this.head === null) return;
  
      if (index === 0) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let previous = null;
      let i = 0;
  
      while (current !== null && i < index) {
        previous = current;
        current = current.next;
        i++;
      }
  
      if (previous !== null && current !== null) {
        previous.next = current.next;
      }
    }
  
    // Check if the list contains a node with a given value
    contains(value) {
      let current = this.head;
      while (current !== null) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    // Get the value of the node at a specific index
    get(index) {
      let current = this.head;
      let i = 0;
  
      while (current !== null) {
        if (i === index) {
          return current.value;
        }
        current = current.next;
        i++;
      }
      return null; // Return null if index is out of range
    }
  
    // Return the size (length) of the list
    size() {
      let count = 0;
      let current = this.head;
  
      while (current !== null) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    // Remove all nodes from the list
    clear() {
      this.head = null;
    }
  }
  
  // Example usage
  const list = new LinkedList();
  list.add(10);
  list.add(20);
  list.add(30);
  list.print();  // Output: 10 -> 20 -> 30 -> null
  
  list.insertAt(1, 15);
  list.print();  // Output: 10 -> 15 -> 20 -> 30 -> null
  
  console.log("Contains 20:", list.contains(20)); // Output: true
  console.log("Value at index 2:", list.get(2));  // Output: 20
  console.log("Size of list:", list.size());      // Output: 4
  
  list.removeAt(1);
  list.print();  // Output: 10 -> 20 -> 30 -> null
  
  list.clear();
  list.print();  // Output: null
  