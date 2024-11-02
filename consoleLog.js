import chalk from 'chalk';
import prompt from 'prompt-sync'
import aTarea from './index.js';
//import { mostrarTareas } from './ruta/al/archivo/tareas';

const leer = prompt();
export default  function cl(indice) {
    switch (indice) {
        case "1"://Menu Main
            console.log("******************************");
            console.log("*          📋 MENU           *");
            console.log("******************************");
            console.log("¿Qué deseas hacer?");
            console.log("[1] Ver mis tareas");
            console.log("[2] Buscar una tarea");
            console.log("[3] Agregar una tarea");
            console.log("[0] Salir");
            break;
        case "2"://Menu Tareas
            console.log("******************************");
            console.log("*          📋 Tareas          *");
            console.log("******************************");
            console.log("¿Qué deseas hacer?");
            console.log("[1] Ver todas mis tareas");
            console.log("[2] Pendientes");
            console.log("[3] En curso");
            console.log("[4] Terminadas");
            console.log("[0] Salir...");
            break;
        case "3"://Menu buscar tareas
            console.log("=== Menú de Buscar Tarea ===");
            console.log("Seleccione una opción:");
            console.log("1. Buscar por título");
            console.log("0. Volver al menú principal");
            break
        case "4"://Menu add tareas
            console.log("******************************");
            console.log("*          📋 Agregar Tareas          *");
            console.log("******************************");
            console.log("[1] Agregar título (*obligatorio)");
            console.log("[2] Agregar descripción (opcional)");
            console.log("[3] Agregar dificultad (Fácil, media, difícil), por defecto (fácil)");
            console.log("[4] Para ingresar un estado (Pendiente, En curso, Terminada), por defecto (Pendiente)");
            console.log("[5] Agregar Fecha de vencimiento (opcional)");
            console.log("[6] Guardar la tarea (Cuando se guarda la tarea te manda al menú principal)");
            console.log("[0] Volver al menú (Si no se cargan los campos obligatorios no se guardará la tarea)...");
            break;
        case "5"://Pausa
            console.log("Presione la tecla [ENTER] para continuar...");
            break;
        case "6":
            console.log("No se encuentran resultados.");
            break;
        case "7":
            console.log(chalk.greenBright(`[] Ingresa el titulo o solo [Enter] para cancelar.\n`));
            break;
        case "8":
            console.log("Escriba el titulo o una palabra clave del titulo de tarea a buscar o [ENTER] para volver\n")
            break;
        case "9":
            return leer(`>`);
            break;
        case "10":
            console.log("El titulo no puede estar vacío.\nVuelva a intentarlo.");
            break;
        case "11":
            console.log("El titulo no puede superar los 100 caracteres.\nVuelva a intentarlo.");
            break;
        case "12":
            console.log("coincidencias encontradas...");
            break;
        case "13":
            console.log("");
        case "12":
            console.log("coincidencias encontradas...");
            break;
        case "13":
            console.clear();
            break
        case "14":
            console.log(chalk.greenBright("Estas creando una tarea\n"));
            console.log(`*************************\n1. Asignar titulo.\n2. Asignar descripción.\n3. Asignar Estado.\n4. Asignar dificultad.\n5. Asignar vencimiento.\n6. Guardar Cambios.\n7. Cancelar.`);
            break;
        case "15":
            console.log("ingrese el titulo  de la tarea o [ENTER] para cancelar");
            console.log("El titulo no puede estar vacío ni superar los 100 caracteres.\n");
            break;
        case "16":
            console.log(`[] Ingresa el estado o solo [Enter] para dejarlo en default(pendiente):\n([P]endiente) / [E]n curso / [T]erminada / [C]ancelada:`);
            break;
        case "17":
            console.log(`[] Ingresa la descripción o solo [Enter] para cancelar.\n`);
            break;
        case "18":
            console.log("Ingrese el vencimiento o enter para cancelar")
            console.log(`[] Ingresa el año de vencimiento o solo [Enter] para cancelar:\n`);
            console.log(`[Ejemplo: 2021]`);
            break;
        case "19":
            console.log("Año ingresado invalido, solo se admiten numeros de 4 digitos sin espacios.\nVuelva a intentarlo.");
            break;
        case "20":
            console.log(`[] Ingresa el mes de vencimiento o solo [Enter] para cancelar:\n`);
            console.log(`[Ejemplo: 03]`);
            break;
        case "21": console.log("mes ingresado invalido");
            break;
        case "22":
            console.log(`[] Ingresa el día de vencimiento o solo [Enter] para cancelar:\n`);
            console.log(`[Ejemplo: 03]`);
            break;
        case "23":
            console.log("día ingresado invalido");
            break;
        case "25":
            console.log(`[] Ingresa la dificultad o solo [Enter] para cancelar:\nDificultad [F]acil / [M]edio / [D]ificil:`);
            break;
        case "26":
            console.log(chalk.redBright("Cancelado"));
            break;
        case "27":
            console.log("Enter para continuar, cualquier otra tecla para volver al menu");
            break;

        /*case "30": ///En curso

            const estadoDeseado = "E";
            const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
            console.log("Tareas en estado En Curso:");
            tareasFiltradas.forEach(tarea => {
                console.log("Título:", tarea.titulo);
                console.log("Descripción:", tarea.descripcion);
                console.log("Dificultad:", tarea.dificultad);
                console.log("Fecha de Creación:", tarea.fechaCreacion);
                console.log("Fecha de Modificación:", tarea.fechaModificacion);
                console.log("Fecha de Vencimiento:", tarea.fechaVencimiento);
                console.log("Estado:", tarea.estado);
                console.log("---------------");
            })
            break;

        case "40": /// Terminadas

            const estadoDeseado = "T";
            const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
            console.log("Tareas Terminadas:");
            tareasFiltradas.forEach(tarea => {
                console.log("Título:", tarea.titulo);
                console.log("Descripción:", tarea.descripcion);
                console.log("Dificultad:", tarea.dificultad);
                console.log("Fecha de Creación:", tarea.fechaCreacion);
                console.log("Fecha de Modificación:", tarea.fechaModificacion);
                console.log("Fecha de Vencimiento:", tarea.fechaVencimiento);
                console.log("Estado:", tarea.estado);
                console.log("---------------");


            });
            break;
        case "41": //Canceladas
            {
                const estadoDeseado = "C";
                const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
                console.log("Tareas Canceladas:");
                tareasFiltradas.forEach(tarea => {
                    console.log("Título:", tarea.titulo);
                    console.log("Descripción:", tarea.descripcion);
                    console.log("Dificultad:", tarea.dificultad);
                    console.log("Fecha de Creación:", tarea.fechaCreacion);
                    console.log("Fecha de Modificación:", tarea.fechaModificacion);
                    console.log("Fecha de Vencimiento:", tarea.fechaVencimiento);
                    console.log("Estado:", tarea.estado);
                    console.log("---------------");


                });
                break;
        case "42": /// Pendientes

            const estadoDeseado = "P";
            const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
            console.log("Tareas en estado En Curso:");
            tareasFiltradas.forEach(tarea => {
                console.log("Título:", tarea.titulo);
                console.log("Descripción:", tarea.descripcion);
                console.log("Dificultad:", tarea.dificultad);
                console.log("Fecha de Creación:", tarea.fechaCreacion);
                console.log("Fecha de Modificación:", tarea.fechaModificacion);
                console.log("Fecha de Vencimiento:", tarea.fechaVencimiento);
                console.log("Estado:", tarea.estado);
                console.log("---------------");


            }); */
            break;
        case "50": ///Todas las tareas
            const tareas = mostrarTareas(aTarea,);
            console.log("Todas las Tareas:");
            tareas.forEach(tarea => {
                console.log("Título:", tarea.titulo);
                console.log("Descripción:", tarea.descripcion);
                console.log("Dificultad:", tarea.dificultad);
                console.log("Fecha de Creación:", tarea.fechaCreacion);
                console.log("Fecha de Modificación:", tarea.fechaModificacion);
                console.log("Fecha de Vencimiento:", tarea.fechaVencimiento);
                console.log("Estado:", tarea.estado);
                console.log("---------------");
            });
            break;



    }
    return "Todo Bien";
}