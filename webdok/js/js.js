/**
 * file: js.js
 * purpose: interactivity
 **/

//mousemove

var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');


can.addEventListener('mousemove', function(e) {
    var mouse = getMouse(e, can);
    redraw(mouse);
}, false);


function redraw(mouse) {
    console.log('a');
    can.width = can.width;
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.rect(0,0,1920,1080);
    ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI*2, true)
    ctx.clip();
    ctx.fillRect(0,0,1920,1080);
}

var img = new Image();
img.onload = function() {
    redraw({x: -500, y: -500})
}


function getMouse(e, canvas) {
    var element = canvas,
        offsetX = 0,
        offsetY = 0,
        mx, my;

    // Compute the total offset. It's possible to cache this if you want
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;

    // We return a simple javascript object with x and y defined
    return {
        x: mx,
        y: my
    };
}

//Array med billeder

let galleri = document.getElementById("figurbilleder");
galleri.innerHTML="vfg";



var kort = [
"../images/gamerfigur.png",
    
"../images/gamerfigur1.png",
    
"../images/gamerfigur2.png",
    
];



// loope listen ud

for (let n=0; n < kort.length; n++) {
    console.log ("<img src='" + kort[n] + "'>");
    galleri.innerHTML += "<img src='" + kort [n] + "'>";
    
}


// Lyd til billeder

"use strict";

//Hovedprogram
const lydfil = new Audio("../audio/rain.mp3");

document.getElementById("figurbilleder").addEventListener("click", function (){
if(lydfil.paused) {
    lydfil.play();
} else
    {lydfil.pause();
    }
})

const lydfil2 = new Audio("../audio/rain.mp3");

document.getElementById("figurbilleder").addEventListener("click", function (){
if(lydfil2.paused) {
    lydfil2.play();
} else
    {lydfil2.pause();
    }
})

const lydfil3 = new Audio("../audio/alien.mp3");

document.getElementById("figurbilleder").addEventListener("click", function (){
if(lydfil3.paused) {
    lydfil3.play();
} else
    {lydfil3.pause();
    }
})






