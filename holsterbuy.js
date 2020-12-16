const buyBtn = document.querySelector(".buy-button");
const qtyField = document.getElementById("quantity");
const designField = document.getElementById("select-design");
const colorField = document.getElementById("select-color");

qtyField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-quantity", qtyField.value);
});

designField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom1-value", designField.value);
})

colorField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom2-value", colorField.value);
})
