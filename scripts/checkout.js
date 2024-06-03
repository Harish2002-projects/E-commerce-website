import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "../../scripts/checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";

async function loadPage() {
  try {
    await Promise.all([loadProductsFetch(), loadCartFetch()]);
  } catch (error) {
    console.log("Unexpected error. Please try again later.");
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
