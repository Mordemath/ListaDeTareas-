import print from './print'
import pausa from './pause.js'
import mostrarDetalles from './mostrarDetalles.js';

export function edicion(tarea,opciones){

    let nuevaTarea = { ...tarea };

     if(opciones.titulo !== undefined){
        if(opciones.titulo.trim()===""){
            nuevaTarea.titulo=tarea.titulo;
        }else{
            nuevaTarea.titulo=opciones.titulo;//asigna nuevo titulo
        }
     }
     if(opciones.descripcion!==undefined){
        if(opciones.descripcion.trim()===""){
            nuevaTarea.descripcion="----";//borra la descripción
        }else{
            nuevaTarea.descripcion=opciones.descripcion;//asiga nueva descripcion
        }
     }
     if(opciones.estado!==undefined){
       if(opciones.estado==="C"){
        cancelar();
        return {...nuevaTarea, estado: "cancelada"};//Cancela la tarea
       }
       const estadosValidos ={
        "P": "Pendiente",
        "E": "Encurso",
        "T": "Terminada",
        "C": "Cancelada",
       };
    }
    if(estadosValidos[opciones.estado]!==undefined){
        nuevaTarea.estado= estadosValidos[opciones.estado];
       }else{
        nuevaTarea.estado=tarea.estado;
       }
       if(opciones.dificultad!==undefined){

        const dificultades = {
            "1": "🌑",
            "2": "🌑🌑",
            "3": "🌑🌑🌑"
            };
            if(dificultades[opciones.dificultad]!==undefined){
                nuevaTarea.dificultad= dificultades[opciones.dificultad];//asigna dificultad
            }else{
                nuevaTarea.dificultad=tarea.dificultad;//le dejo el mismo valor
            }
       }
       if(opciones.vencimiento !== undefined){
        if(opciones.vencimiento.trim()===""){
            nuevaTarea.vencimiento="-----";//la dejo vacio 
        }else{
            nuevaTarea.vencimiento=opciones.vencimiento;
        }
       }
       nuevaTarea.edicion=new Date();
       return nuevaTarea;
       
}

    export function edicionMenu(tarea) {
        console.log("\n-Si deseas mantener los valores de un atributo, déjalo en blanco.");
        console.log("-Si deseas dejar un atributo en blanco, escribe un espacio.");
        console.log("[1] Título (El título no se puede dejar en blanco)");
        console.log("[2] Descripción");
        console.log("[3] Estado ([P]endiente, [E]n curso, [T]erminada, [C]ancelada).");
        console.log("[4] Dificultad ([1] Fácil, [2] Media, [3] Difícil).");
        console.log("[5] Vencimiento");
        console.log("[0] Volver al menú");
        
        const opcion = leer("¿Qué desea editar?: ")
        
        let opciones = {}
    
        if (opcion === "1") {
            const nuevoTitulo = leer("Ingrese el nuevo título: ");
            const titulov=validarTitulo(nuevoTitulo);
            if(titulov==="-1"){
                return;
            }
            else{
                opciones.titulo = nuevoTitulo
            }
        }
    
        if (opcion === "2") {
            const nuevaDescripcion = leer("Ingrese la nueva descripción: ");
            const desv=validarDescripcion(nuevaDescripcion);
            if(desv==="-1"){
                return;
            }
            else{
                opciones.descripcion = nuevaDescripcion
            }
        }
    
        if (opcion === "3") {
            const estado = leer("Ingrese una opción para el estado: ").toUpperCase();
            opciones.estado = estado
        }
    
        if (opcion === "4") {
            const dificultad = leer("Ingrese una opción para la dificultad: ");
            opciones.dificultad = dificultad
        }
    
        if (opcion === "5") {
            const nuevoVencimiento = leer("Ingrese la nueva fecha de vencimiento: ");
            opciones.vencimiento = nuevoVencimiento
        }
    
        if (opcion === "0") {
            console.log("Volviendo...");
            return // Salir del menú
        }
    
        if (opcion !== "1" && opcion !== "2" && opcion !== "3" && opcion !== "4" && opcion !== "5" && opcion !== "0") {
            console.error("Ingrese un número válido.");
            return // Salir si hay un error
        }
    
        // Actualiza la tarea usando las opciones recopiladas
        tarea = editarTarea(tarea, opciones)
        
        console.log("La tarea se ha guardado.");
        pause.run()
        console.clear()
    
        // Llama de nuevo al menú para continuar editando
        edicionMenu(tarea) 
    }

    function validarTitulo(nuevoTitulo){
        if(nuevoTitulo>100 || nuevoTitulo == null){
            console.error("No se puede tener un titulo sin valor o con una cadena mayor a 100 caracteres.");
            return "-1";
        }
    }

    function validarDescripcion(nuevaDescripcion){
        if(nuevaDescripcion>500){
            console.error("No se puede tener una descripción con mas de 500 caracteres");
            return "-1";
        }
    }


    function cancelar(){
        console.log("Tarea cancelada...");
    }