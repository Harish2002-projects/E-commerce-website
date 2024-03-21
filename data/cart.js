export let cart =[{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2
},
{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1
}];

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

export function removefromcart(productId)
{
  let newcart = [];
  cart.forEach((cartitem)=> {
    if(cartitem.productId != productId)
    {
      newcart.push(cartitem);
    }
  });
  cart = newcart;
}