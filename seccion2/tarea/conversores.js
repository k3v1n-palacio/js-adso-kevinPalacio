//1. Segundos a reloj: pide segundos y muestra horas, minutos y segundos (ejemplo: 3725 → 1 h 2 min 5 s). Usa Math.floor() y %.
let segundos = Number(prompt("ingrese los segundos: "))
let hora = Math.floor(segundos / 3600)
let minutos = Math.floor((segundos % 3600) / 60)
let segundosRestantes = segundos % 60
console.log(`${hora} h ${minutos} min ${segundosRestantes} s`)


//2. Temperatura: convierte °C a °F con F = C * 9 / 5 + 32, validando que sea un número.
let c = Number(prompt("celsius  a fahrenheit:"))
let f = 0
let vacio = ""
if (Number.isNaN(c)) {
    console.log(`${c} no es un numero`)
}else{
    f = c*9/5+32
    console.log(`la convercion a fahrenheit es: ${f}`)
}

//3. Promedio: pide 3 notas y muestra el promedio con un decimal.
let nota = Number(prompt("colocar nota: "))
let nota2 = Number(prompt("colocar nota2: "))
let nota3 = Number(prompt("colocar nota3: "))
if (Number.isNaN(nota)){
        console.log("nota 1 es invalida")
}else if (Number.isNaN(nota2)){
        console.log(`la nota 2 es invalida`)
}else if (Number.isNaN(nota3)) {
        console.log("nota 3 es invalida")
}else{
    let promedio = (nota + nota2 + nota3)/3
    console.log(`el promedio es: ${promedio.toFixed(1)}`)
}
