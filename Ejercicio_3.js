
function fibonacci(n){
    var x=0;
    var y=1;
    var resultado = x + ", ";

    for(i=0; i<n-1;i++){
        var numero=x;
        x=y;
        y=numero+y;
            resultado = resultado + x + ", ";
    }
    return resultado;
}