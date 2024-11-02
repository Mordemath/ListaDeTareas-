import promptSync from 'prompt-sync';
import cl from './ConsoleLog.js';
const leer = promptSync();

export default function pausa() {
    cl("5");
    leer();
}