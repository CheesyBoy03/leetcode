function sortedSquares(nums: number[]): number[] {
  return nums
    .map((num: number) => num ** 2)
    .sort((a: number, b: number) => a - b);
}
