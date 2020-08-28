// Business Logic
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

// UI Logic
$(document).ready(function(){
  $("form#submit").submit(function(event) {
    let arrayToppings = []
    event.preventDefault();
    $(".total").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      const pizzaTopping = $(this).val();
      arrayToppings.push(pizzaTopping);
      $('#final-price').append(pizzaTopping + "<br>");
    });
    // $('#transportation_survey').hide();
  });
})