
export default function mostrarDetalles(arregloTarea) {
    console.log(`Título: ${arregloTarea['titulo']}`);
    console.log(`Descripción: ${arregloTarea['descripcion']}`);
    console.log(`Estado: ${arregloTarea['estado']}`);
    console.log(`Fecha de Creación: ${arregloTarea['fechaCreacion']}`);
    console.log(`Última Edición: ${arregloTarea['fechaUltimaEdicion']}`);
    console.log(`Vencimiento: ${arregloTarea['fechaVencimiento']}`);
    console.log(`Dificultad: ${arregloTarea['dificultad']}`);
}


export function mostrarTareas(arregloTarea, estadoDeseado) 
{
   ///TODAS
    if (estadoDeseado != null)
    {
        return arregloTarea;
    }
     ///Caso 1: En Curso
    if (estadoDeseado === "E")
    {
        let tareasFiltradas = arregloTarea.filter(tarea => tarea.estado === estadoDeseado);
        return tareasFiltradas;
    }
    ///TERMINADAS
    if (estadoDeseado === "T")
    {
        let tareasFiltradas = arregloTarea.filter(tarea => tarea.estado === estadoDeseado);
        return tareasFiltradas;
    }
    ///PENDIENTES
    if (estadoDeseado === "P")
    {
        let tareasFiltradas = arregloTarea.filter(tarea => tarea.estado === estadoDeseado);
        return tareasFiltradas;
    }
    
    if (estadoDeseado === "C")
    {
        let tareasFiltradas = arregloTarea.filter(tarea => tarea.estado === estadoDeseado);
        return tareasFiltradas;
    }
}
