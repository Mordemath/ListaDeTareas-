
import cl from './ConsoleLog.js';
import pausa from './pause.js';
import buscarTarea from './buscarTareas.js';
import Tarea from './tarea.js';
import { AsignarAtributos } from './CrearAtributo.js';
import { Encurso, mostrarTotal, terminadas, pendientes, canceladas } from './todasTareas.js';

function init(){
    const aTarea=[];
    main(aTarea);
}

function main(aTarea) {
    let op;
    cl("Menu"); // Mostrar el menú principal
    op = cl("Leer"); // Capturar la opción seleccionada
    let auxiliarArray = []
    switch (op) {
        case '1':
            if (aTarea.length === 0) {
                cl("Error"); // No hay tareas
                break; // Terminar el caso
            }
            cl("Menu_Tareas"); // Menú de tareas
            let subMenuOption = cl("Leer"); // Capturar opción del submenú
            switch (subMenuOption) {
                case "1": // Mostrar todas las tareas
                    auxiliarArray = mostrarTotal(aTarea);

                    if (auxiliarArray) {
                        aTarea = auxiliarArray;
                        console.log("Se realizo un cambio");
                    }

                    break;
                case "2":// Mostrar tareas pendientes
                    auxiliarArray = pendientes(aTarea);
                    if (auxiliarArray) {
                        aTarea = auxiliarArray;
                        console.log("Se realizo un cambio");
                    }
                    break;
                case "3":// Mostrar tareas en curso
                    auxiliarArray = Encurso(aTarea);
                    if (auxiliarArray) {
                        aTarea = auxiliarArray;
                        console.log("Se realizo un cambio");
                    }
                    break;
                case "4": // Mostrar tareas terminadas
                    auxiliarArray = terminadas(aTarea);
                    if (auxiliarArray) {
                        aTarea = auxiliarArray;
                        console.log("Se realizo un cambio");
                    }
                    break;
                case "0"://Mostrar Tareas canceladas
                    auxiliarArray = canceladas(aTarea);
                    if (auxiliarArray) {
                        aTarea = auxiliarArray;
                        console.log("Se realizo un cambio");
                    }
                    break;
                default:
                    cl("51"); // Opción inválida
                    break;
            }
            break;
        case "2":
            auxiliarArray = buscarTarea(aTarea);
            if (auxiliarArray) {
                aTarea = auxiliarArray;
                console.log("Se realizo un cambio");
            }
            break;
        case "3":
            const tarea = new Tarea();
            aTarea.push(AsignarAtributos(tarea));
            console.log(aTarea);
            break;
        case "0":
            return;
        default:
            cl("51"); // Opción inválida
            break;
    }
    cl("Pausa");
    pausa();
    console.clear();

    return main(aTarea); // Llamar de nuevo a main para reiniciar el flujo

}
init(); 
main();
