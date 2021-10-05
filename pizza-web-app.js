pizzas = ["Veg Margherita Pizza","Paneer Tikka Pizza","Pasta Pizza","Chicken Tandoori Pizza","Veg Deluxe Pizza","Veg Extravegenza Pizza","Deluxe Cheese Pizza"]

function addmenu(){
    var a=document.getElementById("add_item").value;
    pizzas.push(a);
    console.log(pizzas);
}

function getmenu(){
    document.getElementById("display_menu").innerHTML=pizzas;
}