function calcParal() {
  let sideA = parseFloat(document.getElementById('parallelogramSideA').value);
  let sideB = parseFloat(document.getElementById('parallelogramSideB').value);
  let angle = Math.abs(parseFloat(document.getElementById('parallelogramAngle').value));

  const angle0 = 0;
  const angle180 = 180;
  const angle90 = 90;
  const numAccTo = 3;
  let angleSkewToFigure = angle90 - angle;
  let angleDegToRad = angleSkewToFigure * Math.PI / angle180;
  let maxFig = 200;
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

  let figParal = document.getElementById('parallelogram_img');
  const smallFigCoef = 0.4;
  const middleFigCoef = 0.7;
  const smallFigAngle = 10;
  const middleFigAngle = 35;

  let scale = 1;

  if( angle < smallFigAngle ) {
    scale = smallFigCoef;
  } else if (angle < middleFigAngle) {
    scale = middleFigCoef;
  }

  if( sideA > sideB && sideA > maxFig) { 
    sideB *= maxFig / sideA;
    sideA = maxFig;
    scale = maxFig / sideA;
  } else if (sideB > sideA && sideB > maxFig) {
    sideA *= maxFig / sideB;
    sideB = maxFig;
    scale = maxFig / sideB;
  } 

  figParal.style.width = sideA + 'px'; 
  figParal.style.height = sideB + 'px';
  figParal.style = `transform: matrix(${scale},0,${angleDegToRad},${scale},0,0)`;
}

function calcOval() {
    console.log('Oval In Progress')
}

function calcCircle() {
    console.log('Circle In Progress')
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

function calcTriangle() {
    console.log('Triangle In Progress')
}



function calcAll() {
    calcParal();
    calcOval();
    calcCircle();
    calcSquare();
    calcRectangle()
    calcTriangle()
  }