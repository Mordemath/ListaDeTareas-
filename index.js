import tarea from './tarea.js';
import { CrearTitulo, CrearDescripcion, CrearDificultad, CrearEstado, CrearVencimiento } from './CrearAtributo.js';
import cl from './ConsoleLog.js';
import prompt from 'prompt-sync'
import pause from './pause.js';
let pausa = pause();

let fechaHoy = new Date();
let fechaActual = fechaHoy.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
let Scannf = prompt();
let op;
let aTarea = [];
export default aTarea;

while (op != "0") {
    cl("1");//menu
    op = cl("9");
    switch (op) {
        case "1":
            {

                cl("2");
                op = Scannf(`>`);
                switch (op) {
                    case "1": {
                        cl("50");


                        break;
                    }
                    case "2":
                        {
                            cl("42");
                            break;
                        }
                    case "3":
                        {
                            cl("30");
                            break;
                        }
                    case "4":
                        {


                            cl("40");
                            break;
                        }
                    case "0":
                        {
                            cl("5");
                            break;

                        }
                    default:
                        {
                            cl("6");
                            break;
                        }


                }
                break;
            }
        case "2":
            {

                cl("3");
                op = Scannf(`>`);
                switch (op) {
                    case "1": {
                        cl("8");

                        break;
                    }
                    case "0":
                        {

                            cl("5");
                            break;

                        }
                    default:
                        {
                            cl("6");
                            break;
                        }


                }
                break;
            }
        case "3":
            {

                cl("15");
                let titulo = CrearTitulo(cl("9"));
                if (titulo == "1") {
                    cl("26");
                    break;
                }

                cl("17");
                let descripcion = CrearDescripcion(cl("9"));
                if (descripcion == "1") {
                    cl("26");
                    cl("27");
                    if (cl("9") == "1") {
                        break;
                    }
                }
                cl("16");
                let estado = CrearEstado(cl("9"));
                if (estado == "1") {
                    cl("26");
                    cl("27");
                    if (cl("9") == "1") {
                        break;
                    }
                }

                let vencimiento = CrearVencimiento();
                if (vencimiento == "1") {
                    cl("26");
                    cl("27");
                    if (cl("9") == "1") {
                        break;
                    }
                }

                cl("25");
                let dificultad = CrearDificultad(cl("9"));
                if (dificultad == "1") {
                    cl("26");
                    cl("27");
                    if (cl("9") == "1") {
                        break;
                    }
                }

                let ultimaEd = null;
                let creacion = fechaActual;
                aTarea.push(new tarea(titulo, estado, descripcion, vencimiento, dificultad, ultimaEd, creacion))
                break;

            }
        case "0":
            {


                cl("5");
                break;
            }
        default:
            {
                cl("6");
                break;
            }

    }
}
