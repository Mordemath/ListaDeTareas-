import prompt from 'prompt-sync';
import pause from './pause.js';
import mostrarDetalles from './mostrarDetalles.js';
import editar from './editarTarea.js';
import { controlArreglo } from './controles.js';
import { imprimirLista } from './todasTareas.js';
/// Funcion filtrar busca tareas dentro de una lista basándose en una palabra clave.
function filtrarTareas(tareas, palabraClave) {
    let resultados = [];
    tareas.forEach((tarea) => {
        if (tarea.titulo.includes(palabraClave)) {//Retorna true si encuentra las subcadena del titulo
            resultados.push(tarea); // Cada vez que encuentra una semejanza o subcadena realiza push en un nuevo arreglo auxiliar
        }
    });
    return resultados;
}
// Devuelve true si el usuario responde "S"; de lo contrario, devuelve false
function deseaVerTarea() {
    const leer = prompt();
    let ver = leer("¿Desea ver alguna tarea? s/n: ").toUpperCase();
    if (ver !== "S" && ver !== "N") {
        console.log("Opcion invalida.");
    }
    return ver === "S"; // Retorna a buscar tareas
}
//  Devuelve el índice numérico correspondiente.
function obtenerIndice() {
    const leer = prompt();
    let indice = parseInt(leer("Ingrese el número de la tarea: ")) - 1;//Convierte la cadena en entero y le resta -1 para que empiece en 0
    return indice; // Retorna a buscar tareas
}
//Devuelve true si el índice es válido; de lo contrario, devuelve false.
function esIndiceValido(indice, resultados) {
    return !(isNaN(indice) || indice < 0 || indice >= resultados.length);//Retorna false en caso de que la condicion se cumpla;
}
/// Llama a editar si se selecciona "E". Si no, no hace nada
function manejarEleccion(indice, resultados) {
    const leer = prompt();
    let elegir = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
    if (elegir === "E") {
        console.log("Ingresando al menú de editar tareas...");
        console.log("Estás editando la tarea: " + resultados[indice].titulo);
        return editar(resultados[indice]); //Retorna el arreglo resultado modificado
    } else if (elegir !== "0") {
        console.error("Tiene que ingresar E o 0.");
        pause();
    }
}
// Puede devolver el resultado de la función editar. Puede terminar sin devolver nada si no se elige editar.
export default function buscarTarea(tareas) {//funcion principal de buscar tarea
    const leer = prompt();
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
