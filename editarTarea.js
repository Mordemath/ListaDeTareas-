
import prompt from 'prompt-sync';
import pausa from './pause.js';
import { validarDescripcion, validarTitulo, validarDificultad, validarEstado } from './controles.js';
import { CrearVencimiento } from './CrearAtributo.js';
import { crearFechaVencimiento } from './CrearAtributo.js';

function editarTitulo(tarea, opciones) {
    if (opciones.titulo.trim() === "") {
        return tarea.titulo;  // Devuelve el título anterior
    } else {
        return opciones.titulo;  // Asigna nuevo título
    }
}

function editarDescripcion(tarea, opciones) {
    if (opciones.descripcion.trim() === "") {
        return tarea.descripcion;  // Devuelve directamente la descripción de la tarea
    } else {
        return opciones.descripcion;  // Asigna nueva descripción
    }
}

function editarEstado(tarea, opciones) {
    const estadosValidos = {
        "P": "Pendiente",
        "E": "Encurso",
        "T": "Terminada",
        "C": "Cancelada",
    };

    if (opciones.estado === "C") {
        return "Cancelada"; // retorna la cadena en lugar de un objeto
    }

    if (estadosValidos[opciones.estado] !== undefined) {
        return estadosValidos[opciones.estado]; // asigna el nuevo estado
    } else {
        return tarea.estado; // mantiene el estado actual si es inválido
    }
}

function editarDificultad(tarea, opciones) {
    const dificultades = {
        "1": "🌑🌑🌑",
        "2": "🌕🌕🌑",
        "3": "🌕🌕🌕"
    };

    return dificultades[opciones.dificultad] || tarea.dificultad;
}

function editarVencimiento(tarea, opciones) {
    if (opciones.vencimiento.trim() === "") {
        return tarea.vencimiento
    } else {
        return opciones.vencimiento;
    }
}

export function editarTarea(tarea, opciones) {
    let nuevaTarea = tarea;
    if (opciones.titulo !== undefined) {
        nuevaTarea.titulo = editarTitulo(tarea, opciones);
    }
    if (opciones.descripcion !== undefined) {
        nuevaTarea.descripcion = editarDescripcion(tarea, opciones);
    }
    if (opciones.estado !== undefined) {
        nuevaTarea.estado = editarEstado(tarea, opciones);
    }
    if (opciones.dificultad !== undefined) {
        nuevaTarea.dificultad = editarDificultad(tarea, opciones);
    }
    if (opciones.vencimiento !== undefined) {
        nuevaTarea.vencimiento = editarVencimiento(tarea, opciones);
    }
    return nuevaTarea;
}

export function edicionMenu(tarea) {
    const leer = prompt();
    console.log("\n-Si deseas mantener los valores de un atributo, déjalo en blanco.");
    console.log("[1] Título (El título no se puede dejar en blanco)");
    console.log("[2] Descripción");
    console.log("[3] Estado ([P]endiente, [E]n curso, [T]erminada, [C]ancelada).");
    console.log("[4] Dificultad ([1] Fácil, [2] Media, [3] Difícil).");
    console.log("[5] Vencimiento");
    console.log("[0] Volver al menú");
    const opcion = leer("¿Qué desea editar?: ");
    let bandera = false;
    let opciones = {};
    let ano,mes,dia;

    if (opcion === "1") {
        const nuevoTitulo = leer("Ingrese el nuevo título: ");
        const titulov = validarTitulo(nuevoTitulo);
        if (titulov === false) {
            console.error("El titulo que ingreso es invalido");
        }
        else {
            opciones.titulo = nuevoTitulo;
            bandera = true;
        }
    }

    if (opcion === "2") {
        const nuevaDescripcion = leer("Ingrese la nueva descripción: ");
        const desv = validarDescripcion(nuevaDescripcion);
        if (desv === false) {
            console.error("la descripción que ingreso es invalida");
        }
        else {
            opciones.descripcion = nuevaDescripcion;
            bandera = true;
        }
    }

    if (opcion === "3") {
        const estado = leer("Ingrese una opción para el estado: ").toUpperCase();
        const estav = validarEstado(estado);
        if(estav===false){
            console.error("El Estado que ingreso es invalido");
        }
        else{
            opciones.estado = estado;
            bandera = true;
        }
    }

    if (opcion === "4") {
        const dificultad = leer("Ingrese una opción para la dificultad: ");
        const difv = validarDificultad(dificultad);
        if (difv === false) {
            console.error("la Dificultad que ingreso es invalida");
        }
        else{
            opciones.dificultad = dificultad;
            bandera = true;
        }
    }

    if (opcion === "5") {
        ano = leer("ingrese el año 4 digitos ejemplo: (2024)");
        mes = leer("Ingrese el mes 2 digitos ejemplo: (12)");
        dia = leer("Ingrese el dia 2 digitos ejemplo (05), (tiene en cuenta años biciestos)");
        const nuevoVencimiento = CrearVencimiento(ano, mes, dia);
        if (nuevoVencimiento === false) {
            console.error("valor invalido");
        }
        else{
            console.log("Vencimiento agregado");
            opciones.vencimiento = nuevoVencimiento;
            bandera = true;
        }
    }

    if (opcion === "0") {
        console.log("Volviendo...");
        return tarea;
    }

    if (opcion !== "1" && opcion !== "2" && opcion !== "3" && opcion !== "4" && opcion !== "5" && opcion !== "0") {
        console.error("Ingrese un número válido.");
        return // Salir si hay un error
    }

    if (bandera === true) {
        tarea.ultimaEd = new Date(); // Actualiza la tarea usando las opciones recopiladas
        tarea = editarTarea(tarea, opciones);

        console.log("La tarea se ha guardado.");
        pausa();
        console.clear();
    }


    // Llama de nuevo al menú para continuar editando
    edicionMenu(tarea);
}
export default function editar(aTarea) {
    return edicionMenu(aTarea);
}
