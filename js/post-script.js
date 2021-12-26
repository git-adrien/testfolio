window.addEventListener('load', function() {

    var idParameter = getUrlParameters("id", window.location.href, true);

    fetch('http://www.withoutpsd.com:1337/Posts/'+idParameter)
    .then(response => response.json())
    .then(data => {
        var title = data.title
        var Post = data.text
        posttitle = document.getElementById("post-title") 
        post = document.getElementById("post") 
        posttitle.innerHTML = title;
        post.innerHTML = Post;
    });

    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1
    }, 400)


 }, false);

