var BinaryNode = require('../lib/binary_node.js');

var BinaryTree = function (value){
  this.root = new BinaryNode(value);
  this.a = ""; //string
  this.s = 0;  //size
  this.d = 0;  //depth
  this.b = 0;  //balance
}

BinaryTree.prototype.insert = function (value) {
  var newNode = new BinaryNode(value);
  var current = this.root;
  var prev = current;

  while (true) {
    if (current == null) {
      if (value >= prev.value) {
        prev.right = newNode;
      }
      else {
        prev.left = newNode;
      }
      current = newNode;
      return newNode.value;
    }

    if (value >= current.value)
      {
        prev = current;
        current = current.right;
      }
    else if (value < current.value)
      {
        prev = current;
        current = current.left;
      }
  }
}

BinaryTree.prototype.contains = function (value) {
  var node = this.root;
  while (true) {
    if (node == null) return null;
    if (node.value == value) return value;
    if (node.value < value) node = node.right;
    if (node.value > value) node = node.left;
  }
}

BinaryTree.prototype.size = function () {
  this.s = 0;
  this.check(this.root);
  return this.s;
}

BinaryTree.prototype.depth = function () {
  this.d = 0;
  this.depthCheck(this.root, 0);
  return this.d;
}

BinaryTree.prototype.balance = function () {
  this.b = 0;
  this.balanceCheck(this.root);
  return this.b;
};

BinaryTree.prototype.to_s = function () {
  var str = this.a = "";
  this.check(this.root);
  console.log(this.a);
  return this.a;
}

BinaryTree.prototype.check = function (node) {
  if (node == null) {return;}
  this.check(node.left);
  this.a += node.value + ", ";
  this.s += 1;
  this.check(node.right);
}

BinaryTree.prototype.depthCheck = function (node, depth) {
  if (node == null) {return;}
  depth = depth + 1
  this.depthCheck(node.left, depth);
  this.depthCheck(node.right, depth);
  if(depth > this.d) {this.d = depth;}
}

BinaryTree.prototype.balanceCheck = function (node) {
  if (node == null) {return;}
  this.balanceCheck(node.left);

  var num = 0;
  if (node.left != null) num -= 1;
  if (node.right != null) num += 1;
  this.b += num;

  //console.log("At node: " + node.value.toString() + "  Balance is: " + num.toString());
  this.balanceCheck(node.right);
}

BinaryTree.prototype.to_s_ordered = function(node) {
  if (node == null) {return;}
  this.to_s_ordered(node.left);
  console.log(node.value + ", ");
  this.to_s_ordered(node.right);
}
BinaryTree.prototype.to_s_preOrder = function(node) {
  if (node == null) {return;}
  console.log(node.value + ", ");
  this.to_s_preOrder(node.left);
  this.to_s_preOrder(node.right);

}
BinaryTree.prototype.to_s_postOrder = function(node) {
  if (node == null) {return;}
  this.to_s_postOrder(node.left);
  this.to_s_postOrder(node.right);
  console.log(node.value + ", ");
}


BinaryTree.prototype.to_s_breadth = function(node) {

  //var bfs = "";
  if (node == null) {
    return;
  }
  else {
    var queue = new Array();
    queue.push(node);
    while (queue[0] != null) {
      var current = queue[0];
      queue.shift(0);

      if(current.left != null) { queue.push(current.left); }
      if(current.right != null) { queue.push(current.right); }

      console.log(current.value + ", ");
    }
  }
  //return bfs;
}


module.exports = BinaryTree;
