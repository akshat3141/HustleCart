import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { MdCardTravel, MdShoppingCart } from "react-icons/md";
import Cart from "./cart";
import { Button, useDisclosure } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useState } from "react";
import SearchBar from "./searchbar";

function Header() {
  const discl = useDisclosure();
  const [cartNum, setCartNum] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(Cookies.get("cart") || "{}");
    setCartNum(Object.keys(cart).length);
  }, [JSON.parse(Cookies.get("cart") || "{}")]);
  return (
    <>
      <header className="header1">
        <div className="company-name">
          <Link to="/" style={{ fontFamily: "'Old Standard TT', serif" }}>
            HustleCart
          </Link>
        </div>
        <div className="search-group">
          <SearchBar />
          <div className="user-actions">
            <Link
              to="/signin"
              style={{
                color: "var(--primary-color)",
                fontFamily: "'Merriweather', sans-serif",
              }}
            >
              Sign In
            </Link>
            <Link
              to="/wishlist"
              style={{
                color: "var(--primary-color)",
                fontFamily: "'Merriweather', sans-serif",
              }}
            >
              Wishlist
            </Link>
            <Button
              onClick={discl.onOpen}
              style={{ backgroundColor: "var(--highlight-color)" }}
            >
              <MdShoppingCart style={{ color: "var(--white-color)" }} />
            </Button>
          </div>
        </div>
      </header>
      <Cart discl={discl} />
    </>
  );
}

export default Header;
