import { data } from "./data.js";

const filters = document.querySelector("#filters");
filters.addEventListener("input", filter);

export function filter() {
  const ram = [...filters.querySelectorAll("#ram input:checked")].map(
    (n) => n.value
  );

  const brand = [...filters.querySelectorAll("#brand input:checked")].map(
    (n) => n.value
  );

  product(data.filter((n) => (!brand.length || brand.includes(n.brand)) && (!ram.length || ram.includes(n.ram))));
}

export function product(cards) {
  document.getElementById("cards").innerHTML = cards
    .map(
      (product) => `  <div class="card">
      <img
        class="img"
        loading="lazy"
        src="./src/images/${product.image}"
        alt=""
        title=""
      />

      <div class="product__details">
        <h2 class="product__title">
          ${product.name} (${product.color.name}, ${product.ram} RAM , ${product.storage} Storage) with No Cost
          EMI/Additional Exchange Offers
        </h2>
        
        <span class="product__rating">⭐⭐⭐⭐⭐</span>
        <p class="product__price">
          <span class="product__symbol">₹</span>
          <span class="product__rupees">${product.price}</span>
        </p>
      </div>
    </div>`
    )
    .join("");
}

// export const product = () => {
//   let card = "";
//   data.forEach((product) => {
//     card += `
//               <div class="card">
//               <img
//                 class="img"
//                 loading="lazy"
//                 src="./src/images/${product.image}"
//                 alt=""
//                 title=""
//               />

//               <div class="product__details">
//                 <h2 class="product__title">
//                   ${product.name} (${product.color.name}, ${product.ram} RAM, ${product.storage} Storage) with No Cost
//                   EMI/Additional Exchange Offers
//                 </h2>
//                 <span class="product__rating">⭐⭐⭐⭐⭐</span>
//                 <p class="product__price">
//                   <span class="product__symbol">₹</span>
//                   <span class="product__rupees">${product.price}</span>
//                 </p>
//               </div>
//             </div>
//             `;
//     document.getElementById("cards").innerHTML = card;
//   });
// };
