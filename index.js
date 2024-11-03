import tarea from './tarea.js';
import { CrearTitulo, CrearDescripcion, CrearDificultad, CrearEstado, CrearVencimiento } from './CrearAtributo.js';
import cl from './ConsoleLog.js';
import prompt from 'prompt-sync'
import pause from './pause.js';
import buscador from './buscarTareas.js'
const miBuscador=new buscador();

let pausa = pause();

let fechaHoy = new Date();
let fechaActual = fechaHoy.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
let Scannf = prompt();
let op;
let aTarea = [];
export default aTarea;

function main() {
    cl("1");//menu
    op = cl("9");
    switch (op) {
        case '1':
            if (aTarea.length === 0) {
                cl("52");
                return menu();
            };
            cl("2");
            switch (op) {
                case "1":
                    cl("50");//todas las tareas
                    break;
                case "2":
                    cl("31");//pendientes
                    break;
                case "3":
                    cl("28");//en curso
                    break;
                case "4":
                    cl("29");//terminadas
                    break;
                case "0":
                    cl("5");
                    break;
                default:
                    cl("51");
                    break;
            }
            break;
        case "2":
            miBuscador.buscador(aTarea,op,j);
            break;
        case "3":

            cl("15");
            let titulo = CrearTitulo(cl("9"));
            if (titulo === "1") {
                cl("26");
                break;
            }
             console.log("Titulo:  " + titulo);


            cl("17");
           
            let descripcion = CrearDescripcion(cl("9"));
            if (descripcion === "1") {
                cl("26");
                cl("27");
                if (cl("9") === "1") {
                    break;
                }
            }
            cl("16");
            let estado = CrearEstado(cl("9"));
            if (estado === "1") {
                cl("26");
                cl("27");
                if (cl("9") === "1") {
                    break;
                }
            }

            let vencimiento = CrearVencimiento();
            if (vencimiento === "1") {
                cl("26");
                cl("27");
                if (cl("9") === "1") {
                    break;
                }
            }

            cl("25");
            let dificultad = CrearDificultad(cl("9"));
            if (dificultad === "1") {
                cl("26");
                cl("27");
                if (cl("9") === "1") {
                    break;
                }
            }

            let ultimaEd = null;
            let creacion = fechaActual;
            aTarea.push(new tarea(titulo, estado, descripcion, vencimiento, dificultad, ultimaEd, creacion));
            break;
        default:
            cl("51");
            break;
    }
    cl("5");
    pausa();
    console.clear();
    return menu();

};


main();