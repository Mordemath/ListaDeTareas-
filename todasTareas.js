import mostrarDetalles from './mostrarDetalles.js';
import { mostrarTareas } from './mostrarDetalles.js';
import prompt from "prompt-sync";
import editar from './editarTarea.js';
import pausa from './pause.js';
import { controlArreglo, control, control2} from './controles.js';
const leer = prompt();

function Encurso(aTarea) {
    const estadoDeseado = "En curso";
    let tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
    if (!(controlArreglo(tareasFiltradas))) {
        console.log("No hay tareas en curso");
        return aTarea;
    }
    console.log("Filtrado por estado [E]n Curso:");
    tareasFiltradas = opcionesDeTarea(tareasFiltradas, 0);
    return tareasFiltradas;
}

function terminadas(aTarea) {
    const estadoDeseado = "Terminada";
    let tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
    if (!(controlArreglo(tareasFiltradas))) {
        console.log("No se cargaron las tareas Terminadas");
        return aTarea;
    }
    console.log("Filtrado por [T]erminadas:");
    tareasFiltradas = opcionesDeTarea(tareasFiltradas, 0);
    return tareasFiltradas;
}

function pendientes(aTarea) {
    const estadoDeseado = "Pendiente";
    let tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
    if (!(controlArreglo(tareasFiltradas))) {
        console.log("No se cargaron las tareas Pendientes");
        return aTarea;
    }
    console.log("Filtrado por [P]endientes:");
    tareasFiltradas = opcionesDeTarea(tareasFiltradas, 0);
    return tareasFiltradas;
}

export function recorrerArreglo(atarea) {//esta funcin devuelve una copia del array sin el primer elemento
    let shiftArreglo = atarea.map((tarea, index) => {
        if (index == 0) { return undefined }
        return tarea;
    }).filter(tarea => tarea !== undefined);
    return shiftArreglo;
}//si esto no es pureza, ya no se que lo es...

export function imprimirLista(atarea, indice) {//con esta función imprimimos un elemento del array en la primera posición
    if (atarea.length > 0) {
        console.log(`[${indice + 1}] Título: ${atarea[0].titulo}`);
        imprimirLista(recorrerArreglo(atarea), indice + 1);
    }
    return "0";
}
//Entre las dos funciónes de arriba recorremos el array e imprimimos de una forma que nos permite de alguna forma separar la parte de imprimir de la de iterar

function opcionesDeTarea(aTarea, cont) {
    let arrayTareasAux = aTarea;
    console.log("Todas las Tareas:");
    imprimirLista(aTarea, 0);//0 solo es un indice requerido para enumerar tareas, lo pasamos aquí porque es mas comodo para la recursividad que crearlo dentro de la funcion
    let ver = leer("¿Quieres ver una tarea? (S/N)").toUpperCase();
    if (control(ver) === false) {//con esto desligamos a la función "control" de imprimir por su cuenta
        console.error("Opcion invalida");
        pausa();
        ver = opcionesDeTarea(aTarea, 1);
    }
    if (cont === 1) { return ver };
    if (ver === "S") {
        arrayTareasAux = editarTareaOp(aTarea, 0);
    }
    return arrayTareasAux;
}

function editarTareaOp(aTarea, cont) {
    let arrayAux = aTarea;
    let i;
    if (cont == 0) {
        i = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
        if (i > aTarea.length || isNaN(i) ) {
            console.log("El numero ingresado es invalido");
            return;
        }
        mostrarDetalles(aTarea, i);//falta un control para el indice que ingresa el user, igual es facil si copiamos los que tenemos++++
    }
    let ver = leer("E para modificar y 0 para salir").toUpperCase();
    if (control2(ver) === false) {
        console.error("Opcion invalida");
        pausa();
        ver = editarTareaOp(aTarea, 1);
    }
    if (cont === 1) {
        return ver;
    }
    if (ver === "E") {
        arrayAux = editar(aTarea[i]);
    }
    return arrayAux;
}
export { Encurso, opcionesDeTarea, terminadas, pendientes };