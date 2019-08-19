import { Vector2 } from './vector2';
import { JL } from 'jsnlog';

const vectorA: Vector2 = new Vector2(5, 2);
const vectorB: Vector2 = new Vector2(-3, 4);

JL('Vector2').info(`Vector A: ${JSON.stringify(vectorA)}`);

JL('Vector2').info(`Vector B: ${JSON.stringify(vectorB)}`);

JL('Vector2').info(`A.B = ${JSON.stringify(vectorA.dot(vectorB))}`);
