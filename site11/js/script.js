function main() {
    const canvas = document.querySelector("#glCanvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");
  
    // Only continue if WebGL is available and working
    if (gl === null) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }
  
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
  
  window.onload = main;





const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    if(event.target.classList.contains('hovermouse')){
        //cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - (event.toElement.clientWidth/2))+"px;width:"+event.toElement.clientWidth + "px")
        cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
        cursor.classList.add("expand");
    }else{
        cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
        cursor.classList.remove("expand");
    }
    
})

document.addEventListener("mouseover", function( event ){
   imgCursor = event.target.classList.contains('hovermouseproject')
   linkBg = event.target
    bg = this.getElementById('projectBG') ;
    if(imgCursor){
        img = event.target.dataset.img
        bg.style.backgroundImage = "url('"+img+"')";
        linkBg.classList.add("bgPro");
    }
    
})




function update() {
    clock = document.getElementById("clock") 
    clock.innerHTML = moment().format('H:mm:ss')
  }
  setInterval(update, 1000);

  LocalTime = document.getElementById("fuClock") 
  LocalTime.innerHTML = moment.locale();
  yearTime = document.getElementById("yearClock") 
  yearTime.innerHTML = moment().format('YYYY');   ;
  
/**
 * document.addEventListener("mouseover", function( event ){
   imgCursor = event.target.classList.contains('hovermouseproject')
    bg = this.getElementById('projectBG') ;
    if(imgCursor){
        img = event.target.dataset.img
        cursor.classList.add("imgCursor");
        cursor.style.backgroundImage = "url('"+img+"')";
    }else{
        img = event.target.dataset.img
        cursor.classList.remove("imgCursor");
        cursor.style.backgroundImage = "url('"+img+"')";
    }
})
 */