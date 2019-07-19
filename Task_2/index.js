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


function calcAll() {
    calcParal();
    calcOval();
    calcCircle();
    calcSquare();
  }