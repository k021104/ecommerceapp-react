import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState([]);

   // Load cart from localStorage on first render
    useEffect(() => {
        const storedWishlist  = localStorage.getItem("wishlist");
        if (storedWishlist ) setWishlist(JSON.parse(storedWishlist));
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

  // Add wishlist
  const addToWishlist = (product) => {
    const exist = wishlist.find((item) => item.id === product.id);

    if (exist) {
      toast.info("Already in wishlist");
      return;
    }

    setWishlist([...wishlist, product]);
    toast.success("Added to wishlist");
  };

  // Remove wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
    toast.error("Removed from wishlist");
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
