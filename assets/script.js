
// Pregunta 1

ingreseUnNumero = () => {
    let inputNumero = prompt("Ingrese un numero entre 1 a 100");
    var texto1 = document.getElementById("textoUno");

    if (inputNumero > 101 && inputNumero < 0) {
        alert("Ingresa un numero valido crack")
    } else {
        for (var i = 0; i <= inputNumero; i++) {
            console.log(i);
            texto1.style.color = "white"
        }
    }
}

//Pregunta 2

caballo = () => {
    let inputCaballo = prompt("¿De qué color es el caballo blanco de Napoleón?");
    var texto2 = document.getElementById("textoDos");

    if (inputCaballo == "blanco" || inputCaballo == "Blanco" || inputCaballo == "BLANCO" || inputCaballo == "blanko") {
        alert("correcto, crack")
        texto2.style.color = "white";
        console.log("correcto, es blanco")
    } else {
        alert("vuelve a intentarlo, crack");
    }
}

// Pregunta 3
promedioDeNotas = () => {
    var texto3 = document.getElementById("textoTres");
    var matematicas = prompt("Ingresa tu promedio de matemáticas");
    var fisica = prompt("Ingresa tu promedio de física");
    var ciencias = prompt("Ingresa tu promedio de ciencias");
    var promedioNotas = (parseFloat(matematicas) + parseFloat(ciencias) + parseFloat(fisica)) / 3;

    alert("Su promedio es " + promedioNotas);
    texto3.style.color = "white";
    console.log("Su promedio es " + promedioNotas)

}

//Pregunta 4

eliminadorDeManzanas = () => {
    var texto4 = document.getElementById("textoCuatro");
    var fruta1 = prompt("Ingrese una fruta");
    var fruta2 = prompt("Ingresa una segunda fruta");
    var fruta3 = prompt("Ingresa una última fruta");

    var frutas = [fruta1, fruta2, fruta3]

    for (let fruta of frutas) {
        if (fruta.toLocaleLowerCase() === "manzana") {
            continue;
        }
        console.log(fruta)
        texto4.style.color = "white";
    }

}


//Pregunta 5

contadorDeLetras = () => {
    var texto5 = document.getElementById("textoCinco");
    var inputNombre = prompt("Ingrese su nombre de pila");
    inputNombre = inputNombre.toLocaleLowerCase();

    let vocales = [];
    let consonantes = [];
    let letras = []

    for (letra of inputNombre) {
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            vocales.push(letras);
        } else {
            consonantes.push(letra);
        }
    }
    alert("Tu nombre tiene " + consonantes.length + " consonantes " + "y " + vocales.length + " vocales");
    texto5.style.color = "white";
    console.log("Tu nombre tiene " + consonantes.length + " consonantes " + "y " + vocales.length + " vocales");
}

