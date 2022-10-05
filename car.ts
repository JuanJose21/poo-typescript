class Car {
  year: number;
  color: string;
  model: string;
  private _fuel: number;

  constructor(model: string, year: number, color: string, fuel: number) {
    this.year = year;
    this.color = color;
    this._fuel = fuel;
    this.model = model;
  }

  start(): void {}

  accelerate(): void {
    this._fuel--;
  }

  stop(): void {}

  get fuel(): number {
    return this._fuel;
  }
}

class Ferrari extends Car {
  openSunroof(): void {}
  closeSunroof(): void {}
}

class Porsche extends Car {}

export { Car, Ferrari, Porsche };
