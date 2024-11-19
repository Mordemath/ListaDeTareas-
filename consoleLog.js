import chalk from 'chalk';
import prompt from 'prompt-sync';

export default function cl(indice) {
    let leer = prompt();
    switch (indice) {
        case "Menu"://Menu Main
            console.log("******************************");
            console.log("*          📋 MENU           *");
            console.log("******************************");
            console.log("¿Qué deseas hacer?");
            console.log("[1] Ver mis tareas");
            console.log("[2] Buscar una tarea");
            console.log("[3] Agregar una tarea");
            console.log("[0] Salir");
            break;
        case "Menu_Tareas"://Menu Tareas
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
        case "Menu_Buscar_Tareas"://Menu buscar tareas
            console.log("=== Menú de Buscar Tarea ===");
            console.log("Seleccione una opción:");
            console.log("1. Buscar por título");
            console.log("0. Volver al menú principal");

            break;
        case "Menu_Agregar_Tareas"://Menu add tareas
            console.log("         Estas creando una tarea");
            console.log("******************************");
            console.log("*          📋 Agregar Tareas          *");
            console.log("******************************");
            console.log("[1] Agregar título (*Obligatorio)");
            console.log("[2] Agregar descripción (Opcional)");
            console.log("[3] Agregar dificultad (Fácil, media, difícil), por defecto (fácil)");
            console.log("[4] Para ingresar un estado (Pendiente, En curso, Terminada), por defecto (Pendiente)");
            console.log("[5] Agregar Fecha de vencimiento (opcional)");
            console.log("[6] Guardar la tarea (Cuando se guarda la tarea te manda al menú principal)");
            console.log("[0] Volver al menú (Si no se cargan los campos obligatorios no se guardará la tarea)...");
            break;
        case "Leer":
            let a = leer();
            return a;
        case "OpcionInvalida":
            console.error("Opción inválida");
            break;
        case "Error":
            console.error("No hay tareas cargadas...");
            break;



    }
    return "Todo Bien";
}