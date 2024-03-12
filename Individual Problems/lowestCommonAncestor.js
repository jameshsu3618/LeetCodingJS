/*
Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).

Each node will have a reference to its parent node. The definition for Node is below:

class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)."
*/


var lowestCommonAncestor = function(p, q) {
  let a = p, b = q;

  // Continue until both pointers find the common ancestor
  while (a !== b) {
      // If pointer a reaches null (root's parent), switch to node q
      a = a === null ? q : a.parent;
      // If pointer b reaches null (root's parent), switch to node p
      b = b === null ? p : b.parent;
  }

  // At this point, a and b will be at the LCA
  return a;
};

/*

        10
       /  \
      6    14
     / \   / \
    4   8 12  16
   / \
  3   5

 find the LCA of nodes 6 and 3.

Initialization:
a starts at 6.
b starts at 3.
Now, we'll move through the iterations:

First Iteration:

a is not null, so it moves to its parent, node 10.
b is not null, so it moves to its parent, node 4.
Second Iteration:

a is not null, so it would move to its parent, but node 10 has no parent (it's the root), so a becomes q, which is node 3.
b is not null, so it moves to its parent, node 6.
Third Iteration:

a is not null, so it moves to its parent, node 4.
b is at node 6, the target node for a, but since b is not null, it moves to its parent, node 10.
Fourth Iteration:

a is not null, so it moves to its parent, node 6.
b is not null, so it would move to its parent, but node 10 has no parent, so b becomes p, which is node 6.
After the fourth iteration, both a and b point to node 6, so the loop exits, and node 6 is returned as the LCA.

Detailed Explanation:
The pointers a and b never actually stay still; they always move either to their parent or switch to the opposite node's initial position when they reach null.
The key to this algorithm is that each pointer traverses the height of the tree exactly once, considering the switch. This guarantees that they will meet at the lowest common ancestor regardless of the nodes' positions in the tree.
The loop continues until the pointers meet, which occurs at the LCA. They will always meet at this point because, by the time they converge, they've collectively traversed the entire height of the tree, ensuring they encounter their lowest common ancestor.
By iterating in this manner, the algorithm efficiently finds the LCA without additional space for storing ancestors or complex tree traversals, making it a succinct and effective solution. */ 

function lowestCommonAncestor(root, p, q) {
  let ans = null;

  function recurseTree(currentNode) {
      if (currentNode === null) {
          return false;
      }

      let left = recurseTree(currentNode.left) ? 1 : 0;
      let right = recurseTree(currentNode.right) ? 1 : 0;
      let mid = (currentNode === p || currentNode === q) ? 1 : 0;

      if (mid + left + right >= 2) {
          ans = currentNode;
      }

      return (mid + left + right > 0);
  }

  recurseTree(root);
  return ans;
}

//recursive
