var expect = require('chai').expect;
var DList = require('../lib/linked_list.js');
var Node = require('../lib/node.js');

describe("Linked list", function() {
  it('can have new nodes added to it at head', function(){
    var dl = new DList(5);
    dl.insert(2, true);

    expect(dl.head.value).to.equal(2);
  });

  it('can have new nodes added to it at tail', function(){
    var dl = new DList(5);
    dl.insert(2, false);

    expect(dl.tail.value).to.equal(2);
  });

  it('can have nodes removed from it', function(){
    var dl = new DList(5);
    dl.insert(2, true);
    dl.remove(2)

    expect(dl.head.value).to.equal(5);
  });

  it('returns nill if remove value that doesnt exist', function(){
    var dl = new DList(5);
    dl.insert(2, true);

    expect(dl.remove(4)).to.equal(null)
    expect(dl.head.value).to.equal(2);
  });

  it('can be parsed for a specific value and returns null if not found', function(){
    var dl = new DList(5);
    dl.insert(2, true);
    dl.insert(4, true);
    dl.insert(8, true);
    dl.insert(16, true);

    dlResult = dl.search(16);

    expect(dlResult[0].value).to.equal(16);
    expect(dl.search(7)).to.equal(null);
  });

  it('can print list as string', function(){
    var dl = new DList(5);
    dl.insert(2, true);
    dl.insert(4, true);
    dl.insert(8, true);
    dl.insert(16, true);
    dl.insert(23, true);
    dl.insert(45, true);
    dl.insert(87, true);
    dl.insert(168, true);

    expect(dl.toString()).to.be.a('string');
  });
});
