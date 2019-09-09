import { quickSort } from './quicksort';

function main() {
  const unsortedArray: number[] = [1, 9, 5, 3, 6, 8, 2, 25, 72, 45, 33, 4];
  let sortedArray: number[] = [...unsortedArray];
  console.table({ unsortedArray });
  sortedArray = quickSort(unsortedArray);
  console.table({ sortedArray });
}

main();
