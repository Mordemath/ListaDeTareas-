import cl from './ConsoleLog.js';
import pausa from './pause.js'
import mostrarDetalles from './mostrarDetalles.js';

function buscarTareas(tareas,clave,i,resultado){
    if(i>=tareas.length){
        return resultado;
    }
let titulo = tareas[i]["titulo"];
let nuevoResultado = resultado;

    if(titulo.includes(clave)){
    nuevoResultado = nuevoResultado.concat(i);
    }
    return buscarTareas(tareas,clave,i+1,nuevoResultado);
}

function validarIndice(i,tareas){
    if (index >= tareas.length || index < 0 || isNaN(index)) {
        return["Indice invalido"];
    }
    return ["indice valido"];
}

export default function(){
    this.buscador = function (tareas,op,j) {
        let i= parseInt(j)-1;
        let resultado;
        switch(op){
            case '0':
                resultado=validarIndice(i,tareas);
                return ["No se encuentran resultados."];
                break;
            case '1':
                let clave = cl("9");
                if(clave!==''){
                    let indicesEncontrados=buscar(tareas,clave,0,[]);
                    if(indicesEncontrados.length===0){
                        return cl("6");
                    }else{
                        for(let i=0;i<indicesEncontrados.length;i++){
                            mostrarDetalles(tareas[indicesEncontrados[j]]);
                        }
                        cl("12");
                        return cl("13");
                    }
                }
                break;
                default:
                    return null;
        }
    }
}