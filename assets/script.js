
// Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números
// desde el 0 hasta el número que ingresó el usuario.

    
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

    for (var i = 0; i < frutas.length; i++){
        if(fruta1 == "manzana"){
            frutas.shift()
            console.log(frutas)
        } else if(fruta2 == "manzana"){
            frutas.splice(1,1);
            console.log(frutas)
        } else if(fruta3 == "manzana"){
            frutas.pop();
            console.log(frutas)
        }
    } 
  


