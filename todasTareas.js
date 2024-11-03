import chalk from 'chalk';
import prompt from 'prompt-sync';
import aTarea from './index.js';
import Tarea from './tarea.js'
import mostrarDetalles from './mostrarDetalles.js';
import editar from './editarTarea.js';



         function Encurso(aTarea){
            const estadoDeseado = "E";
            const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado1);
            console.log("Tareas en estado En Curso:");
            tareasFiltradas.forEach(tarea => {
                console.log(`[1] Título:  ${aTarea.titulo}`);
            })
            console.log("¿Quieres ver una tarea? (S/N)");
            let ver = leer("").toUpperCase();
            ver=control(ver);
            if (ver === "S") {
                let i = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
                mostrarDetalles(aTarea, i);
                ver = leer("E para modificar y 0 para salir").toUpperCase();
                ver=control2(ver);
                if (ver1 === "E") {
                    return editarTarea(aTarea[i]);
                }
            }
        }
            

         function  terminadas(aTarea){
            const estadoDeseado = "T";
            const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
            console.log("Tareas Terminadas:");
            tareasFiltradas.forEach(tarea => {
            console.log(`[1] Título:  ${aTarea.titulo}`);
            })
            console.log("¿Quieres ver una tarea? (S/N)");
            let ver = leer("").toUpperCase();
            ver=control(ver);
            if (ver === "S") {
                let i = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
                mostrarDetalles(aTarea, i);
                ver = leer("E para modificar y 0 para salir").toUpperCase();
                ver=control2(ver);
                if (ver === "E") {
                    return editarTarea(aTarea[i]);
                }
            }
        }
           
         function  canceladas(aTarea){
            const estadoDeseado = "C";
            const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
            console.log("Tareas Canceladas:");
            tareasFiltradas.forEach(tarea => {
                console.log(`[1] Título:  ${aTarea.titulo}`);
            })
            console.log("¿Quieres ver una tarea? (S/N)");
            let ver = leer("").toUpperCase();
            ver=control(ver);
            if (ver === "S") {
                let i = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
                mostrarDetalles(aTarea, i);
                ver = leer("E para modificar y 0 para salir").toUpperCase();
                ver=control2(ver);
                if (ver === "E") {
                    return editarTarea(aTarea[i]);
                }
            }
        }

    

         function pendientes(aTarea){
            const estadoDeseado = "P";
            const tareasFiltradas = mostrarTareas(aTarea, estadoDeseado);
            console.log("Tareas en estado En Curso:");
            tareasFiltradas.forEach(tarea => {
                console.log(`[1] Título:  ${aTarea.titulo}`);
            })
            console.log("¿Quieres ver una tarea? (S/N)");
            let ver = leer("").toUpperCase();
            ver=control(ver);
            if (ver === "S") {
                let i = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
                mostrarDetalles(aTarea, i);
                ver = leer("E para modificar y 0 para salir").toUpperCase();
                ver=control2(ver);
                if (ver === "E") {
                    return editarTarea(aTarea[i]);
                }
            }
        }

    
    

     function mostrarTotal(aTarea){
        console.log("Todas las Tareas:");
        aTarea.forEach(aTarea => {
            console.log(`[1] Título:  ${aTarea.titulo}`);
        });
        console.log("¿Quieres ver una tarea? (S/N)");
        let ver = leer("").toUpperCase();
        ver=control(ver);
        if (ver === "S") {
            let i = parseInt(leer("Ingrese el número de la tarea: ")) - 1;
            mostrarDetalles(aTarea, i);
            ver = leer("E para modificar y 0 para salir").toUpperCase();
            ver=control2(ver);
            if (ver === "E") {
                return editarTarea(aTarea[i]);
            }
        }
    }

    function control(op){
        if(op!=="S" ||  op!== "N" || op.trim()==="" ){
            console.error("Ingrese una de las opciones anteriores");
            op=leer("");
            return control(op);
        }
        else{
            return;
        }
    }

    function control2(op){
        if(op!=="E" ||  op!== "0" || op.trim()==="" ){
            console.error("Ingrese una de las opciones anteriores");
            op=leer("");
            return control2(op);
        }
        else{
            return;
        }
    }
        
    

   export{ Encurso, mostrarTotal, terminadas, pendientes, canceladas};