// fusiones que extienda

import { Personaje } from './Personajes';

export class Fusion extends Personaje {
  constructor(protected personaje1: Personaje, protected personaje2: Personaje, protected fusionName: string) {
    super(fusionName);
  }
}

export class Gogeta extends Fusion {
  constructor(personaje1: Personaje, personaje2: Personaje) {
    super(personaje1 , personaje2 , personaje1.ObtenerNombre() +" + "+ personaje2.ObtenerNombre() + " = Gogeta");
  }
}

export class Gotenks extends Fusion {
  constructor(personaje1: Personaje, personaje2: Personaje) {
    super(personaje1 , personaje2 , personaje1.ObtenerNombre() +" + "+ personaje2.ObtenerNombre() + " = Gotenks");
  }
}
