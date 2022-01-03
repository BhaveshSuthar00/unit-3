
 function formData(event){
    event.preventDefault()
    setTimeout(function() {
        alert('Your order is accepted');
    }, 10);
    setTimeout(function() {
        alert('Your order is being cooked');
    }, 3000);
    setTimeout(function() {
        alert('Your order is ready');
    }, 11000);
    setTimeout(function() {
        alert('Order out for delivery');
    }, 22000);
    setTimeout(function() {
        alert('Order delivered');
    }, 25000);
}
