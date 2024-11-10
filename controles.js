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
    if ( descripcion.length > 500 || descripcion === " ") {
        return false;
    }
    else {
        return descripcion;
    }
}

function dificultadValida(dificultad) {
    if (dificultad !== "F" && dificultad !== "M" && dificultad !== "D" && dificultad !=="") {
       return false;
    }
    else {
        return dificultad;
    }
}

function EstadoValido(estado) {
    if (estado !== "P" && estado !== "E" && estado !== "T" && estado !== "" ) {
        return false;
    }
    else {
        return estado;
    }
}

function anoValido(ano) {
    if (ano === "" || ano.trim() === "" || ano.length !== 4 || isNaN(ano)) {
        return null;
    }
    return parseInt(ano);
}
function mesValido(mes) {
    if (isNaN(mes) || mes < 1 || mes > 12) {
        return null; // Retornamos null si el mes no es válido
    }
    return parseInt(mes);
}

function diaValido(mes, ano, dia) {

    const diasPorMes = obtenerDiasPorMes(ano);

    if (isNaN(dia) || dia < 1 || dia > diasPorMes[mes - 1]) {
        return null; // Retornamos null si el día no es válido
    }

    return parseInt(dia);
}

function obtenerDiasPorMes(ano) {
    const bisiesto = (ano % 4 === 0 && (ano % 100 !== 0 || año % 400 === 0));

    let diasPorMes;
    if (bisiesto) {
        diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    } else {
        diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }

    return diasPorMes;
}


export { tituloValido, DescripcionValida, dificultadValida, EstadoValido, anoValido, mesValido, diaValido, obtenerDiasPorMes }


//De acá para abajo controles de [Inserte nombre]******************************************************************************************