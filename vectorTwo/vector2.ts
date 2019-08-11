export class Vector2 {

  private _x: number;
  private _y: number;

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  setCoordinates(x: number, y: number): void {
    this._x = x;
    this._y = y;
  }
  
  add(vector: Vector2): Vector2 {
    return new Vector2(
      this.x + vector.x,
      this.y + vector.y,
    );
  }

  scale(k: number): Vector2 {
    return new Vector2(
      this.x * k,
      this.y * k,
    );
  }

  dot(vector: Vector2): number {
    return (this.x * vector.y) - (this.y * vector.x);
  }

  magnitude(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  normal(): Vector2 {
    return this.scale(1 / (this.magnitude()));
  }
}
