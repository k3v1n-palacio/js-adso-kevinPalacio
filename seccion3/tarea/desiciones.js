//1. Año bisiesto: divisible entre 4 y no entre 100, o divisible entre 400. Prueba con 2024, 1900 y 2000.
let año = Number(prompt("ingrese un año: "))
if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    alert("El año es bisiesto.")
} else {
    alert("El año no es bisiesto.")
}

//2. Calculadora con switch: dos números y una operación (+, -, *, /). Avisa si dividen entre cero y usa default para operaciones que no existen.
let num1 = Number(prompt("ingrese el primer numero: "))
let operacion = prompt("ingrese la operacion: +, -, *, /")
let num2 = Number(prompt("ingrese el segundo numero: "))
let resultado = 0
if (operacion === "+") {
    resultado = num1 + num2
} else if (operacion === "-") {
    resultado = num1 - num2
} else if (operacion === "*") {
    resultado = num1 * num2
} else if (operacion === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2
    } else {
        alert("No se puede dividir entre cero.")
    }
} else {
    alert("Operación no válida.")
}

//3. IMC: peso / estatura ** 2, y clasifica en bajo peso, normal, sobrepeso u obesidad.
let peso = Number(prompt("ingrese su peso en kg: "))
let estatura = Number(prompt("ingrese su estatura en metros: "))
let imc = peso / (estatura ** 2)

if (imc < 18.5) {
    alert("Usted tiene bajo peso.")
} else if (imc < 25) {
    alert("Usted tiene un peso normal.")
} else if (imc < 30) {
    alert("Usted tiene sobrepeso.")
} else {
    alert("Usted tiene obesidad.")
}
