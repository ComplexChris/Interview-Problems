// Given the linked list implementation below
// write a method which reverses the list.
function ListNode(data) {
  this.data = data;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(data) {
    // Only for Ascending order
    const node = new ListNode(data);

    if (!this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    return node;
  }
  addToTailModified(data) {
    // Only for Descending order
    // Only use this after reverse method is invoked
    const node = new ListNode(data);

    if (!this.tail) {
      console.log("NOPE")
      this.head = node;
    }
    node.next = this.tail
    this.tail = node;
    return node;
  }

  addToHead(data) {
    const node = new ListNode(data);

    if (!this.head) {
      this.tail = node;
    } else {
      this.head.next = node;
    }
    this.head = node;
    // return node;
  }

  traverse(fn) {
    let node = this.tail;
    // console.log("-".repeat(50))
    while (node) {
      fn(node.data);
      node = node.next;
    }
    //console.log("Node Array: ", fn(nodeMaster) )
  }

  // For debugging
  print() {
    console.log("HEAD: ", this.head)
    console.log("TAIL: ", this.tail)
    console.log("\nPrinting...\n"+"-".repeat(50), this.traverse(console.log), "\n"+"-".repeat(50) );
  }

  reverse() {
    // YOUR CODE HERE
    // Converts Ascending to Descending order
    this.tail = this.head
    while (this.head.next!==null) {
      let new_tail = this.head.next;
      this.head = new_tail
    }
  }

  reverseToAscd() {
    // YOUR CODE HERE
    // Converts Descending to Ascending order
    const old_head = this.head
    this.head = this.tail
    this.tail = old_head
    this.tail.next = null
  }
}

const inst = new LinkedList()


let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 65));
alphabet.forEach(char => inst.addToTail(char) );
inst.print();
inst.reverse();
inst.print();

if(false){
  inst.addToTailModified("TAIL ITEM")
  inst.addToHead("HEAD ITEM")
  inst.addToTailModified("TAIL ITEM 2")
  inst.addToHead("HEAD ITEM 2")
  inst.print();
  console.log("REVERSEING....")
  inst.reverseToAscd();

  inst.print();
}

