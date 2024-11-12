import promptSync from 'prompt-sync';

const leer = promptSync();

export default function pausa() {
    leer("Ingrese cualquier tecla para continuar");
}