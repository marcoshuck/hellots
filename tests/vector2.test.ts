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
  expect(result).toHaveProperty('x', 5);
  expect(result).toHaveProperty('y', 6);
});