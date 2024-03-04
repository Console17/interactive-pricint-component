const slider = document.getElementById("myRange");
const price = document.querySelector(".price");
const checkbox = document.querySelector(".billing-toggle");
const priceType = document.querySelector(".price-month");

function updatePrice() {
  if (checkbox.checked) {
    price.innerHTML = `$${slider.value * 10}` + ".00";
    priceType.innerHTML = "/year";
  } else {
    price.innerHTML = `$${slider.value}` + ".00";
    priceType.innerHTML = "/month";
  }
}

slider.oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, hsl(174, 86%, 45%) " +
    value +
    "%, #d3d3d3 " +
    value +
    "%)";
  updatePrice();
};

checkbox.addEventListener("change", updatePrice);
