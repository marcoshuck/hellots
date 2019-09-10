function isOdd(n: number): boolean {
  return n % 2 === 1;
}

function main() {
  console.log('2 es', isOdd(2) ? 'impar' : 'par');
  console.log('5 es', isOdd(5) ? 'impar' : 'par');
  console.log('7 es', isOdd(7) ? 'impar' : 'par');
}
main();
