export default function CreatTitulo() {
    print("15");
    let titulo = print("9")
    if (titulo == "" || titulo == null || titulo.length > 100) {
        return "1";
    }
    print("16");
    let estado = print("9");
    if (estado == "" || estado != "P" || estado != "E" || estado != "T" || estado != "C") {
        return "2";
    }
    print("17");
    let descripcion = print("9");
    if (descripcion == "" || descripcion.length > 100) {
        return "3";

    }
    let vencimiento = "----------";
    let dificultad = "🌑🌑🌑";
    let ultimaEd = fechaActual;
    let creación = fechaActual;
}