function calcParal() {
    console.log('Parallelogram In Progress')
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