let producto = prompt("que producto es: ")
let Tipo_producto = Number(prompt("elija opcion: 1 alimentos, 2 eletrodomesticos"))
let precio = Number(prompt(`el precio de ${producto}`))
let catidad = Number(prompt(`ingrese la catidad de ${producto}`))
const iva = 0.19
let subtotal = precio * catidad
let total_iva = 0
let total = 0
let descuento = 0
// validar si tipo de producto es 1 o 2 y aplicar descuento
if (Tipo_producto === 1) {
    descuento = subtotal * 0.2
    total_iva = (subtotal - descuento) * iva
    total = (subtotal + total_iva) - descuento
} else if (Tipo_producto === 2) {
    descuento = subtotal * 0.1
    total_iva = (subtotal - descuento) * iva
    total = (subtotal + total_iva) - descuento
}else {
    console.log("opcion no valida")
}
//validar si tipo de producto, precio y cantidad son numeros
if (Number.isNaN(subtotal) || subtotal <=0) {
    console.log("no es un numero")
}else {
    alert(`
    subtotal: ${subtotal.toLocaleString("es-CO",{style:"currency",currency:"COP"})}
    descuento: ${descuento.toLocaleString("es-CO",{style:"currency",currency:"COP"})}
    iva: ${total_iva.toLocaleString("es-CO",{style:"currency",currency:"COP"})}
    tota: ${total.toLocaleString("es-CO",{style:"currency",currency:"COP"})}`)
}
