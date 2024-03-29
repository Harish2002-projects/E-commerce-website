import {cart, removeFromCart,updatetocart} from '../../data/cart.js';
import {products,getproduct} from '../../data/products.js';
import {formatCurrency} from '../utils/money.js';
import { deliveryoptions, getdeliveryoption } from '../../data/delivery.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { renderpaymentsummary } from './paymentsummary.js';

export function renderordersummary()
{
  let cartSummaryHTML = '';
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getproduct(productId);
    const deliveryoptionid = cartItem.deliveryoptionid;
    let deliveryoption = getdeliveryoption(deliveryoptionid);
    const today = dayjs();
    const delidate = today.add(deliveryoption.deliverydays, 'days');
    const delistring = delidate.format('dddd, MMMM D');

    cartSummaryHTML += `
      <div class="cart-item-container
        js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${delistring}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryoptionshtml(matchingProduct,cartItem)}
          </div>
        </div>
    </div>
    `;
  });

  function deliveryoptionshtml(matchingProduct,cartItem)
  {
    let html = '';
    deliveryoptions.forEach((deliveryoption)=> {
      const today = dayjs();
      const pricestring = deliveryoption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryoption.priceCents)} -`;
      const delidate = today.add(deliveryoption.deliverydays, 'days');
      const delistring = delidate.format('dddd, MMMM D');
      const isChecked = deliveryoption.id === cartItem.deliveryoptionid;
      html += `
      <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" 
        data-delivery-id="${deliveryoption.id}">
      <input type="radio" ${isChecked ? 'checked' : ''}
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            ${delistring}
          </div>
          <div class="delivery-option-price">
            ${pricestring} Shipping
          </div>
        </div>
      </div>
      `;
    });
    return html;
  }

  document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
      renderpaymentsummary();
    });
  });
  document.querySelectorAll('.js-delivery-option').forEach((element)=>{
    element.addEventListener('click', ()=>{
      const productId = element.dataset.productId;
      const deliveryoptionid = element.dataset.deliveryId;
      updatetocart(productId,deliveryoptionid);
      renderordersummary();
      renderpaymentsummary();
    });
  });
}
