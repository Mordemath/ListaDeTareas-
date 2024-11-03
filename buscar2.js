import prompt from 'prompt-sync';
import pausa from './pause.js';
import mostrarDetalles from './mostrarDetalles.js';
import { edicion } from './editarTareas.js';

const pause = new pausa();
const leer = prompt();

export default function buscarTarea(tareas) {
    const palabraClave = leer("Ingrese una palabra o conjunto de palabras para buscar en los títulos de las tareas: ");
    const resultados = tareas.filter(tarea => tarea.titulo.includes(palabraClave)); // Filtrar tareas

    // Mostrar resultados
    console.clear();
    
    if (resultados.length > 0) {
        console.log("Tareas encontradas:");
        resultados.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.titulo}`);
        });

        let ver = leer("¿Desea ver alguna tarea? s/n: ").toUpperCase();
        while (ver !== "S" && ver !== "N") {
            ver = leer("Ingrese S o N: ").toUpperCase();
        }

        if (ver === "S") {
            let indice = parseInt(leer("Ingrese el número de la tarea: ")) - 1;

            // Verificación del índice ingresado
            if (isNaN(indice) || indice < 0 || indice >= resultados.length) {
                console.error("Número de tarea inválido. Ingrese un número correcto.");
                pause.run(); // Pausa antes de salir
                return;
            } else {
                mostrarDetalles(resultados[indice]);
                let elegir = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
                if (elegir === "E") {
                    console.log("Ingresando al menú de editar tareas...");
                    console.log(`Estás editando la tarea: ${resultados[indice].titulo}`);
                    edicion(resultados[indice]); // Llama al menú de edición
                } else if (elegir !== "0") {
                    console.error("Tiene que ingresar E o 0.");
                    pause.run(); // Pausa antes de salir
                    return;
                }
            }
        }
    } else {
        console.log("No se encontraron tareas que coincidan con la búsqueda.");
    }
}
