import { ListNode } from "./list-node";

// this solution was what I was thinking of for a while now. I thought about the problem and realized that it shouldn't be as complex as what I was trying to do in solution1. I realized that they're basically just asking me to do the addition mathematics I learnt in primary school, the only difference being that the inputs have been reversed, and the output is expected to be reversed as well. So I thought about how I do primary school maths, and this is what I came up with:
// As for the complexity, I'd say that it's O(max(M, N)) where M is the length of the first list and N is the length of the second list. We walk through both lists at the same time, so there's no nested looping or anything like that, we pass through the inputs exactly once. For the space complexity I'd say it's O(max(M, N) + 1). The reasoning behind it is that the result list we return to the end user would be at most the length of M or the length of N (whichever is longer) +1, the +1 comes from the carry, if there's a pending carry then a new node would need to be 'allcoated' for it.
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0;
  let node1 = l1;
  let node2 = l2;
  // I defined this var, cos this the 'head' we're gonna return to the caller
  let resultNode: ListNode | null = null;
  // We use this variable to keep track of the current node we're on, so as to add more nodes to the list.
  let currentResultNode: ListNode | null = null;

  while (true) {
    // break condition: if there is no node in the first list, second list, and no carry, there's no need to iterate anymore
    if (node1 === null && node2 === null && carry === 0) {
      break;
    }

    const node1Val = node1?.val ?? 0;
    const node2Val = node2?.val ?? 0;
    // calculat the sum of the node values
    let sum = node1Val + node2Val;

    // if there's a carry present, then add it to the sum and zero the carry
    if (carry) {
      sum = sum + carry;
      carry = 0;
    }

    // if sum is greater than or equal to 10, then minus 10 from the sum, then set the carry 'flag'
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    }

    // if this is the first time (i.e: there's no resultNode, then we set it , and also set the current resultNode)
    if (resultNode === null) {
      resultNode = new ListNode(sum, resultNode);
      currentResultNode = resultNode;
    } else {
      // at this point, currentResultNode cannot be null
      if (currentResultNode === null) throw new Error("unreachable");

      // we set the next of the currentResultNode and then advance the currentResultNode pointer
      currentResultNode.next = new ListNode(sum, null);
      currentResultNode = currentResultNode.next;
    }

    // we advance the node pointers
    node1 = node1?.next ?? null;
    node2 = node2?.next ?? null;
  }

  // we return the resultNode
  return resultNode;
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

console.log(addTwoNumbers(l1, l2));
