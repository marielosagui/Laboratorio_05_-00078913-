var ordenar= function(array){
    var a;
    var b, key;
    for (i=1; i<array.length-a;i++){
        key=array[i];
        b=i-1
        while(b>=0 && key<a[b])
            a[b+1]=a[b];
            b=b-1;
        array[b+1]=key
    }
}