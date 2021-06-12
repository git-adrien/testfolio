window.addEventListener('load', function() {

    fetch('http://localhost:1337/Posts')
    .then(response => response.json())
    .then(data => {
        var Posts = ""
       data.forEach(element => {
                Posts += "<div class=\"content_about\"><div><h2 >"+element.title+"</h2></div><div><p>"+element.TLDR+"</p><p><span  onclick=\"transitionToPage(this,'./post/post.html?id="+element.id+"')\" class=\"hovermouse forward\">Lire la suite</span></p></div></div>";
       });
        postlist = document.getElementById("postList") 
        postlist.innerHTML = Posts;
    });

    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1
    }, 500)


 }, false);