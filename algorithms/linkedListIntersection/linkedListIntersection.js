/*
 *
 * Linked List Intersection
 *
 * Write a function linkedListIntersection that returns the node
 * at which the intersection of two linked lists begins,
 * or null if there is no such intersection.
 *
 * Example:
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return D
 * as the node of intersection.
 *
 *    A → B → C
 *             ↘
 *               D → E → F
 *             ↗
 *        X → Y
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return NULL
 * as there is no point of intersection.
 *
 *    A → B → C → D
 *    X → Y → Z
 *
 */

// Helper function (do not edit)
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}
function getLength(list) {
  if (list.next === null) {
    return 1;
  } else {
    return 1 + getLength(list.next);
  }
}

function linkedListIntersection(list1, list2) {
  // create a helper function to find the length of both lists
  let length1 = getLength(list1);
  let length2 = getLength(list2);
  // check which list is longer
  let diff = Math.abs(length1 - length2);
  let long = length1 > length2 ? list1 : list2;
  let short = length1 > length2 ? list2 : list1;
  // iterate over the lists
  // loop through the longer list
  // compare the nodes
  while (short && long) {
    if (diff > 0) {
      long = long.next;
      diff--;
      continue;
    }
    if (long === short) {
      return long;
    } else {
      long = long.next;
      short = short.next;
      continue;
    }
  }
  return null;
}

// Quadratix time complexity ====>

// function linkedListIntersection(list1, list2) {
//   for (let node1 in list1) {
//     for (let node2 in list2) {
//       if (node1.value === node2.value) {
//         return node1.value;
//       }
//     }
//   }
//   return null;
// }
