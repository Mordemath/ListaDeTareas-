import cl from './ConsoleLog.js';
import prompt from 'prompt-sync';
import Tarea from './tarea.js';
import { tituloValido, DescripcionValida, dificultadValida, EstadoValido, anoValido, mesValido, diaValido } from './controles.js';
export function CrearEstado(estado) {
    switch (estado) {
        case "P":
            return "Pendiente";
        case "E":
            return "En Curso";
        case "T":
            return "Terminada";
        case "":
            return "Pendiente";
    }
}
export function CrearDificultad(dificultad) {
    switch (dificultad) {
        case `F`:
            return "🌑🌑🌑";
        case `M`:
            return "🌕🌕🌑";
        case `D`:
            return "🌕🌕🌕";
        case "":
            return "🌑🌑🌑";
    }
}

export function CrearVencimiento(ano, mes, dia) {


    if (!(anoValido(ano))) { return false };

    if (!(mesValido(mes))) { return false };

    if (!(diaValido(mes, ano, dia))) { return false };

    return crearFechaVencimiento(dia, mes, ano);
}

export function crearFechaVencimiento(dia, mes, ano) {
    return `${dia}/${mes}/${ano}`;
}

export function AsignarAtributos(tarea) {//Asigna atributos a la tarea
    let tareas = tarea;
    const scannf = prompt();
    cl("Menu_Agregar_Tareas");//Imprime el menú de tarea
    let op = scannf();
    let fechaActual = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });//Pone la fecha de creacion en formato año/mes/dia
    let titulo, descripcion, estado, dificultad, vencimiento, creacion, ano, dia, mes;
    switch (op) {
        case "1"://titulo
            console.log("Ingrese el título");
            console.log("El titulo no puede exceder los 100 caracteres");
            console.log("El titulo no puede estar vacío");
            titulo = scannf();
            titulo = tituloValido(titulo);
            if (titulo === false) {
                console.log("valor invalido");
                break;
            }
            console.log("Titulo agregado");
            tareas.titulo = titulo;
            break;
        case "2"://Descripción
            console.log("Ingrese la descripción");
            console.log("la descripcion no puede exeder los 500 caracteres");
            descripcion = DescripcionValida(scannf());
            if (descripcion === false) {
                console.log("valor invalido");
                break;
            }
            console.log("Descripción agregada correctamente");
            tareas.descripcion = descripcion;
            break;
        case "3"://Dificultad
            console.log("Ingrese la dificultad [F]acil, [M]edio, [D]ificil");
            console.log("Si el estado está vacío queda en [F]acil por defecto");
            dificultad = scannf().toUpperCase().trim();
            dificultad = dificultadValida(dificultad);
            if (dificultad === false) {
                console.log("valor invalido");
                break;
            }
            dificultad = CrearDificultad(dificultad);
            console.log("Dificultad agregada correctamente");
            tareas.dificultad = dificultad;
            break;
        case "4"://Estado
            console.log("Ingrese el estado");
            console.log("[P]endiente, [E]ncurso, [T]erminado");
            console.log("Si el estado está vacío queda en [P]endiente por defecto");
            estado = scannf().toUpperCase().trim();
            estado = EstadoValido(estado);
            if (estado === false) {
                console.error("valor invalido");
                break;
            }
            estado = CrearEstado(estado);
            console.log("estado agregado correctamente");
            tareas.estado = estado;
            break;
        case "5"://Fecha de Vencimiento
            ano = scannf("ingrese el año 4 digitos ejemplo: (2024)");
            mes = scannf("Ingrese el mes 2 digitos ejemplo: (12)");
            dia = scannf("Ingrese el dia 2 digitos ejemplo (05), (tiene en cuenta años biciestos)");
            vencimiento = CrearVencimiento(ano, mes, dia);
            if (vencimiento === false) {
                console.error("valor invalido");
                break;
            }
            console.log("Vencimiento agregado");
            tareas.vencimiento = vencimiento;
            break;
        case "6"://Guarda la tarea si existe el titulo
            titulo = tareas.titulo;
            descripcion = tareas.descripcion;
            estado = tareas.estado;
            dificultad = tareas.dificultad;
            vencimiento = tareas.vencimiento;
            if (titulo !== null && titulo !== false && titulo !== undefined) {//verifica que exista un titulo
                if (dificultad === "----" || dificultad === undefined) {//Pone como default la dificultad como facil
                    dificultad = CrearDificultad("");
                };
                if (estado === "----" || estado === undefined) {//Pone como default el estado como Pendiente
                    estado = CrearEstado("");
                };
                if (vencimiento === undefined) {//Pone por default la fecha de vencimiento ="----"
                    vencimiento = "----";
                };
                if (descripcion === undefined) {//Pone como default la descripcion ="----"
                    descripcion = "----";
                };
                creacion = fechaActual; 
                console.log("Tarea agregada correctamente");
                const tarea = new Tarea(titulo, estado, descripcion, vencimiento, dificultad, "----", creacion);
                console.log(tarea);
                return tarea;
            }
            break;
        case "0"://vuelve al menu
            console.log("Volviendo al menu...");
            return;
        default:
            console.error("Ingrese una opción válida");
    }
    return AsignarAtributos(tareas);

}
