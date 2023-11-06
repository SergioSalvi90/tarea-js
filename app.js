//solucion ejercicio 1 (numeros primos)


// function esPrimo(numero) {
//     if (numero <= 1) {
//       return false; 
//     }
    
   
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//       if (numero % i === 0) {
//         return false; 
//       }
//     }
    
//     return true; 
//   }
 
//   const numero = 22 ;
//   if (esPrimo(numero)) {
//     console.log(`${numero} es número primo.`);
//   } else {
//     console.log(`${numero} no es un número primo.`);
//   }



  ///////////////////////////////////////////////////////////////////////////////////
  
// solucion ejercicio 4 (contador de vocales)

//  function contarVocales(cadena) {
  


//   let contadorVocales = 0;
//   const vocales = ['a', 'e', 'i', 'o', 'u'];

//   for (let i = 0; i < cadena.length; i++) {
//     if (vocales.includes(cadena[i])) {
//       contadorVocales++;
//     }
//   }

//   return contadorVocales;
// }


// const texto = " Hola es esta es una cadena  con vocales.";
// const numeroVocales = contarVocales(texto);
// console.log(`El número de vocales en el texto es: ${numeroVocales}`);
 


////////////////////////////////////////////////////////// 

// solucion ejercicio 5 (elementos unicos)

// function elementosUnicos(matriz) {
//     const conjunto = new Set(matriz); // Convertir la matriz en un conjunto para eliminar duplicados
//     const matrizUnica = Array.from(conjunto); // Convertir el conjunto de vuelta a una matriz
  
//     return matrizUnica;
//   }
  
//   const miMatriz = ["Juan", "Martin", "Raul;", "Juan",];
//   const matrizUnica = elementosUnicos(miMatriz);
//   console.log(matrizUnica); 
  

//////////////////////////////////////////////////////////


// soluciones al ejercicio 2 (operacion de matriz) aritmetica

// function funcionSuma(a,b){
//   console.log( a + b);
// }
// funcionSuma (5,6);
// funcionSuma(45,45);

// function funcionResta(a,b){
//   console.log( a - b);
// }
// funcionResta (10,5); 
// funcionResta (10,2);

// function funcionMulti(a,b){
//   console.log( a * b);
// }
// funcionMulti(2,6);
// funcionMulti(3,5); 

// function funcionDivide(a,b){
//    console.log(a / b);
// }
// funcionDivide(14,2); 



// solucion ejercicio 3 suma en (rango). 


//  function sumaEnRango(a, b) {
//    let suma = 1;
//    for (let i = a; i <= b; i++) {
//      suma += i;
//    }
//    return suma;
//  }

// let resultado = sumaEnRango(1, 10); // modo en que suma 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55  resultado 
// console.log(resultado);



// otro ejemplo de suma en rango
// function sumaEnRango1A100() {
//   let suma = 1;
//   for (let i = 1; i <= 100; i++) {
//     suma += i;
//   }
//   return suma;
// }


// let resultado = sumaEnRango1Al100();
// console.log(resultado);  




//////////////////////////////////////////


//invertir cadena de texto sin reverse() 

// function invertirCadena(cadena) {
//   let cadenaInvertida = "";
//   for (let i = cadena.length - 1; i >= 0; i--) {
//     cadenaInvertida += cadena[i];
//   }
//   return cadenaInvertida;
// }


// let textoOriginal = "Hola, Profe cecilia, me costo mucho este ejercicio";
// let textoInvertido = invertirCadena(textoOriginal);
// console.log(textoInvertido); 






//////////////////////////

//Mi carrusel de imagenes (extraidas del tp one-page) me base en el ejemplo de la clase anterior


// Estimada cecilia en este caso tuve un problema con el boton anterior que no logre hacerlo funcionar correctamente.
// intente buscar soluciones en chatgpt pero me decia que el codigo era correcto.




// 


// let carrousel = document.getElementById("carrousel");
//     let arrayimg = ["imgbaner.jpeg", "imgbar.jpeg", "imgbar1.jpeg"];
//     let index = 0;
//     //                    0                 1              2


//     function carrouselImage(){

//     carrousel.src= `imagenes/${arrayimg[index]}`;

//     if(index < 2) {
//         index ++;
//     } else{
//         index = 0
//     }
// }


// document.getElementById("anterior").addEventListener("click", function() {
//   if (index > 0) {
//       index--;
//   } else {
//       index = arrayimg.length - 1;
//   }
//   carrouselImage();
// });



// document.getElementById("siguiente").addEventListener("click", function() {
//   if (index < arrayimg.length - 1) {
//       index++;
//   } else {
//       index = 0;
//   }
//   carrouselImage();
// });



// setInterval(carrouselImage, 5000);


// aumento y disminuir texto 

// document.getElementById("aumentar").addEventListener("click", function() {
//   cambiarTamañoTexto(2); 
// });

// document.getElementById("disminuir").addEventListener("click", function() {
//   cambiarTamañoTexto(0.5); 
// });

// function cambiarTamañoTexto(factor) {
//   let elementoTexto = document.getElementById("texto");
//   let estilo = window.getComputedStyle(elementoTexto, null);
//   let fontSize = estilo.getPropertyValue("font-size");
//   let nuevoTamaño = parseFloat(fontSize) * factor;
//   elementoTexto.style.fontSize = nuevoTamaño + "px";
// } 

// function expandirTarjeta(index) {
//   let tarjetas = document.querySelectorAll(".tarjeta");
//   let detalles = document.querySelectorAll(".detalle");

//   detalles.forEach((detalle, i) => {
//       if (i === index) {
//           detalle.style.display = "block";
//       } else {
//           detalle.style.display = "none";
//       }
//   });
// }