// Business Logic
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price;
}

Pizza.prototype.price = function(){
  switch (this.size){
    case ("personal-pan"):
      price = 8;
      break;
    case ("small"):
      price = 12;
      break;
    case ("medium"):
      price = 15;
      break;
    case ("large"):
      price = 18;
      break;
  }
  for (let i=0; i < this.toppings.length; i++){
    price += 1;
  }
  return price;
}

Pizza.prototype.priceList = function(list){
  list.push(this.price());
}

Pizza.prototype.getTotal = function(list){
  let total = 0;
  for (i=0; i < list.length; i++){
    total += list[i];
    console.log(total);
  }
  return total;
}

// UI Logic
$(document).ready(function(){
  let pizzaList = [];
  $("form#submit").submit(function(event) {
    event.preventDefault();
    const arrayToppings = [];
    const pizzaSize = $("input:radio[name=size]:checked").val();
    $(".order").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      const pizzaTopping = $(this).val();
      arrayToppings.push(pizzaTopping);
    });
    let newPizza = new Pizza(pizzaSize, arrayToppings);
    newPizza.priceList(pizzaList);
    console.log(pizzaList);
    $("#order-list").append("<li>Size: " + pizzaSize + "<br>Toppings: " + arrayToppings.join(", ") + "<br>Price: $" + newPizza.price() + "</li>");
    $("button#button-to-checkout").click(function(event){
      event.preventDefault();
      $(".order").hide();
      $(".total").show();
      $("#final-price").text(newPizza.getTotal(pizzaList))
    });
  });
})