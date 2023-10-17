function suma (x,y){
    
    let resultado = x + y;
    return resultado;
}

function resta (x,y){

    let resultado = x -y;
    return resultado;
}

function multiplicar (x,y){

    let resultado = x * y;
    return resultado;

}

function dividir (x,y){

    let resultado = x / y;
    return resultado;
};

function cuadrado (number) {
    let resultado = (number * number);
    return resultado;
}

module.exports = {suma,resta,multiplicar,dividir,cuadrado};