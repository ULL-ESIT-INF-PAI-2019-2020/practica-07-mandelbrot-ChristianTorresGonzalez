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
  * @file Fichero de implementacion de test unitarios
  * @version 1.0.0
*/

// const chai.expect = require("chai").chai.expect;
// let complejo = require("./complejo");

let numero = new numeroComplejo(5, 10);
describe("Test unitarios para clase numero complejo:",
function() {
  describe("Probando getter de la clase numeroComplejo", function() {
  
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor retornado de getParteReal", function() {
      let parteReal = numero.getParteReal();
      chai.expect(parteReal).to.equal(5);
    });

    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor retornado de getParteImaginaria", function() {
      let parteImaginaria = numero.getParteReal();
      chai.expect(parteImaginaria).to.equal(5);
    });
  });

  describe("\n    Probando setter de la clase numeroComplejo", function(){

    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion setter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor introducido setParteReal", function() {
      numero.setParteReal(20);
      chai.expect(numero.getParteReal()).to.equal(20);
    });

    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion setter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor introducido setParteImaginaria", function() {
      numero.setParteImaginaria(30);
      chai.expect(numero.getParteImaginaria()).to.equal(30);
    });
  });

  describe("\n    Probando cuadrados de la clase numeroComplejo", function(){

    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion de los cuadrados
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando cuadrado de parteReal del numero Complejo", function() {
      let cuadrado = numero.cuadradoParteReal();
      chai.expect(cuadrado).to.equal(400);
    });

    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion de los cuadrados
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando cuadrado de parteImaginaria del numero Complejo", function() {
      let cuadrado = numero.cuadradoParteImaginaria();
      chai.expect(cuadrado).to.equal(900);
    });
  });

  describe("\n    Probando calculos de parteReal para Mandelbrot", function(){
    
    /**
    * @description Expect para comprobar el correcto funcionamiento de calculos de Mandelbrot
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor calculado de parteReal de Mandelbrot", function() {
      let resultado = numero.calcularParteReal();
      chai.expect(resultado).to.equal(-500);
    });

    /**
    * @description Expect para comprobar el correcto funcionamiento de calculos de Mandelbrot
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor calculado de parteImaginaria de Mandelbrot", function() {
      let resultado = numero.calcularParteImaginaria();
      chai.expect(resultado).to.equal(1200);
    });
  });

  describe("\n    Probando comprobacion de numero complejo mayor que 2", function(){

    /**
    * @description Expect para demostrar la comprobacion de calculos de Mandelbrot
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor calculado de parteReal de Mandelbrot", function() {
      chai.expect(numero.mayorQueDos()).to.equal(true);
    });
  });
});