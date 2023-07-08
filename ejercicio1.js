/* 
  Dada una cadena de texto, comprobar si es un palindromo o no.

  Los palindromos son palabras que se leen igual aun estando invertidas
  Por ejemplo: ana, bob, otto, allivessevilla

  Ejemplos:
  esPalindromo("otto") // Devuelve: true
  esPalindromo("false") // Devuelve: false
*/

function esPalindromo(palabra) {
  const texto2 = palabra
  const texto = palabra.split("").reverse().join("")
  return texto2 === texto

}
console.log(esPalindromo("ana"))