var reverseList = function (head) {
  let current = head;
  let next = null;
  let previous = null;
  while (!head) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};
