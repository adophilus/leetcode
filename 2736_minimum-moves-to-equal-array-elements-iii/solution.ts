const solution1 = (nums: number[]): number => {
  let max: number | null = null;
  let ops = 0;

  for (let i = 0; i < nums.length; i++) {
    if (max === null) {
      max = nums[i];
    }

    if (nums[i] >= max) {
      max = nums[i];
    }
  }

  if (max !== null) {
    for (let i = 0; i < nums.length; i++) {
      while (nums[i] < max) {
        nums[i] += 1;
        ops += 1;
      }
    }
  }

  return ops;
};
