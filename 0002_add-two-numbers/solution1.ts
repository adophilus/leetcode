import { ListNode } from "./list-node";

function listToNum(l: ListNode | null): [number, number] {
  let i = 0;
  let sum = 0;
  let node = l;
  while (node !== null) {
    sum += node.val * 10 ** i;
    node = node.next;
    i += 1;
  }

  return [sum, i];
}

function numToList(num: number, higestDecimalPow: number): ListNode | null {
  let node: ListNode | null = null;
  let _num = num;
  for (let i = higestDecimalPow; i >= 0; i--) {
    const currentDecimalInteger = Math.floor(_num / 10 ** i);
    _num -= currentDecimalInteger * 10 ** i;
    node = new ListNode(currentDecimalInteger, node);
  }

  return node;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let [num1, pow1] = listToNum(l1);
  let [num2, pow2] = listToNum(l2);

  if (pow1 < pow2) {
    num1 = num1 * 10 ** (pow2 - pow1);
  } else {
    num2 = num2 * 10 ** (pow1 - pow2);
  }

  const sum = num1 + num2;

  // gonna have to cheat a lil bit
  const higestDecimalPow = sum.toString().length - 1;

  return numToList(sum, higestDecimalPow);
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

console.log(addTwoNumbers(l1, l2));
