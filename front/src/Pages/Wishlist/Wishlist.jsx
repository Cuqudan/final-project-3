import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import styles from "../Home/Home.module.scss";
import axios from "axios";
import HeaderContact from "../../Components/Header/HeaderContact";
import ProductWishlist from "../../Components/ProductCards/ProductWishlist";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const [wishItems, setWishItems] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    // localStorage'den sepet listesini alın
    const storedwishlist = localStorage.getItem("wishlist");

    if (storedwishlist) {
      const parsedwishlist = JSON.parse(storedwishlist);
      // Her ürünün count değerini sayıya dönüştür
      const updatedWishItems = parsedwishlist.map((item) => ({
        ...item,
        count: parseInt(item.count) || 1, // Eğer count NaN veya undefined ise 1 olarak ayarla
        price: parseFloat(item.price).toFixed(2), // Fiyatı ondalık kısmı iki basamakla sınırla
      }));
      setWishItems(updatedWishItems);
    }
  }, []);
  const handleDecreaseQuantity = (itemId) => {
    const updatedWishItems = wishItems
      .map((item) => {
        if (item._id === itemId) {
          if (item.count > 1) {
            const newCount = item.count - 1;
            const newPrice = (item.price / item.count) * newCount; // Yeni fiyatı hesapla

            return {
              ...item,
              count: newCount,
              price: newPrice.toFixed(2), // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
            };
          } else {
            // Ürün adedi 1 ise ürünü sepetten kaldır
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null); // null olanları filtrele

    // Güncellenmiş sepet listesini localStorage'e kaydedin
    localStorage.setItem("wishlist", JSON.stringify(updatedWishItems));

    // State'i güncelleyin
    setWishItems(updatedWishItems);
  };

  return (
    <div className={styles.home}>
      <HeaderContact />
      <div className={styles.homeContainer}>
        <div className={styles.homeText}>
          <h1>FAVORITES</h1>
          <p>YOUR FAVORITE PRODUCTS</p>
        </div>
        <div className={styles.homeCards}>
          {wishItems && wishItems.map((item) => <ProductWishlist item={item}  removetoWish={() => handleDecreaseQuantity(item._id)}/>)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
