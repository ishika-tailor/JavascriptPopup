
function isValidName(name) {
  
  if (name === '') {
    return false;
  }
  return true;
}

$('.checkout-button').click(function() {
  
  const getIcecreamType = $('.icecream-type').val();
  
 
  const getName = $('.name-for-checkout').val();

  // Check if the name input is empty
  if (!isValidName(getName)) {
    alert('Please enter a name for the order!');
    return;
  }

  // This is the price of each product //
  const coconut_mango_price = 2.3;
  const salted_caramel_price = 2.5;
  const strawberries_cream_price = 1.90;

  // Get the quanity of scoops of items //
  const getQuantityCoconutMango = $('.quantity-scoops-coconut-mango').val();
  const getQuantitySaltedCaramel = $('.quantity-scoops-salted-caramel').val();
  const getQuantityStrawberriesCream = $('.quantity-scoops-strawberries-cream').val();

  // calculate the total cost of the order //
  let total = (coconut_mango_price * getQuantityCoconutMango) + (salted_caramel_price*getQuantitySaltedCaramel)+(strawberries_cream_price*getQuantityStrawberriesCream);

  let messageText = 'New order from: ' + getName + ' in type: ' + getIcecreamType + '. Your total order cost is: $' + total;

  // Alert with final amount
  alert(messageText);
});

