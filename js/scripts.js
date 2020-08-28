// Business Logic
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

// Pizza.prototype.price = function

// UI Logic
$(document).ready(function(){
  $("form#submit").submit(function(event) {
    const arrayToppings = []
    const pizzaSize = $("input:radio[name=size]:checked").val();
    event.preventDefault();
    $(".total").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      const pizzaTopping = $(this).val();
      arrayToppings.push(pizzaTopping);
      // $('#final-price').text(arrayToppings + " " + pizzaSize);
    });
    let newPizza = new Pizza(pizzaSize, arrayToppings);
    console.log(newPizza)
  });
})