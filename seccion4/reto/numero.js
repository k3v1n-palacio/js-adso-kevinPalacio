/* 1. Genera un número secreto entre 1 y 100.
2. Da máximo 7 intentos.
3. En cada intento dice "Más alto" o "Más bajo" y muestra en qué intento va.
4. Si el jugador escribe algo que no es un número del 1 al 100, avisa sin gastarle un intento. */
const secreto = 55;
let adivino = false
let intentos = 0
while (adivino == false && intentos < 7) {
    let adivina = Number(prompt("adivivina el numero secreto:"))
    if(adivina <1 || adivina >100 || Number.isNaN(adivina)){
        alert("numero invalido")
        continue
    }
    intentos += 1
    if (adivina > secreto)
        alert(`es menor llevas ${intentos} intentos`)
    else if (adivina < secreto)
        alert(`es mayor llevas ${intentos} intentos`)
    else if (adivina == secreto){
        adivino = true
        alert("adivino el numero")
        break
    }
    else if (intentos == 7 )
        alert("se acabaron los intentos")

}