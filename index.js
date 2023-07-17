const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//A
const pizzasId = pizzas.filter((pizza) => {
  return pizza.id % 3 === 0;
})
pizzasId.forEach((pizza)=>{
  console.log(`Pizza con ID impar: ${pizza.nombre}`)
})

//B
const pizzasBarata = pizzas.filter((pizza) =>{
  return pizza.precio < 600;
})
pizzasBarata.forEach(pizza => {
  console.log(`La pizza con un precio menor a 600 es: La ${pizza.nombre}`)
});

//C
const pizzasNombres = pizzas.forEach( pizza => {
  console.log( `El nombre de la pizza es ${pizza.nombre} y su precio es de ${pizza.precio}`)
})

//D
const ingredientes = pizzas.forEach(pizza =>{
  console.log(pizza.ingredientes.toString());
})

