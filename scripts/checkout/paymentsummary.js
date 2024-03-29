import {cart} from '../../data/cart.js';
import { getproduct } from '../../data/products.js';
import { getdeliveryoption } from '../../data/delivery.js';
import { formatCurrency } from '../utils/money.js';
export function renderpaymentsummary()
{
  let productpricecents = 0;
  let deliverypricecents = 0;
  cart.forEach((cartitem)=>{
    const product = getproduct(cartitem.productId);
    productpricecents+= product.priceCents * cartitem.quantity;
    const delivery = getdeliveryoption(cartitem.deliveryoptionid);
    deliverypricecents+= delivery.priceCents;
  });
  const totalbeforetax = productpricecents + deliverypricecents;
  const taxcents = totalbeforetax * 0.1;
  const total = totalbeforetax + taxcents;
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  const paymentsumaryhtml = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (3):</div>
      <div class="payment-summary-money">$${formatCurrency(productpricecents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(deliverypricecents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(totalbeforetax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(taxcents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(total)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;
  document.querySelector('.payment-summary').innerHTML = paymentsumaryhtml;
}