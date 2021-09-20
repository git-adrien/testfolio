

var video;
var vScale = 16;
var colorPicker1;
var colorPicker2;
var colorPicker3;
var colorPicker4;

function setup() {
    let cnv = createCanvas(2048, 1792);
    pixelDensity(1);
    
    video = createCapture(VIDEO);

    
    video.size(width / vScale, height / vScale);

    colorPicker1 = createColorPicker('#081820');
    colorPicker1.position(0, height + 5);
    colorPicker2 = createColorPicker('#346856');
    colorPicker2.position(0, height + 25);
    colorPicker3 = createColorPicker('#88c070');
    colorPicker3.position(0, height + 45);
    colorPicker4 = createColorPicker('#e0f8d0');
    colorPicker4.position(0, height + 65);
  }
  
  function draw() {
    background(255);
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
          fill(colorPicker1.color());
        }else if(bright<126){
          fill(colorPicker2.color());
        }else if(bright<189){
          fill(colorPicker3.color());
        }else if(bright<255){
          fill(colorPicker4.color());
        }
        
        rect(x * vScale, y * vScale, vScale-5, vScale-5);
      }
    }
  }