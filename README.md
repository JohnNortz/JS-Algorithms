JavaScript Algorithms and Data-Structures

most recent changes: added 4 traversal methods for binary_search_tree

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
    changed to comma seperated return string



# Binary Search Tree

  binary_search_tree.js and binary_node.js allow for the creation and manipulation of Binary Search Trees.

  A new tree can be created using var name = new BinaryTree(root_node_value)

  Once you have instantiated a new tree there are a few methods included for manipulation and exploratoin of the tree:

    > tree_name.insert(value) is how new nodes are added to the tree. By passing in a data value, a new node with that value will be added to the correct location in the tree (as long as the tree is made of objects with a '<' comparison method). The method will look through the tree for a space for the new value while keeping the new nodes to the right of all values less than or equal to the new nodes value, and to the left of all value greater than the new nodes value. This will keep the tree in order numerically from left to right.

    > tree_name.to_s() will return a comma-seperated list of all values in the node from least to greatest in value

    > tree_name.contains(value) is the basic search function for the tree. Passing in a value will return that value of a node in the tree contains that value. Returns null if value if not present in the tree.

    > tree_name.size() will return the total nodes in the tree.

    > tree_name.depth() this returns the maximum depth of the tree. A tree with 3 nodes has a depth of either 2 or 3 (2 if the tree is complete and balanced for example)

    > tree_name.balance() will return the balance of the tree. Balance shows the distribution of nodes in the tree. A node with 2 children or no children returns a balance of 0, it is balanced. If a node only has one child it is not balanced. If that one child is in the left slot of the node, the node is said to have a balance of -1. It has a balance of 1 if the child is in the right slot. This method returns the total balance of the tree

    > tree_name.to_s_preOrder, tree_name.to_s_postOrder, tree_name.to_s_ordered
      Each of these print to console their repecitve tree traversals.

    > tree_name.to_s_Breadth  will print to console the tree after traversin one layer at a time from root level downwards.

binary_search_tree_test.js is included for examples and t guarentee functionality.
