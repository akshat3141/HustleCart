import Cookies from "js-cookie";

export const addToCart = (product) => {
  let storedCart = Cookies.get("cart");
  let updatedCart = [];

  if (storedCart) {
    updatedCart = JSON.parse(storedCart);
  }

  updatedCart.push(product);

  Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });
  console.log(JSON.parse(Cookies.get("cart")));
};
