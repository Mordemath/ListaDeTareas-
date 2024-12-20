import { Encurso, opcionesDeTarea, terminadas, pendientes } from './todasTareas.js';
import cl from './ConsoleLog.js';
export default function subMenuTareas(subMenuOption, aTarea) {
    let auxiliarArray = [];
    switch (subMenuOption) {
        case "1": // Mostrar todas las tareas
        
            auxiliarArray = opcionesDeTarea(aTarea, 0);

            if (auxiliarArray) {//En caso de que se modifique retorna la tarea modificada
                return auxiliarArray;
            }
            else{
                return aTarea;
            }
        case "2":// Mostrar tareas pendientes
            auxiliarArray = pendientes(aTarea);
            if (auxiliarArray) {//En caso de que se modifique retorna la tarea modificada
                return auxiliarArray;
            }
            else{
                return aTarea;
            }
        case "3":// Mostrar tareas en curso
            auxiliarArray = Encurso(aTarea);
            if (auxiliarArray) {//En caso de que se modifique retorna la tarea modificada
                return auxiliarArray;
            }
            else{
                return aTarea;
            }
        case "4": // Mostrar tareas terminadas
            auxiliarArray = terminadas(aTarea);
            if (auxiliarArray) {//En caso de que se modifique retorna la tarea modificada
                return auxiliarArray;
            }
            else{
                return aTarea;
            }
        case "0":
            return aTarea;
        default:
            cl("OpcionInvalida"); // Opción inválida
            return aTarea;
    }
}