// main.ts

import { Goku, Vegeta, Gohan, Trunks } from './Personajes';
import { Gogeta, Gotenks } from './Fusiones';

function main() {
  const goku = new Goku();
  const vegeta = new Vegeta();
  const gohan = new Gohan();
  const trunks = new Trunks();

  console.log("Personajes:");
  console.log(goku .ObtenerNombre()); 
  console.log(vegeta .ObtenerNombre()); 
  console.log(gohan .ObtenerNombre()); 
  console.log(trunks .ObtenerNombre()); 
  const gogeta = new Gogeta ( goku,  vegeta);
  const gotenks = new Gotenks ( gohan ,  trunks);

  console.log("\n Fusiones:");
  console.log(gogeta.ObtenerNombre()); 
  console.log(gotenks.ObtenerNombre()); 
}

main();
