var app = function(){
  var url = "https://api.punkapi.com/v2/beers";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', function(){
    var jsonString = request.responseText;
    var brewdogBeers = JSON.parse(jsonString)
    // console.log(brewdogBeers[0].method.mash_temp[0].temp.value)
    var ul = makeListObject()
    populateList(brewdogBeers, ul)
  })
  request.send()
}

var makeListObject = function(){
  var ul = document.createElement("ul");
  var div = document.querySelector("#main")
  div.appendChild(ul);
  return ul;
}
var populateList = function(brewdogBeers, ul){
  brewdogBeers.forEach(function(beer){
    var beerLi = document.createElement("li");
    beerLi.innerText = beer.name;
    var ingredients = document.createElement("li");
    // ingredients.innerText = beer.ingredients.malt[0].name;
    // console.log(beer.ingredients.malt[0]);
    var beerImg = document.createElement("img");
    beerImg.src = beer.image_url;
    beerImg.width = 50;
    ul.appendChild(beerLi);
    ul.appendChild(beerImg);
    ul.appendChild(ingredients);
  })
}
var ingredientsList = [];
  brewdogBeers.forEach(function(beer){
    beer.ingredients.
  })

window.addEventListener('load', app);
