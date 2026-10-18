//1. Tabla a pedido: pide un número y muestra su tabla de multiplicar del 1 al 10.
let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
} 
//2. Estadísticas del grupo: pregunta cuántas notas vas a ingresar, pídelas una por una en un ciclo (rechazando las inválidas con do...while) y muestra el promedio, la nota mayor y la nota menor.
let cantidadNotas = Number(prompt("¿Cuántas notas vas a ingresar?"));
let contador = 0
let sumarNotas = 0
let promedio = 0
let notaMenor = 0
let notaMayor = 0
while (cantidadNotas != contador){
    let perdirNotas = Number(prompt(`nota #${(contador + 1)}`))
    if (Number.isNaN(perdirNotas)){
        console.log(`${perdirNotas} es un numero invalido`)
        continue
    }
    contador +=1
    sumarNotas +=perdirNotas
    promedio = sumarNotas / contador
    if (notaMenor === 0 && notaMayor === 0){
        notaMenor = perdirNotas
        notaMayor = perdirNotas
    }else{
        if (notaMayor < perdirNotas)
            notaMayor = perdirNotas
        if (notaMenor > perdirNotas)
            notaMenor = perdirNotas
    }
}
alert(`El promedio de las notas es: ${promedio}\nLa nota mayor es: ${notaMayor}\nLa nota menor es: ${notaMenor}`) 
//3. Evidencia de depuración: captura de las DevTools detenidas en un punto de interrupción de tu código de la tarea, con el panel Scope visible. 

