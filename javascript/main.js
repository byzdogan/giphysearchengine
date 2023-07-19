//GRAB THE INPUT VALUE
document.querySelector(".js-go").addEventListener("click",function(e) {
    console.log(e)
    let input = document.querySelector("input").value;
    console.log(input)
    getData(input);
});

document.querySelector(".js-userinput").addEventListener("keyup",function(e) {
    let input = document.querySelector("input").value;
    console.log(input)
    // 13 is keycode of enter key
    if(e.which == 13) { 
        getData(input);
    }
});

//GETTING THE DATA WITH USING GIPHY API
function getData(data) {
    let container = document.querySelector(".keyword");
    container.innerHTML = data;
    var keyword = data.split(" ").join("+");
    var url = "http://api.giphy.com/v1/gifs/search?q="+keyword+"&api_key=fBoAJLZV7JISteCTbdTQy6JVil1C3nUL";
    console.log(url);
    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){
    var data = e.target.response;
    console.log(data);
    pushToDOM(data);
});
}


//DISPLAYING THE GIPHS
function pushToDOM(input) {
    var response = JSON.parse(input); //convert to js
    console.log(response);
    clearResult();
    var imageURL = response.data;   
    console.log(imageURL);
    imageURL.forEach(function(image) {
        var src = image.images.fixed_height.url;
        console.log(src);
        let container = document.querySelector(".jscontainer");
        container.innerHTML += "<img src=\"" + src + "\" class=\"jscontainer-image\">";
    });
}

function clearResult() {
    let container = document.querySelector(".jscontainer");
    container.innerHTML = " ";
}