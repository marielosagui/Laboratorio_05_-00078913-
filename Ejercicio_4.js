function conversion(n){

    var array = [];

    var entrada = 0;

    var resultado = '';

    if(n==0){

        return n;

    }

    while(n > 0){

        residuo = parseInt(n % 2);

        n = parseInt(n/2);

        array[entrada] = residuo;

        entrada++;

    }

    for (var i = array.length - 1; i >= 0; i--) {

        resultado += array[i];

    }

    return resultado;

}