for (var i = 0; i < 10; i++){
    console.log(i);
}

function encontrarVocalA(string){
    for (var i = 0; i < string.lenght; i++){
        if (string[i] === 'a')
        return 'encontramos la vocal a';
    }
    return 'Esta palabra no tiene la vocal ';
}

function cuentaRegresiva(num){
    for(var i = num; i >= 0; i--){
    }
}

function deletrear(string){
    for (var i = 0; i < string.length; i++){
        console.log(string[i])
    }
}

function mientrasMenorSeis(){
var contador = 1;
while(contador < 6){
 console.log('contador es: ' + contador);
 contador = contador + 1;
 }
}
mientrasMenorSeis()