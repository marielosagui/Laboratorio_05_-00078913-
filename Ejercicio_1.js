function palindromo(cadena){
    var resultado="La cadena \"" + cadena+"\"\n";
    var cadenaOrignal=cadena.toLowerCase();
    var letraEspacios= cadenaOrignal.split("");

    var cadenaSinespacios="";
    for (i in letraEspacios){
        if(letraEspacios[i] !=""){
            cadenaSinespacios+= letraEspacios[i];
        }
    }
    var cadenaSinespacios="";
    for(i in letraEspacios){
        if (letraEspacios[i] !=""){
            cadenaSinespacios+=letraEspacios[i];
        }
    }
    var letras=cadenaSinespacios.split("");
    var letrasalreves=cadenaSinespacios.split("").reverse();

    var iguales=true;
    for (i in letras){
        if(letras[i]==letrasalreves[i]){
    }else{
        iguales=false;
    }
}
if(iguales){
    resultado+= "es palindromo";
}
else{
    resultado+="no es palindromo";
}
return resultado;
}