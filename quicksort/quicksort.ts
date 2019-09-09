export function quickSort(array: number[], begin: number = 0, end: number = array.length - 1): number[] {
  if (end - begin <= 0) {
    return array;
  }
  const pivot: number = array[end];

  const partition: number = calculatePartition(array, begin, end, pivot);

  quickSort(array, begin, partition - 1);
  quickSort(array, partition + 1, end);

  return array;
}

function calculatePartition(array: number[], left: number, right: number, pivot: number) {
  let low: number = left;
  let high: number = right - 1;
  while (true) {
    while (array[++low] < pivot);

    while (array[--high] > pivot);

    if (low >= high) {
      break;
    }

    swap(array, high, low);
  }
  swap(array, low, right);
  return low;
}

function swap(array: number[], i: number, j: number): void {
  [array[i], array[j]] = [array[j], array[i]];
}
