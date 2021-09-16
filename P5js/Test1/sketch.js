

var video;
var vScale = 16;

function setup() {
    let cnv = createCanvas(2048, 1792);
    pixelDensity(1);
    
    video = createCapture(VIDEO);
    video.size(width / vScale, height / vScale);
  }
  
  function draw() {
    background(255)
    video.loadPixels();
    for (var y = 0; y < video.height; y++) {
      for (var x = 0; x < video.width; x++) {
        var index = (video.width - x + 1 + (y * video.width)) * 4;
        var r = video.pixels[index + 0];
        var g = video.pixels[index + 1];
        var b = video.pixels[index + 2];

        var bright = (r + g + b)/3;

        var w = map(bright, 127, 255, 127, vScale);
        
        noStroke();
        if(bright<63){
          fill(8, 24, 32);
        }else if(bright<126){
          fill(52, 104, 86);
        }else if(bright<189){
          fill(136, 192, 112);
        }else if(bright<255){
          fill(224, 248, 208);
        }
        
        rect(x * vScale, y * vScale, vScale-5, vScale-5);
      }
    }
  }