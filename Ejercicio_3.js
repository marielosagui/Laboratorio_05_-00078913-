function fibonnaci(n){
    if (n<1)
        return 0;
    if(n<=2)
    return 1;
    return fibonnaci(n-1)+fibonnaci(n-2);
}