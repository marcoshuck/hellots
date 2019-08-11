import { Vector2 } from './vector2';

const vectorA: Vector2 = new Vector2(5, 2);
const vectorB: Vector2 = new Vector2(-3, 4);

console.log('Vector A', vectorA);

console.log('Vector B', vectorB);

console.log('A.B =', vectorA.dot(vectorB));
