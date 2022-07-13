import { product } from "./src/js/product.js";
import { data } from "./src/js/data.js";

/* This is a function that is listening for the DOM to be ready. */
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
  product(data);
};
