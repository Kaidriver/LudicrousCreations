const buyBtn = document.querySelector(".buy-button");
const qtyField = document.getElementById("quantity");
const colorField = document.getElementById("select-color");

qtyField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-quantity", qtyField.value);
});

colorField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom1-value", colorField.value);
})
