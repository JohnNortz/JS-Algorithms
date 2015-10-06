JavaScript Algorithms and Data-Structures

#Doubly-Linked List

  linked_list.js contains the object DList (this requires node.js file).
  this creates a new list with the inital nodes value equal to the input value for the intialize function.

  includes a few methods for basic manipulation:

  DList.insert(x, atHead) creates a new node with value equal to x input. It places this new node at the head of the list if the the bool 'atHead' is true. If its false places the new node at the tail.


  DList.remove(x) removes the first value it finds with value == x starting with head.


  DList.search(x) parses the list and returns an array of any node objects it finds with value == x.
  if the search returns no nodes then the method returns 'null' instead


  DList.toString() returns a string (also prints it to console) in the form:
    Head: (a) -> (b) -> (c) -> (d) -> (e) -> (f) -> Tail
