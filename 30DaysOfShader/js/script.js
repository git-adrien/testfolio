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
    bg = this.getElementById('projectBG') ;
    if(imgCursor){
        img = event.target.dataset.img
        bg.style.backgroundImage = "url('"+img+"')";
    }
})

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