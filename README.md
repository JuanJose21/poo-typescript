# Programación Orientada a Objetos

## ¿Qué es?

Es un paradigma de la programación que busca abstraer la lógica para encapsularla en objetos.
Los paradigmas son formas o estilos para programar
Anteriormente, se usaba la _Programación procedural_ (Se declaraban funciones y variables sueltas en el código).
Para crear los objetos debemos definir una _clase_; _la clase_ es una plantilla donde se definen las propiedades y los métodos. Un objeto es la instancia de dicha clase. Después de instanciarlo podemos usar la clase atreves del objeto, accedemos a las propiedades o métodos de esta.

## Principios:

### 1. Abstracción

Capacidad de abstraer (obtener) algo hacia nuestro código para convertirlo en una clase.
Facilita la utilización de este.

Ejemplo:
Tenemos la clase Car `car.ts`

```javascript
export class Car {
  year: number;
  color: string;

  constructor(year: number, color: string) {
    this.year = year;
    this.color = color;
  }

  start(): void {}

  accelerate(): void {}

  stop(): void {}
}
```

Vemos que en las propiedades de la clase tenemos `year` y `color`

Para instanciarlo, lo hacemos con `let car = new Car();`, pero debemos pasarle las propiedades de la clase; entonces quedaría: `let car = new Car(2020, 'Rojo');`
Esto, ya me permite empezar a usarlo, ejemplo:

```javascript
let car = new Car(2020, 'Rojo');
car.start();
car.accelerate();
car.stop();
```

Por medio de la abstracción podemos usar la clase.

### 2. Encapsulamiento

Es proteger las propiedades del acceso no autorizado. Ejemplo, a nuestra clase Car, le agregamos la propiedad `fuel`

```javascript
export class Car {
  year: number;
  color: string;
  fuel: number;

  constructor(year: number, color: string, fuel: number) {
    this.year = year;
    this.color = color;
    this.fuel = fuel;
  }

  start(): void {}

  accelerate(): void {
    this.fuel--;
  }

  stop(): void {}
}
```

Cada que se llama a la función `accelerate()`, va descontando la gasolina.

```javascript
let car = new Car(2020, 'Rojo', 10);
car.accelerate();
```

Iniciamos el fuel con 10 y cuando se llama a la función `accelerate()` nos descontaría 1, entonces quedando la `fuel` en 9.

Pero, ¿que pasaría si un programador intenta hacer `car.fuel = 10;`?
La `fuel` vuelve a tener 10. Por eso debemos proteger esta propiedad por medio del encapsulamiento y para acceder a ella seria por medio de los `getter and setter`.

Le vamos a agregar un \_ a nuestra propiedad `fuel` para poder identificarla, quedandon entonces como `_fuel`, le vamos a declarar como privada (private), de esta forma, no se podrá acceder a ella desde afuera.

En este caso, solo usaremos el _get_, porque solo queremos leer la propiedad. Creando la función nos quedaría de la siguiente forma.

```javascript
export class Car {
  year: number;
  color: string;
  private _fuel: number;

  constructor(year: number, color: string, fuel: number) {
    this.year = year;
    this.color = color;
    this._fuel = fuel;
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
```

Ya quedó protegida la propiedad \_fuel de nuestra clase a la manipulación de otros. Solo se puede iniciarlizar una vez atraves del constructor.
Para leer la propiedad mediante el get lo hacemos: `car.fuel`;

## Herencia

Es la cualidad de heredar las cualidades de otra clase.
Ejemplo: Nuestra clase `Car`, será la clase base y crearemos las clases 'Hijas' las cuales van a heredad las propiedades o metodos. Supongamos que queremos crear la clase `Ferrari` y va a tener las mismas cualidades de `Car`, no vamos a hacer un copy paste para la nueva clase, sino que lo que haremos es _HEREDAR_ esas cualidades. Lo haremos por medio de `extends`

```javascript
class Ferrari extends Car {}
```

Siendo así, podemos heredar `Car` las veces que sea necesaria, y cada clase hija poder implementar sus propios metodos y variables.

```javascript
class Ferrari extends Car {
  openSunroof(): void {}
  closeSunroof(): void {}
}
class Porsche extends Car {}
```

Cuando instanciamos las clases hijas, podemos ver que tienen los metodos y variables de la clase base, ademas de los nuevos implementados en esta misma.

```javascript
let ferrari = new Ferrari(2020, 'Rojo', 15);
let porsche = new Porsche(2020, 'Azul', 18);

ferrari.start();
ferrari.openSunroof();
ferrari.closeSunroof();

porsche.start();
```

## Polimorfismo

La capacidad de poder trabajar con clases distintas, sea que compartan metodos o propiedades en comun, pero comportandose de manera diferente entre si.
Por ejemplo: agregamos la propiedad `model` a la clase Car, al instanciarlo deberiamos hacerlo de la siguiente manera:

```javascript
let car = new Car('', 2020, 'Rojo', 10);
let ferrari = new Ferrari('AX-1', 2020, 'Rojo', 15);
let porsche = new Porsche('PS-A', 2020, 'Azul', 18);
```

Creando una función para obtener el modelo del carro, vemos que si le pasamos en objeto ferrari, funciona bien

```javascript
let ferrari = new Ferrari('AX-1', 2020, 'Rojo', 15);

function getModel(car: Ferrari) {
  console.log(car.model);
}

getModel(ferrari);
```

Pero, ¿Que pasa si le pasamos el objeto porsche? `getModel(porsche);`
Tendriamos un error, pues le definimos a la función getModel que le ibamos a pasar un objeto de tipo Ferrari, el cual tiene las funciones de openSunroof y closeSunroof. La solución para este caso, sería pasarle un parametro de tipo `Car` que es la clase base.

```javascript
let ferrari = new Ferrari('AX-1', 2020, 'Rojo', 15);
let porsche = new Porsche('PS-A', 2020, 'Azul', 18);

function getModel(car: Car) {
  console.log(car.model);
}

getModel(ferrari);
getModel(porsche);
```

# Resumen:

La POO es un paradigma que nos ayuda a tener un codigo mas limpio y funcional. La POO se basa en 4 principios:

1. Abstracción: Nos permite crear los objetos
2. Encapsulamiento: Nos permite tener propiedades protegidas, para que no sean modificadas desde afuera.
3. Herencia: Nos permite heredar propiedades y metodos de la clase 'Padre' a la clase 'hija'
4. Polimorfismo: Nos permite cambiar el comportamiento de algun metodo heredado.
