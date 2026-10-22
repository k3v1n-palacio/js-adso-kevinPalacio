//1. esBisiesto(anio): devuelve true o false; úsala dentro de un if.

/* function bisiciesto(ano){
    let ano = Number(prompt("ingrese un año: "))
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) 
        return alert("El año es bisiesto.")
    else 
        return alert("El año no es bisiesto.")

}
bisiciesto() */
//2. mayorDeTres(a, b, c): devuelve el mayor; pruébala también con números iguales.
/* let a = Number(prompt("digite el numero: "))
let b = Number(prompt("digite el numero: "))
let c = Number(prompt("digite el numero: "))    
function mayorDeTres(a, b, c){
    let mayor = 0
    if (a > b && a > c)
        mayor = a
    else if (b > a && b > c)
        mayor = b
    else if (c > a && c > b)
        mayor = c
    return console.log(`el numero mayor es: ${mayor}`)
}
mayorDeTres(1,2,3) */

//3. precioFinal(precio, descuento = 0): como función flecha, devuelve el precio con el descuento (en %) aplicado. 
let precio = Number(prompt("digite el precio: "))
let descuento = Number(prompt("digite el descuento: "))
const precioFinal = (precio, descuento = 0) => {
    return precio - (precio * (descuento / 100))
}
console.log(`El precio final es: ${precioFinal(precio, descuento)}`)