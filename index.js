
import cl from './ConsoleLog.js';
import pausa from './pause.js';
import buscarTarea from './buscarTareas.js';
import Tarea from './tarea.js';
import { AsignarAtributos } from './CrearAtributo.js';
import subMenuTareas from './mostrarTareasMenu.js'


function init() {
    const aTarea = [];
    main(aTarea);
}

function main(aTarea) {
    let op;
    let auxiliarArray=[];
    cl("Menu"); // Mostrar el menú principal
    op = cl("Leer"); // Capturar la opción seleccionada
    switch (op) {
        case '1':
            if (aTarea.length === 0) {
                cl("Error"); // No hay tareas
                break; // Terminar el caso
            }
            cl("Menu_Tareas"); // Menú de tareas
            
            let subMenuOption = cl("Leer"); // Capturar opción del submenú
            aTarea = subMenuTareas(subMenuOption,aTarea);
            console.log("Se realizo un cambio");
            break;
        case "2":
            if (aTarea.length === 0) {
                cl("Error"); // No hay tareas
                break; // Terminar el caso
            }
            auxiliarArray = buscarTarea(aTarea);
            if (auxiliarArray) {
                aTarea = auxiliarArray;
                console.log("Se realizo un cambio");
            }
            break;
        case "3":
            const tarea = new Tarea();
            aTarea.push(AsignarAtributos(tarea));
            if (aTarea[(aTarea.length) - 1 ] == undefined || aTarea[(aTarea.length) - 1] == null) {
                aTarea.pop();
            }
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
