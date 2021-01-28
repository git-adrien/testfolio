


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    if(event.target.classList.contains('hovermouse')){
        cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - (event.toElement.clientWidth/2))+"px;width:"+event.toElement.clientWidth + "px")
    }else{
        cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
    }
    
})

document.addEventListener("mouseover", function( event ){
    imgCursor = event.target.classList.contains('hovermouseproject')
    if(imgCursor){
        cursor.classList.add("imgCursor");
    }else{
        cursor.classList.remove("imgCursor");
    }
})

document.addEventListener('click', function( event ){
    cursor.classList.add("cursor_click");
    imgCursor = event.target.classList.contains('hovermouseproject')
    if(imgCursor){
        cursor.classList.add("loadedCursor");  
    }
    setTimeout(() => {
        cursor.classList.remove("cursor_click");
    }, 200)
})


window.addEventListener('load',function(){
    /*
    document.querySelector('body').classList.add("loaded")  
    document.querySelector('body').style.overflow = "hidden"
    setTimeout(() => {
        document.querySelector('body').style.overflow = "auto"
    }, 2000)*/
})
