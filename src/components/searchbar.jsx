import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
  List,
  ListItem,
  HStack,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdTrendingUp } from "react-icons/md";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const suggRef = useRef(null);
  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    await fetchSuggestions(query);
  };
  const fetchSuggestions = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/search/?query=${query}`
      );
      setSuggestions(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
    setLoading(false);
  };
  const handleClickOutside = (event) => {
    if (suggRef.current && !suggRef.current.contains(event.target)) {
      setSuggestions([]);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Box width="300px" position={"relative"}>
      <InputGroup>
        <Input
          type="text"
          placeholder="Search by name,colour,tags..."
          value={searchQuery}
          onChange={handleSearchChange}
          textColor={"#000"}
        />
        <InputRightElement pointerEvents="none">
          <SearchIcon color="gray.500" />
        </InputRightElement>
      </InputGroup>
      <Box
        position={"absolute"}
        top={"80%"}
        w={"100%"}
        zIndex={"1000000000"}
        ref={suggRef}
      >
        {loading && (
          <List mt={2} bg="gray.100" border="1px solid gray" borderRadius="md">
            <ListItem p={2}>
              <Spinner
                thickness="2px"
                speed="0.3s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            </ListItem>
          </List>
        )}
        {suggestions.length > 0 && (
          <List
            mt={2}
            bg="gray.100"
            border="1px solid gray"
            borderRadius="md"
            textColor={"#000"}
          >
            {suggestions.map((suggestion, index) => (
              <ListItem
                key={index}
                p={2}
                _hover={{ bg: "#000", color: "#fff" }}
              >
                <Link to={`/p1/${suggestion?.key}`} target="_blank">
                  <Flex
                    w={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    px={2}
                  >
                    {suggestion?.value}{" "}
                    {(index === 0) | (index === 1) && <MdTrendingUp />}
                  </Flex>
                </Link>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default SearchBar;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useLocation } from "react-router-dom";
// import ReactSearchBox from "react-search-box";
// import { women_tops } from "../data/women_tops";

// const options = [
//   { name: "Swedish", value: "sv" },
//   { name: "English", value: "en" },
// ];

// function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const formattedTops = women_tops.map((top) => ({
//     key: top.id,
//     value: top.productDisplayName,
//   }));
//   const fetchSuggestions = async (query) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:8000/search/?query=${query}`
//       );
//       setSuggestions(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching suggestions:", error);
//     }
//     setLoading(false);
//   };

//   const handleInputChange = async (value) => {
//     const newQuery = value;
//     console.log("daflkgnk");
//     setQuery(newQuery);
//     await fetchSuggestions(newQuery);
//   };

//   return (
//     <>
//       <ReactSearchBox
//         placeholder="Search for John, Jane or Mary"
//         data={suggestions}
//         onSelect={(record) => {
//           location.href = `/p1/${record.item.key}`;
//           console.log(record.item.key);
//         }}
//         onFocus={() => {
//           console.log("This function is called when is focussed");
//         }}
//         onChange={(value) => {
//           handleInputChange(value);
//         }}
//         autoFocus
//         iconBoxSize="48px"
//       />
//     </>
//   );
// }

// export default SearchBar;
