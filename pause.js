import promptSync from 'prompt-sync';
import print from './ConsoleLog.js';
const leer = promptSync();

export default function pausa() { 
    this.run = function () {
        print("5");
        leer();
    };
}