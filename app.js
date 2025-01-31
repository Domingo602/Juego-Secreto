/*
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
*/

//Desafío 8.1
let listaGenerica = [];
//Desafío 8.2
lenguajesDeProgramacion = ["JavaScript","C","C++","Kotlin","Python"];
//Desafío 8.3
lenguajesDeProgramacion.push("Java","Rubi","GoLang");
//Desafío 8.4
function muestraLista(lenguajesDeProgramacion) {
    for (let i=1 ; i<=lenguajesDeProgramacion.length ; i++ ) {
        console.log(`Muestra Lista: ${lenguajesDeProgramacion[i-1]}`);
    }
}
muestraLista(lenguajesDeProgramacion);

//Desafío 8.5
function muestraListaRev (lenguajesDeProgramacion) {
    for (let i=lenguajesDeProgramacion.length ; i>0 ; i-- ) {
        console.log(`Muestra Lista Rev: ${lenguajesDeProgramacion[i-1]}`);
    }
}
muestraListaRev(lenguajesDeProgramacion);

//Desafío 8.6
let lista = [10,20,30,40,50];
function promedio(lista) {
    let promedio = 0; total = 0;
    for (let i=1 ; i<=lista.length ; i++ ) {
        total += lista[i-1];
    }
    return total/lista.length
}
console.log(`Promedio = ${promedio(lista)}`);

//Desafío 8.7
function max(lista) {
    let max=0;
    for (let i=1 ; i<=lista.length ; i++ ) {
        if (lista[i-1] > max) {
            max= lista[i-1];
        }
    }
    return max
}
function min(lista) {
    let min=lista[0];
    for (let i=1 ; i<=lista.length ; i++ ) {
        if (lista[i-1] < min) {
            min= lista[i-1];
        }
    }
    return min
}
console.log(`Máximo: ${max(lista)}`);
console.log(`Mínimo: ${min(lista)}`);

//Desafío 8.8
function totaliza(lista) {
    let total = 0;
    for (let i=1 ; i<=lista.length ; i++ ) {
        total += lista[i-1];
    }
    return total
}
console.log(`Total Lista= ${totaliza(lista)}`)

//Desafío 8.9
function busca(lista,valor) {
    if (lista.includes(valor)) {
        for (let i=1 ; i<=lista.length ; i++ ) {
            if (lista[i-1] == valor) {
                return(i-1);
            }
        }
    } else {
        return("El valor no se encuentra en la lista");
    }
}
console.log(`Busca: ${busca(lista,30)}`);
//Desafío 8.10
function juntaLista(lista,lenguajesDeProgramacion) {
for (let i=1 ; i<=lista.length ; i++ ) {
    listaUnida.push(lista[i-1]);
}
for (let i=1 ; i<=lenguajesDeProgramacion.length ; i++ ) {
    listaUnida.push(lenguajesDeProgramacion[i-1]);
}
return(listaUnida)
}
listaUnida = [];
console.log(`Lista Unida: ${juntaLista(lista,lenguajesDeProgramacion)}`);
//Desafío 8.11
function genListaCuadrado(lista) {
    for (let i=1 ; i<=lista.length ; i++ ) {
 //       listaCuadrado.push(lista[i-1]*lista[i-1]);
        listaCuadrado.push(lista[i-1]**2);
    }
    return listaCuadrado
}
listaCuadrado = [];
console.log(`Lista Cuadrado ${genListaCuadrado(lista)}`);
//Otra forma
function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}
console.log(`Lista Cuadrado 2 ${cuadradoLista(lista)}`);
//Prueba = []
let Prueba = lista.map(num => num ** 2);
console.log(`Lista Cuadrado 3 ${Prueba}`);
//Prueba 2
let Prueba2 = lista.map((num, index) => num + lenguajesDeProgramacion[index]);
console.log(`Lista Unida ${Prueba2}`);
