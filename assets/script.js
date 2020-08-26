
// Pregunta 1
    
let inputNumero = prompt("Ingrese un numero entre 1 a 100");
if( inputNumero > 101 && inputNumero < 0  ){
    alert("Ingresa un numero valido crack")
} else {
    for(var i = 0; i <= inputNumero; i++){
         console.log(i);
    }
}

//Pregunta 2

let inputCaballo = prompt("¿De qué color es el caballo blanco de Napoleón?");
if(inputCaballo == "blanco" || inputCaballo == "Blanco" || inputCaballo == "BLANCO" || inputCaballo == "blanko"){
    alert("correcto, crack");
} else{
    alert("vuelve a intentarlo, crack");
}

// Pregunta 3

    var matematicas = prompt("Ingresa tu promedio de matemáticas");
    var fisica = prompt("Ingresa tu promedio de física");
    var ciencias = prompt("Ingresa tu promedio de ciencias"); 
    var promedioNotas = (parseFloat(matematicas) + parseFloat(ciencias) + parseFloat(fisica))/3;

    alert("Su promedio es " + promedioNotas);

    

// Pregunta 4

    var fruta1 = prompt("Ingrese una fruta");
    var fruta2 = prompt("Ingresa una segunda fruta");
    var fruta3 = prompt("Ingresa una última fruta");

    var frutas = [fruta1, fruta2, fruta3]

    for  (let fruta of frutas){
        if (fruta.toLocaleLowerCase()==="manzana"){
            continue;
        }
        console.log(fruta)
    }
 

//Pregunta 5
var inputNombre = prompt("Ingrese su nombre de pila");
inputNombre = inputNombre.toLocaleLowerCase();

let vocales = [];
let consonantes = [];
let letras = []

for (letra of inputNombre){
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        vocales.push(letras);
    } else{
        consonantes.push(letra);
    }
}
alert("Tu nombre tiene " + consonantes.length + " consonantes perro" + "y " + vocales.length + " vocales" )