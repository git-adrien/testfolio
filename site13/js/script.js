

  window.addEventListener('load', function() {

    fetch('http://localhost:1337/Posts')
    .then(response => response.json())
    .then(data => {
        var Posts = ""
       data.forEach(element => {
                Posts += "<div class=\"content_about\"><div><h2 >"+element.title+"</h2></div><div><p>"+element.TLDR+"</p><p><a class='hovermouse forward' href='post/post.html?id="+element.id+"'>C'est partie !!!</a></p></div></div>";
       });
        postlist = document.getElementById("postList") 
        postlist.innerHTML = Posts;
    });

    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1
    }, 400)


 }, false);


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

var url = window.location.pathname;
var id = url.substring(url.lastIndexOf('/') + 1);
console.log("id= "+id)


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


