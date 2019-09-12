/**
 * Clase que define una condicion para ser usada en FizzBuzz
 */
class Condition {
  key: string;
  fn: Function;

  constructor(key: string, fn: Function) {
    this.key = key;
    this.fn = fn;
  }
}

/**
 * Lista de condiciones utilizadas en FizzBuzz
 */
class Conditions {
  private _list: Condition[] = [];
  constructor(conditionsBuilder: ConditionsBuilder) {
    this._list = [...conditionsBuilder.list];
  }

  get list(): Condition[] {
    return this._list;
  }
}

/**
 * Constructor de lista de condiciones para utilizar Builder Pattern
 */
class ConditionsBuilder {
  private _list: Condition[] = [];

  get list(): Condition[] {
    return this._list;
  }

  setCondition(condition: Condition) {
    this._list.push(condition);
    return this;
  }

  build() {
    return new Conditions(this);
  }
}

/**
 * Clase FizzBuzz que permite calcular con las condiciones provistas sobre un número dado
 */
class FizzBuzz {
  private conditions: Conditions;

  constructor(conditions: Conditions) {
    this.conditions = conditions;
  }

  public calculate(n: number): string {
    let condition: Condition;
    for (condition of this.conditions.list) {
      if (condition.fn(n)) {
        return condition.key;
      }
    }
    return n.toString();
  }
}

function main() {
  let fizzBuzz: FizzBuzz;
  let i: number;

  const builder: ConditionsBuilder = new ConditionsBuilder();
  const conditions: Conditions = builder
  .setCondition(new Condition('FizzBuzz', (n: number): boolean => (n % 3 === 0 && n % 5 === 0)))
  .setCondition(new Condition('Fizz', (n: number): boolean => n % 3 === 0))
  .setCondition(new Condition('Buzz', (n: number): boolean => n % 5 === 0))
  .build();

  fizzBuzz = new FizzBuzz(conditions);
  for (i = 1; i <= 100; i++) {
    console.log(fizzBuzz.calculate(i));
  }
  return;
}
main();
