export function quickSort(array: number[], from: number, to: number): void {
  const pivot: number = array[to];
  let left: number = from - 1;
  const right: number = to;

  if (from > to) {
    return;
  }

  left = getPortion(array, left, right, pivot);

  swap(array, left, to);

  quickSort(array, from, left - 1);
  quickSort(array, left + 1, to);
}

function getPortion(array: number[], left: number, right: number, pivot: number): number {
  let flag: boolean = false;
  while (!flag) {
    while (array[++left] < pivot);
    while (array[--right] > pivot);

    if (left < right) {
      swap(array, left, right);
    }

    if (left >= right) {
      flag = true;
    }
  }
  return left;
}

function swap(array: number[], from: number, to: number) {
  [array[from], array[to]] = [array[to], array[from]];
}
