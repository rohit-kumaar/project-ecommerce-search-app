const URL = `https://dummyjson.com/products`;

export const products = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

const getData = products();

getData
  .then((data) => {
    const products = data.products;
    let card = "";
    products.forEach((product) => {
      console.log(product);
      card += `
                <div class="card md:flex md:gap-4 md:p-4">
                <div class="img-wrapper">
                  <img class="w-80 aspect-auto object-cover object-center" loading="lazy"
                    src="${product.images[0]}" alt="" title="" />
                </div>
                <div class="product-details md:flex md:flex-col md:items-start md:justify-center">
                  <h2 class="text-2xl font-semibold">${product.brand}</h2>
                  <div>⭐⭐⭐⭐⭐</div>
                  <div class="my-2 flex text-red-600 font-semibold"><span class="text-base">₹</span> <span
                      class="text-lg ml-1 ">${product.price}</span> </div>
                </div>
              </div>
              `;
    });
    const cards = document.querySelector("#cards");
    cards.innerHTML = card;
  })
  .catch((err) => {
    console.log(err);
  });
