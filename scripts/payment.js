 // JavaScript to show/hide payment fields based on user's choice
 const onlinePaymentRadio = document.getElementById("online_payment");
 const cashOnDeliveryRadio = document.getElementById("cash_on_delivery");
 const onlinePaymentFields = document.getElementById("online_payment_fields");
 const cashOnDeliveryFields = document.getElementById("cash_on_delivery_fields");

 onlinePaymentRadio.addEventListener("change", () => {
     onlinePaymentFields.style.display = "block";
     cashOnDeliveryFields.style.display = "none";
 });

 cashOnDeliveryRadio.addEventListener("change", () => {
     onlinePaymentFields.style.display = "none";
     cashOnDeliveryFields.style.display = "block";
 });