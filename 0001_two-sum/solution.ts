const solution1 = (nums: number[], target: number): number[] => {
  const memo = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];

    if (memo.has(remainder)) return [i, memo.get(remainder)!];
    memo.set(nums[i], i);
  }

  throw new Error("Invalid input")
};
