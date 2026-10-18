// ciclo for
/*let num = Number(prompt("digite un numero para crearle la tabla:"))
for (let i = 0; i>=10; i++){
    console.log(`${num} * ${i} = ${num*i}`)
}
let num2 = Number(prompt("digite un numero2 para crearle la tabla:"))
for (let i = 20; i>=0; i--){
    console.log(`${num2} * ${i} = ${num2*i}`)
}*/

//while 
/*let num3 = Number(prompt("digite un numero para crearle la tabla:"))
let i = 0
while(i<=10){
    console.log(`${num3} * ${i} = ${num3*i}`)
    i+=1
} */


/* let suma = 0;
const cantidad = 4;

for (let i = 1; i <= cantidad; i++) {
 
  let nota = Number(prompt(`Nota ${i}:`));
  suma = suma + nota;
}

console.log(`Promedio: ${suma / cantidad}`); */
let opcion;
let total = 0;

do {
  opcion = prompt("1 Cuaderno $4.500 · 2 Lápiz $1.200 · 3 Borrador $800 · 0 Pagar");
  switch (opcion) {
    case "1": total += 4500; break;
    case "2": total += 1200; break;
    case "3": total += 800; break;
    case "0": break;
    default: alert("Opción no válida");
  }
  console.log(`Llevas ${total}`);
} while (opcion !== "0");

alert(`Total a pagar: ${total}`);

