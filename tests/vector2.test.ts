import { Vector2 } from '../vectorTwo/vector2';

test('Should create a vector with X = 1, Y = 2', () => {
  const vector: Vector2 = new Vector2(1, 2);

  expect(vector).toBeDefined();
  expect(vector).toHaveProperty('x', 1);
  expect(vector).toHaveProperty('y', 2);
});

test('Should change X value when assigning a different number', () => {
  const vector: Vector2 = new Vector2(1, 2);

  expect(vector).toHaveProperty('x', 1);

  vector.x = 2;

  expect(vector).toHaveProperty('x', 2);
});

test('Should change Y value when assigning a different number', () => {
  const vector: Vector2 = new Vector2(1, 2);

  expect(vector).toHaveProperty('y', 2);

  vector.y = 1;

  expect(vector).toHaveProperty('y', 1);
});

test('Should change X and Y to a different value with setCoordinates()', () => {
  const vector: Vector2 = new Vector2(1, 2);

  vector.setCoordinates(3, 5);

  expect(vector).toHaveProperty('x', 3);
  expect(vector).toHaveProperty('y', 5);
});

test('Should add two different vectors and return the result', () => {
  const vectorA: Vector2 = new Vector2(2, 5);
  const vectorB: Vector2 = new Vector2(3, 1);

  const result: Vector2 = vectorA.add(vectorB);

  expect(result).toBeDefined();
  expect(result).toBeInstanceOf(Vector2);
  expect(result).toHaveProperty('x', 2 + 3);
  expect(result).toHaveProperty('y', 5 + 1);
});

test('Should add two different vectors and the result should be the same for both A and B', () => {
  const vectorA: Vector2 = new Vector2(2, 5);
  const vectorB: Vector2 = new Vector2(3, 1);
  const resultFromA: Vector2 = vectorA.add(vectorB);
  const resultFromB: Vector2 = vectorB.add(vectorA);
  expect(resultFromA).toEqual(resultFromB);
});

// tslint:disable-next-line: max-line-length
test('Should multiply a vector with a number and the result should be another vector scaled by that number', () => {
  const vector: Vector2 = new Vector2(2, 5);
  const c: number = 2;
  const result: Vector2 = vector.scale(c);
  expect(result).toHaveProperty('x', 4);
  expect(result).toHaveProperty('y', 10);
});

test('Should multiply two vectors and the result must be a number', () => {
  const vectorA: Vector2 = new Vector2(2, 5);
  const vectorB: Vector2 = new Vector2(3, 1);
  const result: number = vectorA.dot(vectorB);
  expect(result).toBe((2 * 1) - (3 * 5));
});
