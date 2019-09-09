import { bisectionSearch } from './bisection';

async function main() {
  const array: number[] = [1, 5, 23, 35, 42, 57, 69, 71, 88, 93, 102];
  let result: number;
  result = await bisectionSearch(array, 5);
  console.log('El resultado ha sido encontrado en la posición:', result);
}

main();
