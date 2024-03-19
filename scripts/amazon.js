import { cart } from '../data/cart.js';
let productshtml= '';
products.forEach((product)=> {
  productshtml += `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class = "js-select-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart js-addtocart-${product.id}">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-but" data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`;
});


document.querySelector('.js-products-grid').innerHTML= productshtml;

let addedtimeoutid = {};
document.querySelectorAll('.js-add-but').forEach((button)=> {
  button.addEventListener('click',() => {
    const productId = button.dataset.productId;
    document.querySelector(`.js-addtocart-${productId}`).classList.add(`js-addedtocart`);
    if(addedtimeoutid[productId])
    {
      clearTimeout(addedtimeoutid[productId]);
    }
    const timeoutid = setTimeout(()=>{
      document.querySelector(`.js-addtocart-${productId}`).classList.remove('js-addedtocart');
    },2000);
    addedtimeoutid[productId] = timeoutid;
    let matchingitem;
    cart.forEach((item) => {
      if(productId === item.productId)
      {
        matchingitem = item;
      }
    });
    if(matchingitem)
    {
      matchingitem.quantity+= Number(document.querySelector(`.js-select-${productId}`).value);
      console.log(document.querySelector(`.js-select-${productId}`).value);
    }
    else
    {
      const quantity = Number(document.querySelector(`.js-select-${productId}`).value);
      cart.push({
        productId,
        quantity
      });
    }
    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML= cartQuantity;
  });
});



