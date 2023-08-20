import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import App from "./App";

function Root() {
  return (
    <ChakraProvider>
      <CSSReset />
      <App />
    </ChakraProvider>
  );
}

export default Root;
