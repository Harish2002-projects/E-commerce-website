import { cart, removefromcart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatcurrency } from './utils/money.js';

updatecartquantity();
let checkouthtml = '';

cart.forEach((cartitem)=> {
  let productId = cartitem.productId;
  let matchingProduct;
  products.forEach((product) => {
    if(product.id === productId)
    {
      matchingProduct = product;
    }
  });
  let html = ` 
  <div class="cart-item-container cartitem-${matchingProduct.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-price">
          $${formatcurrency(matchingProduct.priceCents)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartitem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary js-delete-quantity" data-product-id="${matchingProduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  checkouthtml+=html;
});
document.querySelector('.js-order-summary').innerHTML= checkouthtml;

document.querySelectorAll('.js-delete-quantity').forEach((link)=> {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    removefromcart(productId);
    document.querySelector(`.cartitem-${productId}`).remove();
    updatecartquantity();
  })
});
function updatecartquantity()
{
  let cartQuantity = 0;
  cart.forEach((cartitem) => {
    cartQuantity += cartitem.quantity;
  });
  document.querySelector('.js-return-to-home-link').innerHTML= `${cartQuantity} items`;
}

