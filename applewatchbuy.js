const buyBtn = document.querySelector(".buy-button");
const qtyField = document.getElementById("quantity");
const colorField = document.getElementById("select-color");
const secColorField = document.getElementById("select-secondary-color");
const typeField = document.getElementById("select-type");

qtyField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-quantity", qtyField.value);
});

colorField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom1-value", colorField.value);
})

secColorField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom3-value", secColorField.value);
})

typeField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom2-value", typeField.value);
})
