import Tarea from './tarea.js';
import { CrearTitulo, CrearDescripcion, CrearDificultad, CrearEstado, CrearVencimiento } from './CrearAtributo.js';
import cl from './ConsoleLog.js';
import prompt from 'prompt-sync';
import pause from './pause.js';
import Buscador from './buscarTareas.js';

const miBuscador = new Buscador();

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

    switch (op) {
        case '1':
            if (aTarea.length === 0) {
                cl("52"); // No hay tareas
                break; // Terminar el caso
            }
            cl("2"); // Menú de tareas
            let subMenuOption = cl("9"); // Capturar opción del submenú
            switch (subMenuOption) {
                case "1":
                    cl("50"); // Mostrar todas las tareas
                    break;
                case "2":
                    cl("31"); // Mostrar tareas pendientes
                    break;
                case "3":
                    cl("28"); // Mostrar tareas en curso
                    break;
                case "4":
                    cl("29"); // Mostrar tareas terminadas
                    break;
                case "0":
                    cl("5"); // Pausa
                    break;
                default:
                    cl("51"); // Opción inválida
                    break;
            }
            break;
        case "2":
            miBuscador.buscador(aTarea);
            break;
        case "3":
            cl("15");
            let titulo = CrearTitulo(cl("9"));
            if (titulo === "1") {
                cl("26");
                break; // Terminar el caso si la validación falla
            }

            cl("17");
            let descripcion = CrearDescripcion(cl("9"));
            if (descripcion === "1") {
                cl("26"); // Manejo de error
                cl("27");
                break;
            }

            cl("16");
            let estado = CrearEstado(cl("9"));
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

            cl("25");
            let dificultad = CrearDificultad(cl("9"));
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
    cl("5"); // Pausa
    pause();
    console.clear();
   
    return main(); // Llamar de nuevo a main para reiniciar el flujo

}

main();
