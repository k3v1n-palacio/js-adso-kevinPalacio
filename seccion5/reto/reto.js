/* 1 Pesos a dólares · 2 °C a °F · 3 Km a millas · 4 Segundos a reloj · 0 Salir

Reglas:
1. Cada conversor es su propia función que devuelve el resultado con return (sin console.log adentro).
2. Al menos una es función flecha.
3. Una función leerNumero(mensaje) pide un número hasta que sea válido y se usa en todos los conversores.
4. El menú (do...while y switch) solo llama las funciones y muestra los resultados. */

function pesodolares () {
    let pesos = Number(prompt("cuantos pesos tienes?: "))
    let dolares = Number(prompt("ingrese el precio del dolar: "))
    return `la conversion de ${pesos} a dolares es ${pesos / dolares} es dolares`
}
function temperatura(){
    let celcius = Number(prompt("digite cuantosn grados hay:"))
    return `los grados ${celcius}  centigrados son en ${celcius*9/5+32}`
}
function kmAMillas(){
    let km = Number(prompt("digite la cantidad de km"))
    const millas = 0.621371
    return `${km} kilometros son ${km * millas} millas` 
}
function reloj() {
    let segundos = Number(prompt("ingrese los segundos: "))
    let hora = Math.floor(segundos / 3600)
    let minutos = Math.floor((segundos % 3600) / 60)
    let segundosRestantes = segundos % 60
    return `${hora} h ${minutos} min ${segundosRestantes} s`

}

let opcion = prompt("1 Pesos a dólares · 2 °C a °F · 3 Km a millas · 4 Segundos a reloj · 0 Salir")
while (opcion !=0){
    switch (opcion){
        case "1":
            console.log(pesodolares())
            break
        case "2":
            console.log(temperatura())
            break
        case "3":
            console.log(kmAMillas())
            break
        case "4":
            console.log(reloj())
            break
        case "0":
            break;
        default:
            alert("Opción no válida")
            break
    }
    opcion = prompt("1 Pesos a dólares · 2 °C a °F · 3 Km a millas · 4 Segundos a reloj · 0 Salir")
}