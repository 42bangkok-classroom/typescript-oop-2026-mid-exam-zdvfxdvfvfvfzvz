function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const arr3 = [...arr1, ...arr2];
  const uniqueValues: Set<number> = new Set(arr3);
  const array_uni = Array.from(uniqueValues.values());
  return array_uni;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];