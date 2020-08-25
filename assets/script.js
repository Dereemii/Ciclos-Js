
// Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números
// desde el 0 hasta el número que ingresó el usuario.

    
let inputNumero = prompt("Ingrese un numero entre 1 a 100");
if( inputNumero > 101 && inputNumero < 0 ){
    alert("Ingresa un numero valido crack")
} else{
    for(var i = 0; i <= inputNumero; i++){
         console.log(i);
    }
}
    
