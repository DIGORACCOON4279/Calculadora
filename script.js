
console.log("Calculadora");

// let confirmar = confirm("Hello World");
// console.log(confirmar);

function calculadora() {

    let numberOne;
    do{
        numberOne = parseInt(prompt("Ingresa un número"));
        if (isNaN(numberOne)) {
            alert("Número invalido, ingrese de nuevo");
            console.log("Número invalido, ingrese de nuevo");
        }
    } while(isNaN(numberOne));

    let operador;
    do{
        operador = prompt("Ingresa un operador: (+, -, *, /)");
        if(!["+", "-", "*", "/"].includes(operador)) {
            alert("No se ha encontrado un operador valido");
            console.log("No se ha encontrado un operador valido");
        }
    } while(!["+", "-", "*", "/"].includes(operador));

    let numberTwo;
    do{
        numberTwo = parseInt(prompt("Ingresa otro número"));
        if (isNaN(numberTwo)) {
            alert("Número invalido, ingrese de nuevo");
            console.log("Número invalido, ingrese de nuevo");
        }
    } while(isNaN(numberTwo));

    switch(operador) {
        case "+":
            alert("La suma es: " + (numberOne + numberTwo));
            console.log("La suma es: " + (numberOne + numberTwo));
            break;
        case "-":
            alert("La resta es: " + (numberOne - numberTwo));
            console.log("La resta es: " + (numberOne - numberTwo));
            break;
        case "*":
            alert("La multiplicación es: " + (numberOne * numberTwo));
            console.log("La multiplicación es: " + (numberOne * numberTwo));
            break;
        case "/":
            if (numberTwo == 0) {
                alert("No se puede dividir entre 0");
            } else {
                alert("La división es: " + (numberOne / numberTwo));
                console.log("La división es: " + (numberOne / numberTwo));
                break;
            }
        default:
            alert("Operador no valido");
    }

    let continuar = confirm("Quieres continuar?");
    if (continuar) {
        calculadora();
    } else {
        alert("Gracias por usar la calculadora");
        console.log("Gracias por usar la calculadora");
    }
}

calculadora();


// Otro caso con funciones

// let numberOne = parseInt(prompt("Ingresa un número"));
// let numberTwo = parseInt(prompt("Ingresa otro número"));

// function suma(numberOne, numberTwo) {
//     let total = numberOne + numberTwo;
//     return total
// }

// function resta(numberOne, numberTwo) {
//     let total = numberOne - numberTwo;
//     return total
// }

// function multiplicacion(numberOne,numberTwo) {
//     let total = numberOne * numberTwo;
//     return total
// }

// function division(numberOne, numberTwo) {
//     let total = numberOne / numberTwo;
//     return total
// }

// alert("Suma: " + suma(numberOne, numberTwo));
// alert("Resta: " + resta(numberOne, numberTwo));
// alert("Multiplicación: " + multiplicacion(numberOne, numberTwo));
// alert("División: " + division(numberOne, numberTwo));

// console.log("Suma: ", suma(10, 58));
// console.log("Resta: ", resta(10, 58));
// console.log("Multiplicación: ", multiplicacion(10, 58));
// console.log("División: ", division(10, 58));

