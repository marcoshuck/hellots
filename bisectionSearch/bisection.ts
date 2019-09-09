export async function bisectionSearch(array: number[], search: number): Promise<number> {
  let left: number = 0;
  let right: number = array.length - 1;
  let middle: number;
  let position: number = -1;

  while ((position === -1) && (left <= right)) {
    middle = Math.floor((left + right) / 2);

    if (array[middle] === search) {
      position = middle;
    } else if (array[middle] > search) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    console.table({
      left,
      middle,
      right,
    });
  }
  return position;
}
