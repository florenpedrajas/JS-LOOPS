// Usa un bucle for...of para recorrer todos los juguetes y añade los que 
// tengan más de 15 ventas (sellCount)
// al array popularToys. Imprimelo por consola.. Puedes usar este array:

const popularToys = [];  /*creamos variable para incluir juguetes con más de 15 ventas*/
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
];

for (const toy of toys) {  /* cojemos 1 juguete de los juguetes*/
   if (toy.sellCount >= 15) { /*Si la propiedad sellcount es mayor de 5*/
	    popularToys.push(toy);  /* lo añadimos a la variable*/
   }
  }
console.log(popularToys);   /* vemos los juguetes de más de 15 ventas*/