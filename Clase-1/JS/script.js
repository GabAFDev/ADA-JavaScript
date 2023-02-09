//Variables y datos
//JS es un leguaje no tipado, es decir que por mas que existen los tipos de datos, estos se pueden cambiar sin bloqueos
//usamos cameCase para definirlas

let firstname = "Gaby" //string
let lastname = "Figueroa"
let birthdayYear= 1995 //integer
let PI= 3.1415 //float
//let age= 27
let knowsHowToDrive= false //boolean
let hasPets= true //undefined

console.log(firstname)
console.log(lastname)
console.log(birthdayYear)

//sugar syntax

console.log(`Hola mi nombre es ${firstname} ${lastname} y tengo ${age} años.`)

//cómo saber el tipo de variable

console.log(typeof lastname)

//si quiero cambiar el valor de una variable no tengo que usar LET, solo la variable=nuevo valor 

/*operadores aritmeticos*/

//+suma
//-resta
//* producto
// / división
// % módulo

let number1 = 10
let number2 = 5

console.log(number1 + number2)

// const contiene datos inmutables

//alert("no podes ver este contenido")
const age = prompt("ingrese su edad:")
console.log(age)