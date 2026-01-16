// array di bici//
const bikes = [
{ nome: "Bianchi", peso: 10},
{ nome: "Atala", peso: 12},
{ nome: "Carrera", peso: 8},
{ nome: "Piaggio", peso: 15},
{ nome: "Pininfarina", peso: 11}, 
];

//trovare la bici piu leggera//
 let lightestBike = bikes[0];

 for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < lightestBike.peso) {
        lightestBike = bikes[i];
    }
 }

 //stampa//
 console.log("La bici piu' leggera e':", lightestBike.nome, "peso", lightestBike.peso, "kg");
 