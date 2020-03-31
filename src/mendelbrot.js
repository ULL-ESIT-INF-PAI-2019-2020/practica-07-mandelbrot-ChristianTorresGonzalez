/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 7 PAI - Mandelbrot. Numero complejos
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: Programa que dado un lienzo de canvas, va a calcular, dada
  * una coordenada X e Y, que dada un numro de iteraciones, para cada coordenada,
  * y utilizando la función f(Zn) = Z(n-1)^2 + c, donde c es un numero complejo dado,
  * y zn-1 es el resultado de elevar al cuadrado la funcion para valor Zn-1. Para poder
  * llegar a un resultado deseado, debemos partir de la copndicion de que x e y, que son
  * las coordenadas del punto del lienzo de canvas que estamos tratando.
  * @since 28/03/2020
  * @file Fichero de implementacion de ejercicios
  * @version 1.0.0
*/

'use strict'

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/**
 * @description Funcion que utilizamos para, dado un numero complejo, y un numero de iteraciones
 * maximo, calcular si ese complejo llegado un punto, comprobar si la distancia de ese punto es
 * mayor que 2, de tal manera que si la suma 
 * @param  {Number} complejoParteReal Parte real del numero complejo que queremos comprobar,
 * en este caso es la coordenada X del punto con el que estamos trabajando
 * @param  {Number} complejoParteImaginaria Parte imaginaria del numero complejo que queremos comprobar,
 * en este caso es la coordenada Y del punto con el que estamos trabajando
 */
function calcularFdeZ(complejoParteReal, complejoParteImaginaria) {
  const MAXIMOITERACIONES = 10000;
  let auxiliarParteReal = complejoParteReal;
  let auxiliarParteImaginaria = complejoParteImaginaria;
  let iteraciones = 0;

  while (iteraciones < MAXIMOITERACIONES) {
    let parteReal = auxiliarParteReal * auxiliarParteReal -
      auxiliarParteImaginaria * auxiliarParteImaginaria +
      complejoParteReal;
  
    let parteImaginaria = 2 * auxiliarParteReal * auxiliarParteImaginaria
      + complejoParteImaginaria;
  
    auxiliarParteReal = parteReal;
    auxiliarParteImaginaria = parteImaginaria;

    if (auxiliarParteReal * auxiliarParteReal + auxiliarParteImaginaria * auxiliarParteImaginaria > 2)
      return (iteraciones);
    
    iteraciones++;
  }
  
  return 0;
}

function calcularMandelbrot() {
  let limiteInferiorEjeX = -1.5;
  let limiteSuperiorEjeX = 0.5;
  let limiteInferiorEjeY = -1;
  let limiteSuperiorEjeY = 1.125;

  for (let ejeX = 0; ejeX < canvas.width; ejeX++) {
    for (let ejeY = 0; ejeY < canvas.clientHeight; ejeY++) {
      let numeroComplejo = calcularFdeZ((limiteInferiorEjeX + (ejeX / canvas.width) *
        (limiteSuperiorEjeX - limiteInferiorEjeX)), (limiteInferiorEjeY +
        (ejeY / canvas.height) * (limiteSuperiorEjeY - limiteInferiorEjeY)));
      
      if(numeroComplejo !== 0) {
        ctx.fillStyle = 'hsl(0, 100%, ' + numeroComplejo + '%)';
        ctx.fillRect(ejeX, ejeY, 1,1);
      }
    }
  }
}

calcularMandelbrot();