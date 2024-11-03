
export default function mostrarDetalles(arregloTarea,i) {
    console.log(`Título: ${arregloTarea[i].titulo}`);
    console.log(`Descripción: ${arregloTarea[i].descripcion}`);
    console.log(`Estado: ${arregloTarea[i].estado}`);
    console.log(`Fecha de Creación: ${arregloTarea[i].creacion}`);
    console.log(`Última Edición: ${arregloTarea[i].ultimaEd}`);
    console.log(`Vencimiento: ${arregloTarea[i].vencimiento}`);
    console.log(`Dificultad: ${arregloTarea[i].dificultad}`);
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
