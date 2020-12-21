const button = document.getElementById("toggle");
const checkbox = document.getElementById("checkbox");
const prices = document.querySelectorAll(".card .card__price");
const monthly = [...document.querySelectorAll(".card .card__price")].map(
  (item) => item.textContent
);

const annually = ["199.99", "249.99", "399.99"];

button.addEventListener("click", (e) => {
  prices.forEach((price, idx) =>
    checkbox.checked
      ? (price.textContent = annually[idx])
      : (price.textContent = monthly[idx])
  );
});
