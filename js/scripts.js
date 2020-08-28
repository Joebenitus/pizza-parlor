// Business Logic
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function(){
  let price;
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

Pizza.prototype.addPizza = function(list){
  list.push(this);
}

// UI Logic
$(document).ready(function(){
  let pizzaList = [];
  $("form#submit").submit(function(event) {
    const arrayToppings = [];
    const pizzaSize = $("input:radio[name=size]:checked").val();
    event.preventDefault();
    $(".total").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      const pizzaTopping = $(this).val();
      arrayToppings.push(pizzaTopping);
    });
    let newPizza = new Pizza(pizzaSize, arrayToppings);
    newPizza.addPizza(pizzaList);
    console.log(pizzaList);
    $('#final-price').text(newPizza.price());
  });
})