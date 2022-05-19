import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";

export default filter;

function filter() {
  const filter = document.querySelector(".filter");
  const saleCheck = filter.querySelector("#discount-checkbox");
  const checkMark = filter.querySelector(".filter-check_checkmark");
  let checkSale = false;
  let price = {
    minPrice: "",
    maxPrice: "",
  };

  filter.addEventListener("input", (Event) => {
    switch (Event.target.id) {
      case "min":
        price.minPrice = Event.target.value;
        changeFilter();
        break;
      case "max": {
        price.maxPrice = Event.target.value;
        changeFilter();
        break;
      }
    }
  });

  saleCheck.addEventListener("change", () => {
    checkMark.classList.toggle("checked");
    checkSale = saleCheck.checked;
    changeFilter();
  });

  function changeFilter() {
    getData().then((data) => {
      renderGoods(priceFilter(data, price, checkSale));
    });
  }
}
