const buyBtn = document.querySelector(".buy-button");
const qtyField = document.getElementById("quantity");
const boardField = document.getElementById("select-board");
const structureField = document.getElementById("select-structure");
const beadField = document.getElementById("select-bead");

qtyField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-quantity", qtyField.value);
});

boardField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom1-value", boardField.value);
})

structureField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom2-value", structureField.value);
})

beadField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom3-value", beadField.value);
})
