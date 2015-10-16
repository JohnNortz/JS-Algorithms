var Node = require('../lib/node.js');

var DList = function (value){
  this.head = (new Node(value));
  this.tail = this.head;
}


DList.prototype.insert = function (value, atHead) {
  var newNode = new Node(value);
  if (atHead) {
    newNode.nxt = this.head;
    this.head = newNode;
    this.head.nxt.prev = this.head;
  } else {
    this.tail.nxt = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
}

DList.prototype.remove = function(value) {
  current = this.head;
  while (current) {
    if (current.value == value)
    {
      if (current.prev){ current.prev.nxt = current.nxt; }
      else { this.head = current.nxt; }
      if (current.nxt){ current.nxt.prev = current.prev; }
      else { this.tail = current.prev; }
      console.log("removed node with value " + current.value + ".\n");
      return current;
    }
    current = current.nxt;
  }
  console.log("did not find value " + value.toString());
  return null;
}

DList.prototype.search = function(value) {
  current = this.head;
  var results = [];
  while (current)
  {
    if (current.value == value)
    {
      results.push(current);
    }
    current = current.nxt;
  }
  console.log("found " + results.length + " node(s) with value " + value + ".\n");
  if (results[0] == null) return null;
  return results;
}

DList.prototype.toString = function(){
  current = this.head;
  var s = "Head: ";
  var a = "Head: ";
  while(current)
  {
    a += current.value + ', '
    s += "(" + current.value + ") -> ";
    current = current.nxt;
  }
  a += "Tail"
  s += "Tail"
  console.log(s);
  return a;
}

module.exports = DList;
