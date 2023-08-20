import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Cookies from "js-cookie";

const Cart = ({ discl }) => {
  let cart = JSON.parse(Cookies.get("cart") || "{}");

  const removeFromCart = (key, id) => {
    var x = confirm("Do you sure want to remove?");
    if (x) {
      console.log(1);
      const newCart = cart.filter((item) => item !== key);
      cart = newCart;
      const elem = document.getElementById(id);
      if (elem) {
        elem.remove();
      }
      Cookies.remove("cart");
      Cookies.set("cart", JSON.stringify(newCart));
      console.log(3);
    }
  };

  return (
    <>
      <Drawer
        placement={"right"}
        onClose={discl.onClose}
        isOpen={discl.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent zIndex={"9999"}>
          <DrawerHeader borderBottomWidth="1px">Your Cart</DrawerHeader>
          <DrawerBody>
            {Object.keys(cart).map((key, index) => (
              <Card
                key={index}
                direction="row"
                overflow="auto"
                variant="outline"
                alignItems="center"
                id={`cart-${index}`}
              >
                <Stack>
                  <CardBody>
                    <Heading size="md">{cart[key]?.product[0]}</Heading>
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100px", sm: "200px" }}
                      src={cart[key]?.product[2]} //image URL
                      alt={cart[key]?.product[0]} // Product text
                    />
                  </CardBody>

                  <CardFooter>
                    <Button
                      variant="solid"
                      colorScheme="red"
                      onClick={() => removeFromCart(cart[key], `cart-${index}`)}
                    >
                      Remove
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
