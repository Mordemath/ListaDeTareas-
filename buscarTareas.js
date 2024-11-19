import prompt from 'prompt-sync';
import pause from './pause.js';
import mostrarDetalles from './mostrarDetalles.js';
import editar from './editarTarea.js';
import { controlArreglo } from './controles.js';
import { imprimirLista } from './todasTareas.js';
const leer = prompt();
/// Funcion filtrar busca tareas dentro de una lista basándose en una palabra clave.
function filtrarTareas(tareas, palabraClave) {
    let resultados = [];
    tareas.forEach((tarea) => {
        if (tarea.titulo.includes(palabraClave)) {
            resultados.push(tarea);
        }
    });
    return resultados;
}
// Devuelve true si el usuario responde "S"; de lo contrario, devuelve false
function deseaVerTarea(ver1) {
    let ver = leer("¿Desea ver alguna tarea? s/n: ").toUpperCase();
    if (ver !== "S" && ver !== "N") {
        console.log("Opcion invalida.");
    }
    return ver === "S";
}
//  Devuelve el índice numérico correspondiente.
function obtenerIndice() {
    let indice = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
    return indice;
}
//Devuelve true si el índice es válido; de lo contrario, devuelve false.
function esIndiceValido(indice, resultados) {
    return !(isNaN(indice) || indice < 0 || indice >= resultados.length);
}
/// Llama a editar si se selecciona "E". Si no, no hace nada
function manejarEleccion(indice, resultados) {
    let elegir = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
    if (elegir === "E") {
        console.log("Ingresando al menú de editar tareas...");
        console.log("Estás editando la tarea: " + resultados[indice].titulo);
        return editar(resultados[indice]);
    } else if (elegir !== "0") {
        console.error("Tiene que ingresar E o 0.");
        pause();
    }
}

export default function buscarTarea(tareas) {
    let palabraClave = leer("Ingrese una palabra o conjunto de palabras para buscar en los títulos de las tareas: ");
    let resultados = filtrarTareas(tareas, palabraClave);
    if(controlArreglo(resultados)){
        console.log("Tareas encontradas:");
        imprimirLista(resultados, 0);
    }else{
        console.error("No se encontro ninguna tarea");
    }
    if (resultados.length > 0 && deseaVerTarea()) {
        let indice = obtenerIndice();
        if (esIndiceValido(indice, resultados)) {
            mostrarDetalles(resultados, indice);
            return manejarEleccion(indice, resultados);
        } else {
            console.error("Número de tarea inválido. Ingrese un número correcto.");
            //return ["Número de tarea inválido. Ingrese un número correcto."];
            pause();
        }
    }
}
