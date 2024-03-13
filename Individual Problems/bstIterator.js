var BSTIterator = function(root) {
  this.nodes = [];
  this.index = 0;
  this._inorder(root);
};

BSTIterator.prototype._inorder = function(root) {
  if (!root) return;
  this._inorder(root.left);
  this.nodes.push(root.val);
  this._inorder(root.right);
} 

/**
* @return {number}
*/
BSTIterator.prototype.next = function() {
  return this.nodes[this.index++];
};

/**
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
  return this.index < this.nodes.length;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = [];
  this._inOrderLeft(root);
};

BSTIterator.prototype._inOrderLeft = function(node) {
  if (node) {
      this.stack.push(node);
      this._inOrderLeft(node.left);
  }
}

/**
* @return {number}
*/
BSTIterator.prototype.next = function() {
  let topNode = this.stack.pop();
  this._inOrderLeft(topNode.right);
  return topNode.val;
};

/**
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
 return this.stack.length >0;
};