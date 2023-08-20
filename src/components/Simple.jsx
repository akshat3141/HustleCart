import { useLocation, useParams } from "react-router-dom";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";
import { addToCart } from "../data/cart";
import Cookies from "js-cookie";
import AddToCart from "./addtoCart";
import { addToHistory } from "../data/history";

export default function Simple() {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  const handleRelatedProducts = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/productrelated?id=${id}`
      );
      setRelatedProducts(res.data); // Store related products in the 'relatedProducts' state variable.
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  // this will fetch the id from url
  const { pid } = useParams();
  const handleAddtoCart = () => {
    const temp = {
      product: [productDetails?.productDisplayName, pid, productDetails?.link],
    };
    addToCart(temp);
  };
  const handleProducts = async (id) => {
    setLoading(true);
    //this will prevent 404 error while loading
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/recommendation?entered_id=${id}`
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  //this will provide us with the details of the current opened product
  const handleProductsDetails = async (id) => {
    setLoading1(true);
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/product?product_id=${id}`
      );
      setProductDetails(res.data);
      addToHistory(res.data);
    } catch (err) {
      console.log(err);
    }
    setLoading1(false);
  };

  useEffect(() => {
    handleProducts(pid);
    handleProductsDetails(pid);
    handleRelatedProducts(pid); // Fetch related products
  }, []);
  return (
    <Box h={"820px"} w={"100vw"} overflow={"auto"}>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={
                loading1
                  ? "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
                  : productDetails?.link
              }
              fit={"cover"}
              align={"center"}
              h={"100%"}
              w={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>

          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                fontFamily={"Aqua Grotesque"}
              >
                {loading1 ? "Loading" : productDetails?.productDisplayName}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
                fontFamily={"Old Standard TT"}
              >
                $350.00 USD
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                  fontFamily={"Old Standard TT"}
                >
                  Elevate your wrist game with our distinguished collection of
                  men's watches. From classic to contemporary, our timepieces
                  are meticulously designed to complement your style.
                </Text>
                <Text fontSize={"lg"}>
                  Step into confidence and style with our diverse range of men's
                  footwear. From casual outings to active pursuits, our footwear
                  collection caters to every facet of your life.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                  fontFamily={"Old Standard TT"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      fontFamily={"Old Standard TT"}
                    >
                      Between lugs:
                    </Text>{" "}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      fontFamily={"Old Standard TT"}
                    >
                      Bracelet:
                    </Text>{" "}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      fontFamily={"Old Standard TT"}
                    >
                      Case:
                    </Text>{" "}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      fontFamily={"Old Standard TT"}
                    >
                      Case diameter:
                    </Text>{" "}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      fontFamily={"Old Standard TT"}
                    >
                      Dial color:
                    </Text>{" "}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      fontFamily={"Old Standard TT"}
                    >
                      Crystal:
                    </Text>{" "}
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                  </ListItem>
                  <ListItem>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      fontFamily={"Old Standard TT"}
                    >
                      Water resistance:
                    </Text>{" "}
                    5 bar (50 metres / 167 feet){" "}
                  </ListItem>
                </List>
              </Box>
            </Stack>
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              fontFamily={"Old Standard TT"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={handleAddtoCart}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      {/* seperate container for recommendation of products...... */}

      <Container maxW={"7xl"} mt={10}>
        <Heading as="h2" fontSize="2xl" mb={4} fontFamily={"Aqua Grotesque"}>
          Similar Styles Spotlight
        </Heading>
        <Flex spacing={6} py={10}>
          {loading && "Loading..."}
          {!loading &&
            products?.map((product, index) => (
              <Box key={index} textAlign="center" p={5}>
                <Link to={`/p1/${product[1]}`} target="_blank">
                  <Image
                    src={product[2]}
                    alt={product[0]}
                    w="100%"
                    maxH="200px"
                    objectFit="cover"
                  />
                </Link>
                <Text mt={2} fontFamily={"Old Standard TT"}>
                  {product[0]}
                </Text>
                <AddToCart product={product} />
              </Box>
            ))}
        </Flex>
      </Container>
      <Container maxW={"7xl"} mt={10}>
        <Heading as="h2" fontSize="2xl" mb={4} fontFamily={"Aqua Grotesque"}>
          Ideal Duos Display
        </Heading>
        <Flex spacing={6} py={10}>
          {loading && "Loading..."}
          {!loading &&
            relatedProducts?.map((product, index) => (
              <Box key={index} textAlign="center" p={5}>
                <Link to={`/p1/${product[1]}`} target="_blank">
                  <Image
                    src={product[2]}
                    alt={product[0]}
                    w="100%"
                    maxH="200px"
                    objectFit="cover"
                  />
                </Link>
                <Text mt={2} fontFamily={"Old Standard TT"}>
                  {product[0]}
                </Text>
                {/* Assuming you have an 'AddToCart' component */}
                <AddToCart product={product} />
              </Box>
            ))}
        </Flex>
      </Container>
    </Box>
  );
}
