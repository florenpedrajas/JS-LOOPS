// Usa un for...in para imprimir por consola los datos del alienígena.. 
// Puedes usar este objeto:

let alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}



for (const propiedad in alien) {
    console.log(`${propiedad}: ${alien[propiedad]}`);
  }