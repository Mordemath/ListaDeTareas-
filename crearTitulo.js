export function CrearTitulo(value) {
    let titulo = value;
    if (titulo === "" || titulo == null || titulo.length > 100) {
        return "1";
    }
    return titulo;
}

export function crearEstado(value) {
    let estado = value;
    if (estado === "" || estado != "P" || estado != "E" || estado != "T" || estado != "C") {
        return "2";
    }
    if (estado == "") {
        estado = "P";
    }
    return estado;
}


export function crearDescripcion(value) {
    let descripcion = value;
    if (descripcion.length > 500) {
        return "3";
    }
    return descripcion;
}

export function crearVencimiento(value) {
    print("18");
    //Pedimos el año**************************************************************************
    print("18");
    let año = print("9");

    if ((año === "" || año === ` ` || año.length != 4 || año == NaN) && año != "") {
        return "4";
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

    print("20");
    let mes = print("9");
    if (mes === "" || (mes < 1 || mes > 12) || mes == " ") {
        return "5";
    }

    //Pedimos el día**************************************************************************
    let dia = print("9");

    print("22");
    if (dia == " " || dia === "" || (dia < 1 || dia > diasPorMes[mes - 1] || isNaN(dia))) {
        return "6";
    }

    let vencimiento = [dia + `/` + mes + `/` + año];
    return vencimiento;
}

export function crearDificultad(Value) {    let dificultad = Value;

    switch (dificultad.toUpperCase()) {
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
        default: return "7";

    }
    return dificultad;
}

