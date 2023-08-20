import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CartProduct = ({ product }) => {
  return (
    <Box
      w={"150px"}
      mx={3}
      p={4}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      as={Link}
      to={`/p1/${product[1]}`}
    >
      <Image src={product[2]} alt={product[0]} />
      <Text mt={2} fontSize="sm" fontWeight="semibold">
        {product[0]}
      </Text>
    </Box>
  );
};

export default CartProduct;
