/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 6 PAI - QuickHull. Pintando graficos con canvas
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: Programa que dado una cantidad de puntos introducidos por pantalla
  * genera sus coordenadas de manera aleatoria, para a continuacion, obtener la malla
  * convexa, que es el perimetro que envuelve a todos los puntos
  * @since 22/03/2020
  * @file Fichero de implementacion de ejercicios
  * @version 1.0.0
*/

'use strict'

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function calcularFdeZ(complejoParteReal, complejoParteImaginaria) {
  const MAXIMOITERACIONES = 1000;
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

    if (auxiliarParteReal * auxiliarParteImaginaria > 2)
      return (iteraciones / MAXIMOITERACIONES * MAXIMOITERACIONES);
    
    iteraciones++;
  }
  
  return false;
}

function calcularMandelbrot() {
  let limiteInferiorEjeX = -3;
  let limiteSuperiorEjeX = 2;
  let limiteInferiorEjeY = -1.5;
  let limiteSuperiorEjeY = 1.5;

  for (let ejeX = 0; ejeX < canvas.width; ejeX++) {
    for (let ejeY = 0; ejeY < canvas.clientHeight; ejeY++) {
      let numeroComplejo = calcularFdeZ((limiteInferiorEjeX + (ejeX / canvas.width) *
        (limiteSuperiorEjeX - limiteInferiorEjeX)), (limiteInferiorEjeY +
        (ejeY / canvas.height) * (limiteSuperiorEjeY - limiteInferiorEjeY)));
      
      if(numeroComplejo == 0) {
        ctx.fillStyle = '#000';
        ctx.fillRect(ejeX, ejeY, 1,1); // Draw a black pixel
      }
      else {
        ctx.fillStyle = 'hsl(0, 100%, ' + numeroComplejo + '%)';
        ctx.fillRect(ejeX, ejeY, 1,1); // Draw a colorful pixel
      }
    }
  }
}

calcularMandelbrot();