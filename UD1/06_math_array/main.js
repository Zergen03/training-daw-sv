// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
    var suma = 0;
    var media;
    var mayor;
    var menor;
    for(i = 0; i < array.length; i++){
        suma += array[i];
    }
    media = suma / array.length;
    for(i = 0; i < array.length; i++){
        if(i == 0){
            mayor = array[i]; 
            menor = array[i];
            // menor = array[i];
        }else{
            if(array[i] > mayor){
                mayor = array[i];
            }
            if(array[i] < menor){
                menor = array[i];
            }
        }

    }
    console.log(`suma: ${suma}`);
    console.log(`media: ${media}`);
    console.log(`mayor: ${mayor}`);
    console.log(`menor: ${menor}`);
}



doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])