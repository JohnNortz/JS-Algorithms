var expect = require('chai').expect;
var BinaryTree = require('../lib/binary_search_tree.js');
var BinaryNode = require('../lib/binary_node.js');

describe("Binary Search Tree", function() {
  t = new BinaryTree(15);
  t.insert(10);
  t.insert(11);
  t.insert(23);
  t.insert(53);
  t.insert(3);

  it('can have new nodes added and into appropriate locations', function(){

    expect(t.root.value).to.equal(15);
    expect(t.root.right.value).to.equal(23);
    expect(t.root.left.value).to.equal(10);
    expect(t.root.right.right.value).to.equal(53);
    expect(t.root.left.left.value).to.equal(3);

    t.to_s();
  });

  it('returns proper size if tree.size() is called', function(){

    expect(t.size()).to.equal(6);

    t.insert(2);

    expect(t.size()).to.equal(7);

  });

  it('returns proper depth if tree.depth() is called', function(){

    expect(t.depth()).to.equal(4);

    t.insert(100);
    t.insert(101);

    expect(t.depth()).to.equal(5);

    t.to_s();
  });

  it('returns proper balance if tree.balance() is called', function(){
    t = new BinaryTree(15);
    t.insert(10);
    t.insert(11);
    t.insert(23);
    t.insert(53);
    t.insert(3);
    t.insert(2);

    expect(t.balance()).to.equal(0);

    t.insert(1);

    expect(t.balance()).to.equal(-1);

  });

  it('tree can be searched for an existing value and returns null if not found', function(){
    t = new BinaryTree(15);
    t.insert(10);
    t.insert(11);
    t.insert(23);
    t.insert(53);


    expect(t.contains(2)).to.equal(null);
    expect(t.contains(53)).to.equal(53);
  });
});
