export const cart =[];



export function displaycartquantity(productId)
{
  let matchingitem;
  cart.forEach((cartitem) => {
    if(productId === cartitem.productId)
    {
      matchingitem = cartitem;
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
}