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

let r = 50;
ctx.beginPath();
// ctx.beginPath();
// ctx.arc(500, 680,r,0,2*Math.PI);
// ctx.stroke();

// Triangulo
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(500, 750);
ctx.lineTo(50,50);
ctx.lineTo(950,50);
ctx.fill();

// Triangulo
ctx.beginPath();
ctx.strokeStyle = "#ffc400";
ctx.fillStyle = "#ffc400";
ctx.moveTo(500,600);
ctx.lineTo(200,150);
ctx.lineTo(800,150);
ctx.fill();

ctx.fillStyle = "white";
ctx.fillRect(50,50,80,80);

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.lineWidth = 5;
ctx.arc(142, 100,r,0,2*Math.PI);
ctx.fill();

ctx.fillStyle = "white";
ctx.fillRect(870,50,80,80);

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(860, 100,r,0,2*Math.PI);
ctx.fill();

ctx.fillStyle = "white";
ctx.fillRect(460,690,80,80);

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(500, 660,r,0,2*Math.PI);
ctx.fill();


ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(400,250,15,50);
ctx.fillRect(370,250,40,15);

ctx.fillRect(430,180,30,120);

ctx.moveTo(520,300);
ctx.lineTo(480,180);
ctx.lineTo(510,180);
ctx.lineTo(550,300);

ctx.fillRect(600,180,25,120);
ctx.fillRect(600,180,80,25);
ctx.fillRect(600,230,80,25);
ctx.fillRect(600,280,80,25);
ctx.fill();

ctx.moveTo(550,300);
ctx.lineTo(590,180);
ctx.lineTo(560,180);
ctx.lineTo(520,300);
ctx.fill();

ctx.moveTo(570,380);
ctx.lineTo(540,340);
ctx.lineTo(560,340);
ctx.lineTo(590,380);
ctx.fill();

ctx.fillRect(570, 380, 20,50);

ctx.moveTo(590,380);
ctx.lineTo(620,340);
ctx.lineTo(600,340);
ctx.lineTo(570,380);
ctx.fill();

ctx.moveTo(490,430);
ctx.lineTo(510,430);
ctx.lineTo(520,340);
ctx.lineTo(500,340);
ctx.fill();

ctx.moveTo(550,430);
ctx.lineTo(530,430);
ctx.lineTo(500,340);
ctx.lineTo(520,340);
ctx.fill();

ctx.fillRect(500, 400, 30, 15);

ctx.moveTo(460,430);
ctx.lineTo(480,430);
ctx.lineTo(450,340);
ctx.lineTo(430,340);
ctx.fill();

ctx.moveTo(460,430);
ctx.lineTo(480,430);
ctx.lineTo(490,340);
ctx.lineTo(470,340);
ctx.fill();

ctx.moveTo(420,430);
ctx.lineTo(440,430);
ctx.lineTo(410,340);
ctx.lineTo(390,340);
ctx.fill();

ctx.moveTo(420,430);
ctx.lineTo(440,430);
ctx.lineTo(450,340);
ctx.lineTo(430,340);
ctx.fill();

