import Cookies from "js-cookie";

export const addToHistory = (product) => {
  let storedHistory = Cookies.get("history");
  let updatedHistory = [];

  if (storedHistory) {
    updatedHistory = JSON.parse(storedHistory);
  }

  // Check if the product is already in the history to avoid duplicates
  if (!updatedHistory.some((item) => item.id === product.id)) {
    updatedHistory.push(product);

    Cookies.set("history", JSON.stringify(updatedHistory), { expires: 7 });
    console.log(JSON.parse(Cookies.get("history")));
  }
};
