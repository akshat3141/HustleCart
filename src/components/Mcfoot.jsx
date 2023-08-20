import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { man_casual_shoes } from "../data/men_casual_shoes";
import AddToCart from "./addtoCart";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

function ProductCard({ item, name, price, discount, image, id }) {
  const temp = [item?.productDisplayName, item?.id, item?.link];

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"fit-content"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image ? image : IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
          as={Link}
          to={`/p1/${id}`}
        >
          <Image
            rounded={"lg"}
            height={"auto"}
            width={282}
            objectFit={"cover"}
            src={image ? image : IMAGE}
            alt="#"
            backgroundPosition={"bottom"}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              {discount}
            </Text>
          </Stack>
          <AddToCart product={temp} />
        </Stack>
      </Box>
    </Center>
  );
}

export default function Mcfoot() {
  return (
    <div>
      <Flex
        justifyContent={"center"}
        alignItems={"start"}
        gap={8}
        flexWrap={"wrap"}
        height={"820px"}
        overflow="auto"
        m={7}
      >
        {man_casual_shoes.map((item, index) => {
          return (
            <ProductCard
              name={item.productDisplayName}
              price={`Rs898`}
              discount="Rs199"
              image={item.link}
              id={item.id}
              item={item}
            />
          );
        })}
      </Flex>
    </div>
  );
}
