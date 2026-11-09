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
  const dummyNode = new ListNode(0);
  let tailNode = dummyNode;

  while (node1 !== null || node2 !== null || carry !== 0) {
    const sum = (node1?.val ?? 0) + (node2?.val ?? 0) + carry;
    // if sum is greater than or equal to 10, then set the carry 'flag'
    carry = sum >= 10 ? 1 : 0;

    tailNode.next = new ListNode(sum % 10, null);
    tailNode = tailNode.next;

    // we advance the node pointers
    node1 = node1?.next ?? null;
    node2 = node2?.next ?? null;
  }

  return dummyNode.next;
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

console.log(addTwoNumbers(l1, l2));
