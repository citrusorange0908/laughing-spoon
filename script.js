const search = document.getElementById("search");
const items = document.querySelectorAll("#itemList li");

search.addEventListener("keyup", function(){

  const keyword = search.value.toLowerCase();

  items.forEach(function(item){

    const text = item.textContent.toLowerCase();

    if(text.includes(keyword)){
      item.style.display = "block";
    }else{
      item.style.display = "none";
    }

  });

});
