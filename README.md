# Patrones de Diseño en TypeScript con Vite 🚀

Este repositorio contiene ejemplos claros y prácticos de varios patrones de diseño implementados en TypeScript, utilizando una aplicación de Vite. Los patrones de diseño incluidos son:

- Adapter 🔌
- Abstract Factory 🏭
- Builder 🏗️
- Factory Method 🏭
- Prototype 🧬
- Singleton 🔒
- Otros patrones importantes 🎯

Cada ejemplo está diseñado para ser fácil de entender y aplicar en proyectos reales.

## Tabla de Contenidos 📚

1. [Introducción](#introducción)
2. [Requisitos Previos](#requisitos-previos)
3. [Instalación](#instalación)
4. [Patrones de Diseño](#patrones-de-diseño)
    - [Adapter](#adapter)
    - [Abstract Factory](#abstract-factory)
    - [Builder](#builder)
    - [Factory Method](#factory-method)
    - [Prototype](#prototype)
    - [Singleton](#singleton)
5. [Ejercicios y Soluciones](#ejercicios-practicos)
6. [Contribuciones](#contribuciones)
7. [Licencia](#licencia)

---

## Introducción 📖

Este proyecto tiene como objetivo proporcionar ejemplos claros y prácticos de los patrones de diseño más comunes y utilizados en el desarrollo de software. Cada patrón está implementado en TypeScript y se ejecuta en una aplicación de Vite para facilitar su comprensión y uso.

Los patrones de diseño son soluciones generales a problemas comunes de diseño de software, y conocer cómo aplicarlos correctamente mejora la arquitectura y la mantenibilidad de las aplicaciones.

---

## Requisitos Previos ⚙️

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu máquina:

- [Node.js](https://nodejs.org/) 🌐
- npm o [yarn](https://yarnpkg.com/) 📦
- Conocimientos básicos de TypeScript 📘

---

## Instalación 🛠️

Sigue estos pasos para clonar el repositorio e instalar las dependencias:

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/cristianManco/Design-Patterns.git
    ```
2. **Navega al directorio del proyecto**:
    ```bash
    cd  Design-Patterns
    ```
3. **Instala las dependencias**:
    ```bash
    npm install
    # o
    yarn install
    ```
4. **Inicia la aplicación**:
    ```bash
    npm run dev
    # o
    yarn dev
    ```

---

## Patrones de Diseño 🧩

### Adapter 🔌

El patrón **Adapter** permite que dos interfaces incompatibles trabajen juntas al actuar como un puente entre ambas.

#### Ejemplo

```typescript
interface Target {
    request(): string;
}

class Adaptee {
    specificRequest(): string {
        return "Adaptee's specific request";
    }
}

class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    request(): string {
        return this.adaptee.specificRequest();
    }
}

// Uso del Adapter
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log(adapter.request()); // Output: Adaptee's specific request
```

---

### Abstract Factory 🏭

El patrón **Abstract Factory** proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

#### Ejemplo

```typescript
interface AbstractProductA {
    usefulFunctionA(): string;
}

interface AbstractProductB {
    usefulFunctionB(): string;
}

class ConcreteProductA1 implements AbstractProductA {
    usefulFunctionA(): string {
        return "Result of the product A1.";
    }
}

class ConcreteProductB1 implements AbstractProductB {
    usefulFunctionB(): string {
        return "Result of the product B1.";
    }
}

interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

// Uso de la Abstract Factory
const factory1 = new ConcreteFactory1();
const productA = factory1.createProductA();
const productB = factory1.createProductB();
console.log(productA.usefulFunctionA()); // Output: Result of the product A1.
console.log(productB.usefulFunctionB()); // Output: Result of the product B1.
```

---

### Builder 🏗️

El patrón **Builder** separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción cree diferentes representaciones.

#### Ejemplo

```typescript
class Product {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}`);
    }
}

interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

class ConcreteBuilder implements Builder {
    private product: Product;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product();
    }

    public producePartA(): void {
        this.product.parts.push('PartA');
    }

    public producePartB(): void {
        this.product.parts.push('PartB');
    }

    public producePartC(): void {
        this.product.parts.push('PartC');
    }

    public getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

// Uso del Builder
const director = new Director();
const builder = new ConcreteBuilder();
director.setBuilder(builder);

console.log('Standard basic product:');
director.buildMinimalViableProduct();
builder.getProduct().listParts();

console.log('Standard full featured product:');
director.buildFullFeaturedProduct();
builder.getProduct().listParts();
```

---

### Factory Method 🏭

El patrón **Factory Method** define una interfaz para crear un objeto, pero permite a las subclases alterar el tipo de objetos que se crearán.

#### Ejemplo

```typescript
interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of ConcreteProduct2}';
    }
}

abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

// Uso del Factory Method
const creator1 = new ConcreteCreator1();
console.log(creator1.someOperation());

const creator2 = new ConcreteCreator2();
console.log(creator2.someOperation());
```

---

### Prototype 🧬

El patrón **Prototype** permite copiar objetos existentes sin depender de sus clases concretas, asegurando que las copias sean independientes del original.

#### Ejemplo

```typescript
interface Prototype {
    clone(): Prototype;
}

class ConcretePrototype1 implements Prototype {
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: ConcretePrototype1) {
        this.prototype = prototype;
    }
}

// Uso del Prototype
const p1 = new ConcretePrototype1();
p1.primitive = 245;
p1.component = new Date();
p1.circularReference = new ComponentWithBackReference(p1);

const p2 = p1.clone();
console.log(p2.primitive);
console.log(p2.component);
console.log(p2.circularReference);
```

---

### Singleton 🔒

El patrón **Singleton** asegura que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.

#### Ejemplo

```typescript
class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someBusinessLogic() {
        console.log("Singleton instance logic.");
    }
}

// Uso del Singleton
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // Output: true
```

---

## Ejercicios Practicos 📝

### Ejercicio 1: Implementa el patrón Observer en TypeScript

El patrón **Observer** permite que un objeto notifique a otros objetos cuando cambia su estado. Implementa este patrón utilizando TypeScript

 y ejemplos prácticos.


---

## Ejercicio 2: Implementa el patrón Chain of Responsibility en TypeScript

### Descripción

El patrón **Chain of Responsibility** permite que un grupo de objetos tenga la oportunidad de manejar una solicitud, pasando la solicitud por una cadena de manejadores hasta que uno de ellos la procese.

### Ejercicio

Imagina que estás creando un sistema de procesamiento de solicitudes en el que cada solicitud puede ser manejada por diferentes departamentos. Cada departamento tiene su propio conjunto de reglas para aceptar o rechazar la solicitud. Si un departamento no puede manejar la solicitud, esta debe pasar al siguiente departamento en la cadena.

**Requisitos**:
1. Implementa una cadena de responsabilidad para manejar las solicitudes.
2. Cada departamento debe tener la capacidad de aceptar o rechazar una solicitud.
3. Si un departamento no puede procesar la solicitud, debe pasarla al siguiente departamento en la cadena.
4. Si ningún departamento puede manejar la solicitud, debe registrarse como "no procesada".

---

## Ejercicio 3: Implementa el patrón Observer en TypeScript

### Descripción

El patrón **Observer** establece una relación de dependencia entre objetos de manera que cuando uno de ellos cambie su estado, todos sus dependientes son notificados automáticamente.

### Ejercicio

Estás construyendo una aplicación meteorológica que notifica a sus usuarios sobre los cambios climáticos. El sistema debe permitir que múltiples usuarios se suscriban a actualizaciones meteorológicas y recibir notificaciones cuando haya un cambio en el clima.

**Requisitos**:
1. Crea una clase que represente el clima.
2. Implementa una lista de observadores (usuarios) que se puedan suscribir o desuscribir de las notificaciones.
3. Cada vez que cambie el clima, todos los usuarios suscritos deben ser notificados con el nuevo estado.
4. Asegúrate de que los usuarios puedan dejar de recibir notificaciones si lo desean.

---

## Ejercicio 4: Implementa el patrón Decorator en TypeScript

### Descripción

El patrón **Decorator** permite agregar funcionalidades adicionales a un objeto de manera dinámica sin modificar su estructura. Se usa comúnmente para ampliar las capacidades de clases de una forma flexible y reusable.

### Ejercicio

Estás desarrollando una aplicación de pedidos en línea, donde los clientes pueden personalizar sus productos con varios "adicionales" (ej. ingredientes extra en una pizza, o empaques de regalo). Implementa el patrón Decorator para permitir que los clientes añadan complementos opcionales a sus pedidos.

**Requisitos**:
1. Crea una clase base para el producto.
2. Implementa diferentes decoradores que representen los "adicionales" que los clientes pueden agregar.
3. Cada decorador debe modificar el precio del producto base de manera dinámica.
4. Los clientes deben poder apilar múltiples decoradores para agregar más de un adicional a su pedido.

---

## Ejercicio 5: Implementa el patrón State en TypeScript

### Descripción

El patrón **State** permite a un objeto cambiar su comportamiento cuando su estado interno cambia. El objeto parecerá cambiar de clase cuando cambia de estado.

### Ejercicio

Crea un sistema para un reproductor de música que puede estar en diferentes estados: **Reproduciendo**, **En Pausa** y **Detenido**. Cada estado cambia la forma en que el reproductor responde a los comandos de los usuarios (ej. presionar "Play" o "Stop").

**Requisitos**:
1. Implementa una clase de reproductor de música que cambie su comportamiento según su estado actual.
2. Crea estados para "Reproduciendo", "En Pausa" y "Detenido".
3. El reproductor debe reaccionar de manera diferente a los comandos "Play", "Pause" y "Stop" dependiendo de su estado actual.
4. Asegúrate de que sea posible cambiar entre estados cuando los comandos sean ejecutados correctamente.

---

## Ejercicio 6: Implementa el patrón Strategy en TypeScript

### Descripción

El patrón **Strategy** permite definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables. El patrón **Strategy** permite que el algoritmo varíe independientemente del cliente que lo utiliza.

### Ejercicio

Estás construyendo un sistema de pago en línea que permite a los usuarios seleccionar diferentes métodos de pago (tarjeta de crédito, PayPal, criptomonedas, etc.). Utiliza el patrón Strategy para encapsular cada método de pago y permitir que el usuario seleccione su estrategia preferida al momento de pagar.

**Requisitos**:
1. Crea una interfaz para los métodos de pago.
2. Implementa varias estrategias de pago (tarjeta de crédito, PayPal, criptomonedas).
3. El sistema debe permitir cambiar la estrategia de pago de forma dinámica según la selección del usuario.
4. Asegúrate de que el proceso de pago sea ejecutado correctamente para cada estrategia.

---

## Ejercicio 7: Implementa el patrón Command en TypeScript

### Descripción

El patrón **Command** encapsula una solicitud como un objeto, permitiendo parametrizar a los clientes con diferentes solicitudes, encolar o registrar solicitudes, y soportar operaciones que se pueden deshacer.

### Ejercicio

Estás desarrollando un editor de texto que debe soportar operaciones como **Copiar**, **Pegar**, **Deshacer** y **Rehacer**. Implementa el patrón Command para encapsular cada operación como un comando y permitir que el sistema las ejecute o las deshaga según sea necesario.

**Requisitos**:
1. Define una interfaz para los comandos.
2. Implementa comandos concretos para copiar, pegar, deshacer y rehacer.
3. El sistema debe permitir ejecutar los comandos y mantener un historial para poder deshacerlos o rehacerlos.
4. Asegúrate de que el editor funcione correctamente con varios comandos en el historial.


---

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si tienes sugerencias o mejoras, no dudes en abrir un PR o issue en el repositorio.

---

## Licencia 📝

Este proyecto está bajo la [Licencia MIT](./LICENSE).

---
