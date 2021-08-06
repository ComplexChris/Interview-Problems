class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Every value in the Left subtree less than root
// Every value in the right subtree is greater than or equal to the root
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.heights = {left:0, right:0}
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode, height=0) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode, height+1);
        this.heights.left = height
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        this.heights.right = height
      } else {
        this.insertNode(node.right, newNode, height+1);
      }
    }
  }

  search(item,  node = this.root) {
    // Your code here.
    let count = 0;
    this.traverse( (data)=>{ count+= (data==item) ? 1:0 } );
    console.log(`Found ${count} instances of item: ${item}`);

    if(node.data == item){ return true}
    //this.search(item, (node.data < item) ? : )
  }

  traverse(fn, node = this.root) {
    if (!node) return;

    this.traverse(fn, node.left);
    fn(node.data);
    this.traverse(fn, node.right);
  }

  print() {
    this.traverse(console.log);
  }

  rotate(){
    console.log("Rotating: ", this.root)
    const {left, right} = {...this.heights}
    if(left==right) return;
    else{
      const old_root = this.root
      [this.root, this.heights.left, this.heights.right] = (left<right) ? [this.root.right, this.heights.left+1, this.heights.right-1] : [this.root.left, this.heights.left-1,  this.heights.right+1]
      (left<right) ? : ;
      this.rotate()
    }
  }


}

const tree = new BinarySearchTree();
tree.insert(90);
tree.insert(7);
tree.insert(98);
tree.insert(22);
tree.insert(7);
tree.print();
//tree.search(7)
//tree.search(22)
tree.rotate()
