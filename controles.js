//De acá para abajo controles de agregar tarea********************************************************************************************


function tituloValido(titulo) {
    if (titulo === null || titulo.length > 100 || titulo.trim() === "") {
        return false;
    }
    else {
        return titulo;
    }
}

function DescripcionValida(descripcion) {
    if (descripcion.length > 500 || descripcion === " ") {
        return false;
    }
    else {
        return descripcion;
    }
}

function dificultadValida(dificultad) {
    if (dificultad !== "F" && dificultad !== "M" && dificultad !== "D" && dificultad !== "") {
        return false;
    }
    else {
        return dificultad;
    }
}

function EstadoValido(estado) {
    if (estado !== "P" && estado !== "E" && estado !== "T" && estado !== "") {
        return false;
    }
    else {
        return estado;
    }
}

function anoValido(ano) {
    if (ano.trim() === "" || ano.length !== 4 || isNaN(ano)) {
        return false; // Retornamos false si el año no es válido
    }
    return parseInt(ano);
}
function mesValido(mes) {
    if (isNaN(mes) || mes < 1 || mes > 12) {
        return false; // Retornamos false si el mes no es válido
    }
    return parseInt(mes);
}

function diaValido(mes, ano, dia) {

    const diasPorMes = obtenerDiasPorMes(ano);

    if (isNaN(dia) || dia < 1 || dia > diasPorMes[mes - 1]) {
        return false; // Retornamos false si el día no es válido
    }

    return parseInt(dia);
}

function obtenerDiasPorMes(ano) {
    const bisiesto = (ano % 4 === 0 && (ano % 100 !== 0 || año % 400 === 0));

    let diasPorMes;
    if (bisiesto) {
        diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    } else {
        diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }

    return diasPorMes;
}

function controlArreglo(tarea) {
    if (!(tarea.length > 0)) {
        return false;
    }
    return true;
}

function control(op) {
    if (op !== "S" && op !== "N" && op.trim() !== "") {//ahora retorna falso si es invalido y true si es valido
        return false;
    }
    return true;
}


function control2(op) {
    if (op !== "E" && op !== "0" && op.trim() !== "") {//ahora retorna falso si es invalido y true si es valido
        return false;
    }
    return true;
}

function validarTitulo(nuevoTitulo) {
    if (nuevoTitulo > 100 || nuevoTitulo == null) {
        return false;
    }
    return true;
}

function validarDescripcion(nuevaDescripcion) {
    if (nuevaDescripcion > 500) {
        return false;
    }
    return true;
}

function validarDificultad(nuevaDificultad) {
    if (nuevaDificultad !== "1" && nuevaDificultad !== "2" && nuevaDificultad !== "3") {
        return false;
    }
    return true;
}

function validarEstado(nuevoEstado) {
    if (nuevoEstado !== "E" && nuevoEstado !== "P" && nuevoEstado !== "T") {
        return false;
    }
    return true;
}
export { tituloValido, DescripcionValida, dificultadValida, EstadoValido, anoValido, mesValido, diaValido, obtenerDiasPorMes, controlArreglo, validarDescripcion, validarTitulo, control, control2, validarDificultad, validarEstado };



//De acá para abajo controles de [Inserte nombre]******************************************************************************************