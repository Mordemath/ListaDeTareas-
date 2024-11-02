import prompt from 'prompt-sync';
import print from 'print';
import tarea from './tarea.js';
import tarea from './tarea2.js';

import mientras, { crearVencimiento } from './CrearAtributo.js';
import { crearDificultad } from './crearTitulo.js';
this.fechaHoy = new Date();
this.fechaActual = this.fechaHoy.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
const leer = prompt();
let op;
let aTarea = [];
export default aTarea;

while (op != "0") {
    print("1");//menu
    switch (op) {
        case "1":
            {

                print("2");
                op = Scannf(`>`);
                switch (op) {
                    case "1": {



                        break;
                    }
                    case "2":
                        {
                            break;
                        }
                    case "3":
                        {
                            break;
                        }
                    case "4":
                        {
                            break;
                        }
                    case "0":
                        {
                            print("5");
                            break;

                        }
                    default:
                        {
                            print("6");
                            break;
                        }


                }
                break;
            }
        case "2":
            {

                print("3");
                op = Scannf(`>`);
                switch (op) {
                    case "1": {
                        print("8");

                        break;
                    }
                    case "0":
                        {

                            print("5");
                            break;

                        }
                    default:
                        {
                            print("6");
                            break;
                        }


                }
                break;
            }
        case "3":
            {

                print("15");
                let titulo = creartitulo(print("9"));
                if (titulo == "1") {
                    print("26");
                    break;
                }

                print("17");
                let descripcion = crearDescripcion(print("9"));
                if (descripcion == "1") {
                    print("26");
                    print("27");
                    if (print("9") == "1") {
                        break;
                    }
                }
                print("16");
                let estado = crearEstado(print("9"));
                if (estado == "1") {
                    print("26");
                    print("27");
                    if (print("9") == "1") {
                        break;
                    }
                }

                let vencimiento = crearVencimiento();
                if(vencimiento == "1"){
                    print("26");
                    print("27");
                    if (print("9") == "1") {
                        break;
                    }
                }

                print("25");
                let dificultad = crearDificultad(print("9"));
                if(dificultad == "1"){
                    print("26");
                    print("27");
                    if (print("9") == "1") {
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


                print("5");
                break;
            }
        default:
            {
                print("6");
                break;
            }
    }
}
