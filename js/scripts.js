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
  }
  return total;
}

// UI Logic
$(document).ready(function(){
  let priceArray = [];
  $("form#submit").submit(function(event) {
    event.preventDefault();
    const arrayToppings = [];
    const pizzaSize = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      const pizzaTopping = $(this).val();
      arrayToppings.push(pizzaTopping);
    });
    if (arrayToppings.length && pizzaSize){
      $(".order").show();
      let newPizza = new Pizza(pizzaSize, arrayToppings);
      newPizza.priceList(priceArray);
      $("#final-price").text(newPizza.getTotal(priceArray));
      $("#order-list").append("<li>Size: " + pizzaSize + "<br>Toppings: " + arrayToppings.join(", ") + "<br>Price: $" + newPizza.price() + "</li>"); 
      
    }
   }); 
  $("#button-details").click(function(){
    $("#order-list").toggle();
  })
})