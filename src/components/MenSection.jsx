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
import "./font.css";

const IMAGE =
  "https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149001486.jpg?w=900&t=st=1692519221~exp=1692519821~hmac=f06ed174a207053049632fccb161570eae1daa85e79af12aa04c9f63ca00b91f";

function ProductCard({ name, price, discount, image, color }) {
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
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <a>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={image ? image : IMAGE}
              alt="#"
            />
          </a>
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading
            fontSize={"2xl"}
            fontWeight={"500"}
            fontFamily={"Aqua Grotesque"}
          >
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
        </Stack>
      </Box>
    </Center>
  );
}

export default function MenSection() {
  const arr = [
    {
      name: "Formal Shirts",
      image: "./men_shirt.jpg",
      link: "/shorts",
      color: "brown",
    },
    {
      name: "T-shirts",
      image: "./men_tshirt.jpg",
      link: "/mtshirts",
      color: "brown",
    },
    {
      name: "Watches",
      image: "./men_watch.jpg",
      link: "/mwatches",
      color: "brown",
    },
    {
      name: "Casual Footwear",
      image: "./men_casual_shoes.webp",
      link: "/mcfoot",
      color: "brown",
    },
    {
      name: "Sports and Active Footwear",
      image: "./men_sports_shoes.jpg",
      link: "/msfoot",
      color: "brown",
    },
  ];
  return (
    <div className="men-section">
      <Flex
        justifyContent={"center"}
        alignItems={"start"}
        gap={8}
        flexWrap={"wrap"}
        height={"fit-content"}
        overflow="auto"
        font-family={"Old Standard TT"}
      >
        {arr.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              <ProductCard
                name={item.name}
                image={item.image}
                color={item.color}
              />
            </Link>
          );
        })}
      </Flex>
    </div>
  );
}
