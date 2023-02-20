// =====
// render canvas at 2x size on Retina screens so it's not blurry
// =====

function resizeCanvas(canvasID, width, height) {
    var canvas = document.getElementById(canvasID);
    var context = canvas.getContext('2d');

    // get the screen's pixel ratio (1 if normal, 2 if Retina)
    var dpr = window.devicePixelRatio;

    // set the physical dimensions of canvas
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    // scale the contents of the canvas up by 2 (if Retina)
    canvas.width *= dpr;
    canvas.height *= dpr;
    context.scale(dpr, dpr);

    return context;
}

// =====
// drawing the canvas logo
// =====

var context = resizeCanvas('gulliver-logo', 250, 40);

// text shadow
context.shadowColor = 'rgba(0, 0, 0, .75)';
context.shadowBlur = 8;
context.shadowOffsetY = 2;

// first word
var fontSize = 30;

context.font = 'bold ' + fontSize + 'px Canela';
context.fillStyle = 'white';
context.fillText('Gulliver\'s', 0, fontSize);

// second word
var firstWord = context.measureText('Gulliver\'s '); // so I know how far over to start the second word

context.fillStyle = '#f2cf38';
context.fillText('Travels', firstWord.width, fontSize);