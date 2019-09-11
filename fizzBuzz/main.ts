/**
 * Función fizzBuzz dinamica que recibe el numero y las condiciones a evaluar
 * @param n Valor numérico a evaluar
 * @param maps Map que relacion una función condicional con su respectivo key
 */
function fizzBuzz(n: number, maps: Map<string, Function>): string {
  let key: string;
  let fn: Function;
  for ([key, fn] of maps) {
    if (fn(n)) {
      return key;
    }
  }
  return n.toString();
}

/**
 * Divisible por tres
 * @param n Número a comprobar si es divisible por tres.
 * @return Verdadero si es divisible, falso si no lo es.
 */
function divisibleByThree(n: number): boolean {
  return n % 3 === 0;
}

/**
 * Divisible por cinco
 * @param n Número a comprobar si es divisible por cinco.
 * @return Verdadero si es divisible , falso si no lo es.
 */
function divisibleByFive(n: number): boolean {
  return n % 5 === 0;
}

/**
 * Divisible por tres y cinco
 * @param n Número a comprobar si es divisible por tres y cinco.
 * @return Verdadero si es divisible por los dos valores, falso si no lo es.
 */
function divisibleByThreeAndFive(n: number): boolean {
  return n % 3 === 0 && n % 5 === 0;
}

/**
 * Funcion principal como punto de entrada de la solución.
 */
function main(): void {
  let i: number;

  const conditions: Map<string, Function> = new Map<string, Function>();

  conditions.set('FizzBuzz', divisibleByThreeAndFive);
  conditions.set('Fizz', divisibleByThree);
  conditions.set('Buzz', divisibleByFive);

  for (i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i, conditions));
  }
}

main();
