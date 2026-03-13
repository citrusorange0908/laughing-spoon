function filterItems(category){

const items = document.querySelectorAll("#itemList li");

items.forEach(item => {

const itemCategory = item.dataset.category;

if(category === "all" || itemCategory === category){
item.style.display = "block";
}else{
item.style.display = "none";
}

});

}
