var hasCycle = function (head) {
  if (head === null) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next || !fast.next.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
