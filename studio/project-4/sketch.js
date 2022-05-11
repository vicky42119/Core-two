
/*
 * @name Keyboard
 * @description Click on the image to give it focus and
 * press the letter keys to create forms in time and space.
 * Each key has a unique identifying number. These numbers
 * can be used to position shapes in space.
 */
let rectWidth;
let rectHeight;
let userTypingBool = false;

function setup() {
  createCanvas(1420, 900);
  noStroke();
  background(255);
  rectWidth = 25;
  Height = 50;



// we want to pull from an array of shapes

  let shapeArray = [rect() , ellipse()];
}

let randomNumber = Math.floor(Math.random()*2);




function randomRange(min, max) {
let number;
   number = Math.floor(Math.random() * (max - min + 1)) + min;
   return number;

}



function draw() {
  // keep draw() here to continue looping while waiting for keys


    randomShape();
    console.log("running");

}

let randFill_r, randFill_g, randFill_b;



// function keyPressed() {
//   let keyIndex = -1;
//   if (key >= 'a' && key <= 'z') {
//     keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
//   }
//   if (keyIndex === -1) {
//     // If it's not a letter key, clear the screen
//     background(255);
//   } else {
//     // It's a letter key, fill a rectangle
//
//     randFill_r = Math.floor(Math.random() * 255 + 1);
//     randFill_g = Math.floor(Math.random() * 255 + 1);
//     randFill_b = Math.floor(Math.random() * 255 + 1);
//     fill(randFill_r, randFill_g, randFill_b);
//     let x = map(keyIndex, 0, 25, 0, width - rectWidth);
//     randomRange(0,1);
//     if (number == 1) {
//       ellipse(x, 0, rectWidth, height);
//     }if (number == 0){
//       rect(x, 0, rectWidth, height);
//     }
//   }
// }


function randomShape() {

  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }

    randFill_r = Math.floor(Math.random() * 255 + 1);
    randFill_g = Math.floor(Math.random() * 255 + 1);
    randFill_b = Math.floor(Math.random() * 255 + 1);
    fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 25, 0, width - rectWidth);
    randomRange(0,1);
    if (randomRange(0) == 0) {
      ellipse(x, 0, rectWidth, height);
    }if (randomRange(0,1) == 1){
      rect(x, 0, rectWidth, height);
    }
}

const userTyping =() => {
   userTypingBool = true;
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    background(255);
  }}