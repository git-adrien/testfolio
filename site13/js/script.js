window.addEventListener('load', function() {

    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1
    }, 500)


 }, false);



window.transitionToPage = function(e,href) {

    forward = e.classList.contains('forward')
    
    if(forward){
        document.querySelector('body').style.opacity = 0
        setTimeout(function() { 
            window.location.href = href
        }, 500)
    }else{
        window.open(href) 
    }

}



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

function Darkmode(){
    if(document.querySelector('body').style.backgroundColor!='black'){
        document.querySelector('body').style.backgroundColor = "black"
        document.querySelector('body').style.color = "white"
    }else{
        document.querySelector('body').style.backgroundColor = "white"
        document.querySelector('body').style.color = "black"
    }
}

function getUrlParameters(parameter, staticURL, decode){

    var currLocation = (staticURL.length)? staticURL : window.location.search,
        parArr = currLocation.split("?")[1].split("&"),
        returnBool = true;

    for(var i = 0; i < parArr.length; i++){
         parr = parArr[i].split("=");
         if(parr[0] == parameter){
             return (decode) ? decodeURIComponent(parr[1]) : parr[1];
             returnBool = true;
         }else{
             returnBool = false;            
         }
    }

    if(!returnBool) return false;  
 }