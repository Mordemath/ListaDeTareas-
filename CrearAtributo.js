import cl from './ConsoleLog.js';
export function CrearTitulo() {
    cl("15");
    cl("9");
    let titulo = cl("9");
    if (titulo === null || titulo.length > 100 || titulo === " ") {
        cl("28");
        CrearTitulo();
    }
    else if (titulo === "") {
        return "1";
    }
    return titulo;
}

export function CrearDescripcion() {
    cl("17");
    let descripcion = cl("9");

    return descripcion;
}

export function CrearEstado() {
    cl("16");
    let estado = cl("9");
    if (estado != "P" && estado != "E" && estado != "T" && estado != "C" && estado != "") {
        return "1";
    }
    if (estado === "") {
        return "p";
    }
    return estado;
}

export function CrearVencimiento() {
    cl("18");
    //Pedimos el año**************************************************************************
    cl("18");
    let año = cl("9");

    if ((año === "" || año === ` ` || año.length != 4 || año == NaN) && año != "") {
        cl("19");
        return "1";
    }
    let bisiesto = (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0));
    let diasPorMes;
    // Ajustar febrero para años bisiestos
    if (bisiesto) {
        diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    else {
        diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    //Pedimos el mes**************************************************************************

    cl("20");
    let mes = cl("9");
    if (parseInt(mes).isNaN || (mes < 1 || mes > 12)) {
        cl("21");
        return "1";
    }

    //Pedimos el día**************************************************************************
    cl("22");
    let dia = cl("9");
    if (dia == " " || dia === "" || (dia < 1 || dia > diasPorMes[mes - 1] || isNaN(dia))) {
        cl("23")
        return "1";
    }

    let vencimiento = [dia + `/` + mes + `/` + año];
    return vencimiento;
}

export function CrearDificultad(value) {
    cl("25");
    let dificultad = cl("9");

    switch (dificultad) {
        case `F`:
            dificultad = "🌑🌑🌑";
            break;
        case `M`:
            dificultad = "🌕🌕🌑";
            break;
        case `D`:
            dificultad = "🌕🌕🌕";
            break;
        case `f`:
            dificultad = "🌑🌑🌑";
            break;
        case `m`:
            dificultad = "🌕🌕🌑";
            break;
        case `d`:
            dificultad = "🌕🌕🌕";
            break;
        case "":
            dificultad = "🌑🌑🌑";
            break;
        default: return "1";

    }
    return dificultad;
}

