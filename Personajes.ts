// Nombre de la clase base personajes.ts

export class Personaje {
    constructor(protected nombre: string) {}
  
    ObtenerNombre(): string {
      return this.nombre;
    }
  }
  
  export class Goku extends Personaje {
    constructor() {
      super("Goku");
    }
  }
  
  export class Vegeta extends Personaje {
    constructor() {
      super("Vegeta");
    }
  }
  
  export class Gohan extends Personaje {
    constructor() {
      super("Gohan");
    }
  }
  
  export class Trunks extends Personaje {
    constructor() {
      super("Trunks");
    }
  }
  