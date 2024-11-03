import Tarea from './tarea.js';
import { CrearTitulo, CrearDescripcion, CrearDificultad, CrearEstado, CrearVencimiento } from './CrearAtributo.js';
import cl from './ConsoleLog.js';
import prompt from 'prompt-sync';
import pause from './pause.js';
import buscarTarea from './buscarTareas.js';
import { Encurso, mostrarTotal, terminadas, pendientes, canceladas } from './todasTareas.js';


let pausa = pause();
let fechaHoy = new Date();
let fechaActual = fechaHoy.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
let Scannf = prompt();
let op;
let aTarea = [];
export default aTarea;

function main() {
    cl("1"); // Mostrar el menú principal
    op = cl("9"); // Capturar la opción seleccionada
    let auxiliarArray = []
    switch (op) {
        case '1':
            if (aTarea.length === 0) {
                cl("52"); // No hay tareas
                break; // Terminar el caso
            }
            cl("2"); // Menú de tareas
            let subMenuOption = cl("9"); // Capturar opción del submenú
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
            let titulo = CrearTitulo();
            if (titulo === "1") {
                cl("26");
                break; // Terminar el caso si la validación falla
            }
            let descripcion = CrearDescripcion();
            if (descripcion === "1") {
                cl("26"); // Manejo de error
                cl("27");
                break;
            }
            let estado = CrearEstado();
            if (estado === "1") {
                cl("26");
                cl("27");
                break;
            }
            let vencimiento = CrearVencimiento();
            if (vencimiento === "1") {
                cl("26");
                cl("27");
                break;
            }
            let dificultad = CrearDificultad();
            if (dificultad === "1") {
                cl("26");
                cl("27");
                break;
            }
            let ultimaEd = null;
            let creacion = fechaActual;
            let nuevaTarea = new Tarea(titulo, estado, descripcion, vencimiento, dificultad, ultimaEd, creacion);
            console.log(nuevaTarea);
            aTarea.push(nuevaTarea);
            break;
        case "0":
            return;
        default:
            cl("51"); // Opción inválida
            break;
    }
    pause();
    console.clear();

    return main(); // Llamar de nuevo a main para reiniciar el flujo

}

main();
