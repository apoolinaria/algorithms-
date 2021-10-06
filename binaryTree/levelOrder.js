// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
var levelOrder = function () {
  var result = [];
  var queue = [root];
  while (root.length) {
    var length = queue.length;
    result.push(queue.map((node) => node.val));
    while (length--) {
      var node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return result;
};
