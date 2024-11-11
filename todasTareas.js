import mostrarDetalles from './mostrarDetalles.js';
import { mostrarTareas } from './mostrarDetalles.js';
import prompt from "prompt-sync";
import editar from './editarTarea.js';
const leer = prompt();

function Encurso(aTarea) {
    const estadoDeseado = "En curso";
    const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
    console.log("Tareas en estado En Curso:");
    tareasFiltradas.forEach((tarea, i) => {
        console.log(`[${i + 1}] Título: ${tarea.titulo}`);
    });
    console.log("¿Quieres ver una tarea? (S/N)");
    let ver = leer("").toUpperCase();
    ver = control(ver);
    if (ver === "S") {
        let i = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
        mostrarDetalles(aTarea, i);
        ver = leer("E para modificar y 0 para salir").toUpperCase();
        ver = control2(ver);
        if (ver === "E") {
            return editar(aTarea[i]);
        }
    }
}

function terminadas(aTarea) {
    const estadoDeseado = "Terminada";
    const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
    console.log("Tareas Terminadas:");
    tareasFiltradas.forEach((tarea, i) => {
        console.log(`[${i + 1}] Título: ${tarea.titulo}`);
    });
    console.log("¿Quieres ver una tarea? (S/N)");
    let ver = leer("").toUpperCase();
    ver = control(ver);
    if (ver === "S") {
        let i = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
        mostrarDetalles(aTarea, i);
        ver = leer("E para modificar y 0 para salir").toUpperCase();
        ver = control2(ver);
        if (ver === "E") {
            return editar(aTarea[i]);
        }
    }
}

function pendientes(aTarea) {
    const estadoDeseado = "Pendiente";
    const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
    console.log("Tareas Pendientes:");
    tareasFiltradas.forEach((atarea, i) => {
        console.log(`[${i + 1}] Título: ${atarea.titulo}`);
    });
    console.log("¿Quieres ver una tarea? (S/N)");
    let ver = leer("").toUpperCase();
    ver = control(ver);
    if (ver === "S") {
        let i = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
        mostrarDetalles(aTarea, i);
        ver = leer("E para modificar y 0 para salir").toUpperCase();
        ver = control2(ver);
        if (ver === "E") {
            return editar(aTarea[i]);
        }
    }
}

function mostrarTotal(aTarea) {
    console.log("Todas las Tareas:");
    aTarea.forEach((atarea, i) => {
        console.log(`[${i + 1}] Título: ${atarea.titulo}`);
    });
    console.log("¿Quieres ver una tarea? (S/N)");
    let ver = leer("").toUpperCase();
    ver = control(ver);
    if (ver === "S") {
        let i = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
        mostrarDetalles(aTarea, i);
        ver = leer("E para modificar y 0 para salir").toUpperCase();
        ver = control2(ver);
        if (ver === "E") {
            return editar(aTarea[i]);
        }
    }
}

function control(op) {
    if (op !== "S" && op !== "N" && op.trim() !== "") {
        console.error("Ingrese una de las opciones anteriores");
        op = leer("").toUpperCase();
        return control(op);
    }
    return op;
}

function control2(op) {
    if (op !== "E" && op !== "0" && op.trim() !== "") {
        console.error("Ingrese una de las opciones anteriores");
        op = leer("").toUpperCase();
        return control2(op);
    }
    return op;
}

export { Encurso, mostrarTotal, terminadas, pendientes };
