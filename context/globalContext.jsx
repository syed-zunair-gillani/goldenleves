"use client";

import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [buttonState, setButtonState] = useState("cash");
  const [quantity, setQuantity] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);

  const addtocart = () => toast("Product add to cart");
  const quantityUpdate = () => toast("Product quantity updated!");

  const handleAdtoCart = (item) => {
    const updateProduct = { ...item, quantity };
    const itemIndex = cartProduct.findIndex((p) => p.id === updateProduct.id);
    if (itemIndex !== -1) {
      const updatedItems = [...cartProduct];
      updatedItems[itemIndex].quantity += updateProduct.quantity;
      setCartProduct(updatedItems);
      quantityUpdate();
    } else {
      setCartProduct([...cartProduct, updateProduct]);
      addtocart();
    }
  };

  const increaseQuantity = (p) => {
    const updatedItems = cartProduct.map((item) => {
      if (item.id === p.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartProduct(updatedItems);
  };

  const decreaseQuantity = (p) => {
    const updatedItems = cartProduct.map((item) => {
      if (item.id === p.id) {
        return { ...item, quantity: item.quantity <= 0 ? 0 : item.quantity - 1 };
      }
      return item;
    });
    setCartProduct(updatedItems);
  };

  const removeItemFromCart = (item) => {
    const remaningitems = cartProduct.filter((p) => p.id !== item.id);
    setCartProduct(remaningitems)
  }

  useEffect(() => {
    sessionStorage.setItem("cartProduct", JSON.stringify(cartProduct));
    const getCartProductFromSession = sessionStorage.getItem("cartProduct");
    const productList = JSON.parse(getCartProductFromSession);
    setCartProduct(productList);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        cartOpen,
        setCartOpen,
        buttonState,
        setButtonState,
        quantity,
        setQuantity,
        cartProduct,
        setCartProduct,
        handleAdtoCart,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
