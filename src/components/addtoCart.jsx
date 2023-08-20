import { Button } from "@chakra-ui/react";
import { addToCart } from "../data/cart";
import Cookies from "js-cookie";
const AddToCart = (product) => {
  const cart = JSON.parse(Cookies.get("cart") ? Cookies.get("cart") : "{}");
  const handleAddtoCart = () => {
    addToCart(product);
  };

  return <Button onClick={handleAddtoCart}>Add To Cart</Button>;
};

export default AddToCart;
