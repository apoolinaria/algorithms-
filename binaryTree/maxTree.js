var maxDepth = function (root) {
  //     chose one side to iterate save the value to left
  //      save the number of nodes to right
  //     return the longest
  //     while root.left does not equal to null or root.right is not null
  //
  if (root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
