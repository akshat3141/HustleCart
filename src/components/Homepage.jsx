import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct"; // Import the component to display cart products
import Cookies from "js-cookie";
import "./Homepage.css";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

function Homepage() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Add the selectedProduct state
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Retrieve cart data from cookies
    const cartData = Cookies.get("cart");
    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      console.log("Parsed cart data:", parsedCartData);
      setCartItems(parsedCartData);
    }
  }, []);
  useEffect(() => {
    const historyData = Cookies.get("history");
    if (historyData) {
      const parsedhistorytData = JSON.parse(historyData);
      console.log("Parsed history data:", parsedhistorytData);
      setHistory(parsedhistorytData);
    }
  }, []);
  return (
    <div className="homepage">
      <div className="section men-section">
        <Link to="/men" className="image-link">
          <div className="image men-image">
            <div className="hover-effect">
              <span>Men</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="section women-section">
        <Link to="/women" className="image-link">
          <div className="image women-image">
            <div className="hover-effect">
              <span>Women</span>
            </div>
          </div>
        </Link>
      </div>
      <div className=" cart-section">
        <Text fontSize={"4xl"} fontWeight={"extrabold"}>
          Checkout Cartel
        </Text>
        <div style={{ width: "500px", overflow: "auto" }}>
          <Box
            display={"flex"}
            flexDir={"row"}
            spacing={4}
            w={"fit-content"}
            h={"auto"}
            my={3}
          >
            {cartItems.map((item, index) => (
              <CartProduct key={index} product={item.product} />
            ))}
          </Box>
        </div>
        <Text fontSize={"4xl"} fontWeight={"extrabold"}>
          Recent Interest Showcase
        </Text>
        <div className="keep-shopping">
          <div style={{ width: "500px", overflow: "auto" }}>
            <Box
              display={"flex"}
              flexDir={"row"}
              spacing={4}
              w={"fit-content"}
              h={"auto"}
              my={3}
            >
              {history?.map((item, index) => (
                <Box
                  w="150px"
                  p={4}
                  mx={3}
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                  key={index}
                  as={Link}
                  to={`/p1/${item?.id}`}
                >
                  <Image src={item?.link} alt={item?.productDisplayName} />
                  <Text mt={2} fontSize="sm" fontWeight="semibold">
                    {item?.productDisplayName}
                  </Text>
                </Box>
              ))}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
