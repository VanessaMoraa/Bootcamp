// Variables y operadores aritméticos:
// Crea un programa que solicite al usuario dos números y muestre la suma de ambos.
let a = 5;
let b = 7;
let c;
c = a + b;
console.log(c);
// Escribe un programa que calcule el área de un paralelogramo cuando la base sea 10 y la altura 7.
let base=10;
let altura=7;
let area= base*altura;
console.log(area);

// Condicionales:
// Escribe un programa que solicite al usuario su edad y muestre un mensaje indicando si es mayor de edad o no.
let edad=21;
if (edad>=18){
    console.log("Usted es mayor de edad")
}else{
    console.log("Usted es menor de edad")
}
// Crea un programa que pida al usuario un número y muestre un mensaje indicando si es positivo, negativo o cero.
let numero=8;
if (numero>0){
    console.log("Su número es positivo")
}else if(numero<0){
    console.log("Su número es negativo")
}else{
    console.log("Su número es 0")
}


// Arrays:
// Crea un programa que declare un array con varios nombres y luego los muestre uno por uno en la consola.
function imprimir(){
    let array=['Maria','Juan','Santiago','Pedro','Julia']
    let i=0;
    for (i;i<array.length;i++) {
        console.log(array[i]);
    }
}

// Escribe un programa que pida al usuario cinco números, los guarde en un array y luego muestre el número mayor.
function pedirNum(){
    let nums= [2,5,8,9,20];
    let mayor=0;
    let i=0;
    for (i;i<nums.length;i++) {
        if (nums[i]>mayor){
            mayor=nums[i];
        }
    }
    console.log(mayor);
}
pedirNum();

// Objetos:
// Crea un objeto llamado "persona" con propiedades como nombre, edad y profesión. Luego, muestra cada una de las propiedades en la consola.
const persona = {
    nombre: "Mateo Villalba",
    edad: "26 años",
    profesión: "Estudiante",
}
console.log(`Hola ${persona.nombre} tienes ${persona.edad} y eres ${persona.profesión}`)

pedirNum();
// Escribe un programa que simule un carrito de compras. Crea un objeto "carrito" que tenga propiedades como productos y total. Agrega varios productos al carrito y muestra el total.
const carrito={
    // productos:[Leche, huevos, pan, arroz, panela, café, chcocolate],
    precios:[2500,17500,4000,3500,2500,7500,6000],
}
let total=0;
let j=0;
for (j; j<7;j++){
    total=total+carrito.precios[j];
}
console.log(total)

// Ciclos:
// Crea un programa que muestre en la consola los números del 1 al 10 utilizando un bucle for.
let k=1;
for (k; k<=10;k++){
    console.log(k)
}
// Escribe un programa que solicite al usuario un número y luego muestre en la consola todos los números pares desde 1 hasta ese número.
let num=12;
let len=num/2
let l=1;
let par;
let pares=[];
for (l; l<=len;l++){
    par=2*l;
    pares.push(par);
}
console.log(pares);

// Array de objetos:
// Crea un array de objetos, donde cada objeto represente a una persona con propiedades como nombre, edad y profesión. Muestra en la consola la profesión de cada persona en el array.
    const persona1 = {
            nombre: "Mateo Villalba",
            edad: "26 años",
            profesión: "Estudiante",
        }
    const persona2 = {
            nombre: "Angie Carranza",
            edad: "21 años",
            profesión: "Estudiante",
        }
    const persona3 = {
            nombre: "María Acuña",
            edad: "62 años",
            profesión: "Contadora",
        }
    const persona4 = {
            nombre: "Pedro Mora",
            edad: "57 años",
            profesión: "Conductor",
        }
const personas=[persona1,persona2,persona3,persona4];
const profesiones=[persona1.profesión,persona2.profesión,persona3.profesión,persona4.profesión]
console.log(profesiones);


// Variables, condicionales, ciclos, arrays, objetos, operadores aritméticos, relacionales y lógicos:
// Crea un programa que solicite al usuario un número y luego muestre en la consola todos los números pares menores o iguales a ese número.
let num1=25;
let len1=num1/2
let l1=1;
let par1;
let pares1=[];
for (l1; l1<=len1;l1++){
    par1=2*l1;
    pares1.push(par1);
}
console.log(pares1);
// Escribe un programa que simule un juego de adivinanzas. Genera un número aleatorio entre 1 y 10 y pide al usuario que lo adivine. Muestra un mensaje indicando si el usuario acertó o no.
let aleatorio=Math.floor(Math.random() * 10)
let adivinanza=8
if (adivinanza==aleatorio){
    console.log("Felicidades, acertaste! El número era ", adivinanza)
}else{
    console.log("Lo siento, ese no era el número que estaba pensando")
}
// Estos ejercicios te darán la oportunidad de practicar diferentes aspectos de JavaScript. ¡Espero que te resulten útiles! Recuerda que puedes consultar la documentación de JavaScript o hacer preguntas adicionales si necesitas más ayuda con algún concepto en particular.

// Plazo de entrega del taller: Viernes 19/05/2023 hasta las 18:00
