/*
  Dada un arreglo de numeros y un numero como parametro, se debe retornar los 2 numeros del arreglo que sumados den como resultado el segundo numero

  Ejemplos: 
  DosNumeros([1,2,3,4,5], 9) //Devuelve: [4,5]
  DosNumeros([3,4,5,43,4,5,6,10], 47) //Devuelve: [4,43]
*/

const DosNumeros = (arreglo, numeroAComparar) => {
  // numeroAComparar 15
  for(let i = 0; i < arreglo.length; i++){
    const num1 = arreglo[i];
    for(let j = 0; j < arreglo.length; j++){
      const num2 = arreglo[j];
      if(num1 + num2 === numeroAComparar){
        return [num1, num2];
      }
    }
  }
}


DosNumeros([1,2,3, 4, 5, 6, 7, 8], 15);


