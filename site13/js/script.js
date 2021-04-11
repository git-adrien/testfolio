



window.transitionToPage = function(e,href) {

    forward = e.classList.contains('forward')
    
    if(forward){
        document.querySelector('body').style.opacity = 0
        setTimeout(function() { 
            window.location.href = href
        }, 400)
    }else{
        window.open(href) 
    }

}

document.addEventListener('DOMContentLoaded', function(event) {
    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1
    }, 400)
})


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
    clock.innerHTML = moment().format('H:mm')
}
  setInterval(update, 1000);

  LocalTime = document.getElementById("fuClock") 
  LocalTime.innerHTML = moment.locale();
  yearTime = document.getElementById("yearClock") 
  yearTime.innerHTML = moment().format('YYYY');   ;
  
  update()
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