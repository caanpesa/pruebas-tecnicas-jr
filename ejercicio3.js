/* 
  Imprimir 20 numeros de la serie de fibbonacci

  La serie de fibonacci es que cada numero es la suma de los 2 anteriores

  Ejemplos:
  Fibbonaci() // Devuelve: 0,1,1,2,3,5,7,13, etc etc etc...
*/


const fibonacci= () =>{
  const numeros = [0 , 1]

  for (let i = 2 ; i < 20; i++){
    const fib = numeros[i -1]+ numeros[i - 2];
    numeros.push(fib);
  }

  return numeros
}


console.log(fibonacci())