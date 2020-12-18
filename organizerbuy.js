const buyBtn = document.querySelector(".buy-button");
const qtyField = document.getElementById("quantity");
const designField = document.getElementById("select-design");
const colorField = document.getElementById("select-color");
const priceText = document.getElementById("price");
const sizes = ["Short w/ 1 inch clamp", "Short w/ 2 inch clamp", "Long w/ 1 inch clamp", "Long w/ 2 inch clamp"];
const prices = [15, 21, 21, 27];

qtyField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-quantity", qtyField.value);
});

designField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom1-value", designField.value);
  buyBtn.setAttribute("data-item-price", prices[sizes.indexOf(designField.value)]);
  priceText.innerHTML = "$" + prices[sizes.indexOf(designField.value)] + ".00 Free Shipping";
})

colorField.addEventListener("change", function() {
  buyBtn.setAttribute("data-item-custom2-value", colorField.value);
})
