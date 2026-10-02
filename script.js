let edadActual = 17;
let edadMaxima = 80;
let snackFavorito = "papas fritas";
let snacksPorDia = 1;

let añosRestantes = edadMaxima - edadActual;
let snacksRestantes = añosRestantes * 365 * snacksPorDia;

alert("Necesitarás " + snacksRestantes + " de " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");

let precioPorSnack = 1000;
let gastoTotal = snacksRestantes * precioPorSnack;

console.log("Gastarás $" + gastoTotal + " en " + snackFavorito + " a lo largo de tu vida.");