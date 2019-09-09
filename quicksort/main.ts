import { quickSort } from './quicksort';

function main() {
  const unsortedArray: number[] = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));
  const sortedArray: number[] = [...unsortedArray];
  console.table({ unsortedArray });
  quickSort(sortedArray, 0, unsortedArray.length - 1);
  console.table({ sortedArray });
}

main();
