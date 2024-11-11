import prompt from 'prompt-sync';
import pause from './pause.js';
import mostrarDetalles from './mostrarDetalles.js';
import editar from './editarTarea.js';

const leer = prompt();

function obtenerPalabraClave() {
    return leer("Ingrese una palabra o conjunto de palabras para buscar en los títulos de las tareas: ");
}

function filtrarTareas(tareas, palabraClave) {
    let resultados = [];
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].titulo.includes(palabraClave)) {
            resultados.push(tareas[i]);
        }
    }
    return resultados;
}

function mostrarResultados(resultados) {
    console.clear();
    if (resultados.length > 0) {
        console.log("Tareas encontradas:");
        for (let i = 0; i < resultados.length; i++) {
            console.log((i + 1) + ". " + resultados[i].titulo);
        }
    } else {
        console.log("No se encontraron tareas que coincidan con la búsqueda.");
    }
}

function deseaVerTarea() {
    let ver = leer("¿Desea ver alguna tarea? s/n: ").toUpperCase();
    while (ver !== "S" && ver !== "N") {
        ver = leer("Ingrese S o N: ").toUpperCase();
    }
    return ver === "S";
}

function obtenerIndice() {
    let indice = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
    return indice;
}

function esIndiceValido(indice, resultados) {
    return !(isNaN(indice) || indice < 0 || indice >= resultados.length);
}

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
    let palabraClave = obtenerPalabraClave();
    let resultados = filtrarTareas(tareas, palabraClave);

    mostrarResultados(resultados);

    if (resultados.length > 0 && deseaVerTarea()) {
        let indice = obtenerIndice();
        if (esIndiceValido(indice, resultados)) {
            mostrarDetalles(resultados, indice);
            return manejarEleccion(indice, resultados);
        } else {
            console.error("Número de tarea inválido. Ingrese un número correcto.");
            cl("Pausa");
            pause();
        }
    }
}
