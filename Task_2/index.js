//for canvas & calc

const size150 = 150;
const size200 = 150;
const start = 10;
const stroke = 2;
const angle90 = 90;
const angle180 = 180;
const byTwo = 2;
const numAccTo = 3;

function calcParal() {
  let sideA = parseFloat(document.getElementById('parallelogramSideA').value);
  let sideB = parseFloat(document.getElementById('parallelogramSideB').value);
  let angle = Math.abs(parseFloat(document.getElementById('parallelogramAngle').value));

  const angle0 = 0;
  let angleSkewToFigure = angle90 - angle;
  let angleDegToRad = angleSkewToFigure * Math.PI / angle180;
  let parallelogramArea = 0;
  let parallelogramHeight = 0;

  if(angle === angle90) {
    parallelogramArea = Math.abs(sideA * sideB).toFixed(numAccTo);
    parallelogramHeight = Math.abs(sideB.toFixed(numAccTo));
  } else {
    parallelogramArea = Math.abs(sideA * sideB * Math.sin(angleDegToRad)).toFixed(numAccTo);
    parallelogramHeight = Math.abs((parallelogramArea / sideB).toFixed(numAccTo));
  }

  if (angle === angle0 || angle === angle180 || isNaN(parallelogramArea) || isNaN(parallelogramHeight) ) {
    parallelogramArea = '-';
    parallelogramHeight = '-';
  }
  document.getElementById('parallelogram_Area').innerHTML = parallelogramArea;
  document.getElementById('parallelogram_Height').innerHTML = parallelogramHeight;
}

function drawParallelogram(){
  let canvas = document.getElementById('canvas_parallelogram');
  let ctx = canvas.getContext('2d');
  let a = parseFloat(document.getElementById('parallelogramSideA').value);    
  let b = parseFloat(document.getElementById('parallelogramSideB').value);  
  let angle = parseFloat(document.getElementById('parallelogramAngle').value);
  let alfa = angle;
  if(alfa<=angle90){
    alfa = alfa * Math.PI/angle180;
  } else {
    alfa = (angle180-alfa) * Math.PI/angle180;
  }  
  let h = Math.round(a * Math.sin(alfa));  
  let l = Math.round(a * Math.cos(alfa));  
  let coef = size150/Math.max(h, b+l);  
  b *= coef;
  l *= coef;
  h *= coef;

  ctx.clearRect(0, 0, size200, size200);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.beginPath();
  if (angle<=angle90){
    ctx.moveTo(start + l, start);
    ctx.lineTo(start,start + h);
    ctx.lineTo(start + b,start + h);
    ctx.lineTo(start + b + l,start);
    ctx.lineTo(start + l, start);
    ctx.stroke();
  } else {
    ctx.moveTo(start, start);
    ctx.lineTo(start +l,start + h);
    ctx.lineTo(start + l + b,start + h);
    ctx.lineTo(start + b, start);
    ctx.lineTo(start, start);
    ctx.stroke();
  }
  }
  drawParallelogram();

function calcEllipse() {
  const ellipseHRadius = document.getElementById('ellipseHRadius');
  const ellipseVRadius = document.getElementById('ellipseVRadius');
  const ellipse_Length = document.getElementById('ellipse_Length');
  const ellipse_Area = document.getElementById('ellipse_Area');
  ellipse_Length.textContent = parseInt(2 * Math.PI * Math.sqrt((Math.pow(ellipseHRadius.value, 2) + Math.pow(ellipseVRadius.value, 2)) / 2));
  ellipse_Area.textContent = parseInt(Math.PI * ellipseHRadius.value * ellipseVRadius.value);
  drawEllipse();
}

function drawEllipse() {
  const canvasDiv = document.getElementById('ellipse_img');
  let canvasEllipse = document.getElementById('canvasEllipse');
  canvasDiv.removeChild(canvasEllipse);
  canvasEllipse = document.createElement('canvas');
  canvasEllipse.setAttribute('id', 'canvasEllipse');
  canvasEllipse.setAttribute('width',"200");
  canvasEllipse.setAttribute('height', "150");
  canvasDiv.appendChild(canvasEllipse);
  const ctx = canvasEllipse.getContext('2d');
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(80, 60, ellipseHRadius.value, ellipseVRadius.value, 0, 0, 2 * Math.PI);
  ctx.stroke();
}

drawEllipse();

function calcCircle() {

  let radius = document.getElementById('circleRadius').value;
  let circleArea = (radius * radius * Math.PI).toFixed(numAccTo);
  const NUMBER_TWO = 2;
  let circumference = (NUMBER_TWO * Math.PI * radius).toFixed(numAccTo);
  
  document.getElementById('circle_Area').innerHTML = circleArea;
  document.getElementById('circle_Length').innerHTML = circumference;
  
  let figCircle = document.getElementById('circle_img');
  figCircle.style.width = radius * NUMBER_TWO + 'px'; 
  figCircle.style.height = radius * NUMBER_TWO + 'px';
  
  }
  
function calcSquare() {
    let a = parseFloat(document.getElementById('squareSideA').value);
    let squareArea = a * a;
    const TWO = 2;
    let squareDiagonal = Math.round(a * Math.sqrt(TWO));
    document.getElementById('square_Area').innerHTML = squareArea;
    document.getElementById('square_Diagonal').innerHTML = squareDiagonal;

    let fig = document.getElementById('square_img');
    fig.style.width = a + 'px'; 
    fig.style.height = a + 'px';
  }

function calcRectangle() {
    let a = parseFloat(document.getElementById('rectangleSideA').value);
    let b = parseFloat(document.getElementById('rectangleSideB').value);  
    let rectangleArea = a * b;
    let rectangleDiagonal = Math.round(Math.sqrt(a * a + b * b));
    document.getElementById('rectangle_Area').innerHTML = rectangleArea;
    document.getElementById('rectangle_Diagonal').innerHTML = rectangleDiagonal;

    let fig = document.getElementById('rectangle_img');


    fig.style.width = a + 'px'; 
    fig.style.height = b + 'px';

  }

  function calcTriangle(){
    let a = parseFloat(document.getElementById('triangleSideA').value);
    document.getElementById('triangle_sideA').innerHTML = a;
    let b = parseFloat(document.getElementById('triangleSideB').value);
    document.getElementById('triangle_sideB').innerHTML = b;
    let c = Math.sqrt(a * a + b * b);
    document.getElementById('triangle_sideC').innerHTML = Math.round(c);
    let h = a * b /c;
    document.getElementById('triangle_Height').innerHTML = Math.round(h);
    const angleC = 90;
    document.getElementById('triangle_angleC').innerHTML = angleC;
    let angleA = Math.sin(a/c)*angle180/Math.PI;
    document.getElementById('triangle_angleA').innerHTML = Math.round(angleA);
    let angleB = angleC - angleA;
    document.getElementById('triangle_angleB').innerHTML = Math.round(angleB);
    let S = Math.round(a*b/byTwo);
    document.getElementById('triangle_Area').innerHTML = S;
  }

  function drawTriangle(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let a = parseFloat(document.getElementById('triangleSideA').value);
    let b = parseFloat(document.getElementById('triangleSideB').value);
    let h = 0;
    let w = 0;
    if(a>=b){
      h = size150;
      w = b*h/a;
    } else {
      w = size150;
      h = a*w/b;
    }
    ctx.clearRect(0, 0, size200, size200);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = stroke;
    ctx.beginPath();
    ctx.moveTo(start, start);
    ctx.lineTo(start, start + h);
    ctx.lineTo(start + w, start + h);
    ctx.lineTo(start,start);
    ctx.stroke();
  }
  
  drawTriangle();

function calcAll() {
    calcParal();
    drawParallelogram();
    calcEllipse();
    calcCircle();
    calcSquare();
    calcRectangle();
    calcTriangle();
    drawTriangle();    
  }

// INSTANT_CALCULATION

  let checkInstant = document.getElementById('instantCalc');
  let btnCalc = document.getElementById('btnCalc');
  
  function instantCalc() {
    btnCalc.disabled = this.checked;
    if(this.checked) {
      document.addEventListener('input', calcAll);
    } else {
      document.removeEventListener('input', calcAll);
    }
  }
  
<<<<<<< HEAD
  function doInstantCalc() {
    document.addEventListener('input', calcAll);
  }
  function stopInstantCalc() {
    document.removeEventListener('input', calcAll);
  }
  checkInstant.addEventListener('change', instantCalc);


// EVENTLISTENERS

function resetValueParal() {
  document.getElementById('parallelogram_Area').innerHTML = '-';
  document.getElementById('parallelogram_Height').innerHTML = '-';
} 

function resetValueCircle() {
  document.getElementById('circle_Area').innerHTML = '-';
  document.getElementById('circle_Length').innerHTML = '-';
} 

function resetValueEllipse() {
  document.getElementById('ellipse_Area').innerHTML = '-';
  document.getElementById('ellipse_Length').innerHTML = '-';
} 

function resetValueSquare() {
  document.getElementById('square_Diagonal').innerHTML = '-';
  document.getElementById('square_Area').innerHTML = '-';
} 

function resetValueSquare() {
  document.getElementById('square_Diagonal').innerHTML = '-';
  document.getElementById('square_Area').innerHTML = '-';
} 


function resetValueRectangle() {
  document.getElementById('rectangle_Diagonal').innerHTML = '-';
  document.getElementById('rectangle_Area').innerHTML = '-';
} 

function resetValueTriangle() {
  document.getElementById('triangle_sideA').innerHTML = '-';
  document.getElementById('triangle_sideB').innerHTML = '-';
  // document.getElementById('triangle_sideB').innerHTML = '-';
  document.getElementById('triangle_sideC').innerHTML = '-';
  document.getElementById('triangle_Height').innerHTML = '-';
  document.getElementById('triangle_angleA').innerHTML = '-';
  document.getElementById('triangle_angleB').innerHTML = '-';
  document.getElementById('triangle_angleC').innerHTML = '-';
  document.getElementById('triangle_Area').innerHTML = '-';




} 
=======
  checkInstant.addEventListener('change', instantCalc);
>>>>>>> e4c5c02b2f33111cefbaa8319f6af835fac0573d
