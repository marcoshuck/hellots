export function quickSort(
    array: number[],
    begin: number = 0,
    end: number = array.length - 1,
  ): void {

  if (end - begin <= 0) {
    return;
  }

  const pivot: number = array[end];

  const partition: number = calculatePartition(array, begin, end, pivot);

  quickSort(array, begin, partition - 1);
  quickSort(array, partition + 1, end);
}

function calculatePartition(array: number[], left: number, right: number, pivot: number) {
  let low: number = left;
  let high: number = right - 1;
  let flag: boolean = false;

  if (left >= right) {
    return low;
  }

  do {
    for (low = left; pivot > array[low]; low++);
    for (high = right - 1; pivot < array[high]; high--);

    if (low > high) {
      flag = true;
    }

    if (low < high) {
      swap(array, low, high);
    }

    swap(array, low, right);
  } while (!flag);

  return low;
}

function swap(array: number[], i: number, j: number): void {
  [array[i], array[j]] = [array[j], array[i]];
}
