/*1. Si la nota no es un número, avisa con un alert.
2. Si está fuera del rango 0.0 a 5.0, avisa con otro mensaje.
3. Si es válida, clasifícala: 4.6 a 5.0 Excelente; 4.0 a 4.5 Sobresaliente; 3.0 a 3.9 Aprobado; 0.0 a 2.9 No aprobado.
4. Muestra en la consola el nombre, la nota con un decimal y el resultado, y el resultado también en un alert.*/
let nota = Number(prompt("ingrese una nota: "))

if (Number.isNaN(nota)){
    alert(`${nota} no es un numero`);
}else if(nota <= 0 || nota > 5){
    alert(`${nota.toFixed(1)} esta fuera del rango`);
}else if (nota >= 4.6) {
    alert(`${nota.toFixed(1)} Exelente`)
}else if(nota >= 4.0){
    alert(`${nota.toFixed(1)} Sobresaliente`)
}else if (nota >=3){
    alert(`${nota.toFixed(1)} aprobado`)
}else{
    alert(`${nota.toFixed(1)} No Aprobado`)
}
